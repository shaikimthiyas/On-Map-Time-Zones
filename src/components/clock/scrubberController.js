/**
 * Horologium Mechanical Scrubber Controller
 * 24-Hour Camera Aperture / Radio Scale Tuner with 1px Vermilion Needle
 */

export class ScrubberController {
  constructor(options = {}) {
    this.scrubberTrack = document.getElementById('scrubberTrack');
    this.scrubberScale = document.getElementById('scrubberScale');
    this.scrubberNeedle = document.getElementById('scrubberNeedle');
    this.liveSnapBtn = document.getElementById('liveSnapBtn');
    this.simulatedOffsetLabel = document.getElementById('simulatedOffsetLabel');

    this.onTimeShift = options.onTimeShift || (() => {});

    this.offsetMinutes = 0;
    this.isLive = true;
    this.isDragging = false;

    this.init();
  }

  init() {
    this.renderTicks();
    this.setupInteractions();
  }

  renderTicks() {
    if (!this.scrubberScale) return;
    this.scrubberScale.innerHTML = '';

    // 24 Hours x 4 = 96 ticks
    for (let i = 0; i <= 96; i++) {
      const tick = document.createElement('div');
      tick.classList.add('ruler-tick');

      if (i % 4 === 0) {
        tick.classList.add('hour');
        const hourNum = i / 4;
        if (hourNum % 2 === 0) {
          const label = document.createElement('span');
          label.classList.add('hour-label');
          label.textContent = `${String(hourNum).padStart(2, '0')}:00`;
          tick.appendChild(label);
        }
      } else if (i % 2 === 0) {
        tick.classList.add('minute-30');
      } else {
        tick.classList.add('minute-15');
      }

      this.scrubberScale.appendChild(tick);
    }
  }

  setupInteractions() {
    if (!this.scrubberTrack) return;

    const handleScrub = (clientX) => {
      const rect = this.scrubberTrack.getBoundingClientRect();
      const offsetX = Math.max(0, Math.min(clientX - rect.left, rect.width));
      const pct = offsetX / rect.width;

      const targetUtcMinutes = pct * 1440;
      const now = new Date();
      const currentUtcMinutes = now.getUTCHours() * 60 + now.getUTCMinutes() + now.getUTCSeconds() / 60;

      this.offsetMinutes = Math.round(targetUtcMinutes - currentUtcMinutes);
      this.isLive = false;

      if (this.scrubberNeedle) {
        this.scrubberNeedle.style.left = `${(pct * 100).toFixed(2)}%`;
      }

      if (this.liveSnapBtn) {
        this.liveSnapBtn.classList.remove('is-live');
      }

      if (this.simulatedOffsetLabel) {
        const sign = this.offsetMinutes >= 0 ? '+' : '−';
        const absH = Math.floor(Math.abs(this.offsetMinutes) / 60);
        const absM = Math.abs(this.offsetMinutes) % 60;
        this.simulatedOffsetLabel.textContent = `TIME TRAVEL: ${sign}${String(absH).padStart(2, '0')}:${String(absM).padStart(2, '0')} (SIM)`;
      }

      this.onTimeShift(this.getActiveDate());
    };

    this.scrubberTrack.addEventListener('mousedown', (e) => {
      this.isDragging = true;
      handleScrub(e.clientX);
    });

    window.addEventListener('mousemove', (e) => {
      if (this.isDragging) handleScrub(e.clientX);
    });

    window.addEventListener('mouseup', () => {
      this.isDragging = false;
    });

    // Touch events for mobile/tablet
    this.scrubberTrack.addEventListener('touchstart', (e) => {
      this.isDragging = true;
      if (e.touches && e.touches[0]) handleScrub(e.touches[0].clientX);
    }, { passive: true });

    window.addEventListener('touchmove', (e) => {
      if (this.isDragging && e.touches && e.touches[0]) handleScrub(e.touches[0].clientX);
    }, { passive: true });

    window.addEventListener('touchend', () => {
      this.isDragging = false;
    });

    if (this.liveSnapBtn) {
      this.liveSnapBtn.addEventListener('click', () => {
        this.snapToLive();
      });
    }
  }

  snapToLive() {
    this.offsetMinutes = 0;
    this.isLive = true;
    if (this.liveSnapBtn) this.liveSnapBtn.classList.add('is-live');
    if (this.simulatedOffsetLabel) {
      this.simulatedOffsetLabel.textContent = 'OFFSET: ±00:00 (LIVE)';
    }
    this.onTimeShift(new Date());
  }

  updateLiveNeedle(date) {
    if (this.isLive && this.scrubberNeedle && !this.isDragging) {
      const d = date || new Date();
      const totalDayMinutes = d.getUTCHours() * 60 + d.getUTCMinutes() + d.getUTCSeconds() / 60;
      const pct = (totalDayMinutes / 1440) * 100;
      this.scrubberNeedle.style.left = `${pct.toFixed(2)}%`;
    }
  }

  getActiveDate() {
    const now = new Date();
    if (this.isLive || this.offsetMinutes === 0) {
      return now;
    }
    return new Date(now.getTime() + this.offsetMinutes * 60 * 1000);
  }
}
