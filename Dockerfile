# ==============================================================================
# HOROLOGIUM // DOCKER PRODUCTION CONTAINER (MULTI-STAGE)
# Node.js 24 Alpine with Embedded SQLite & Production Vite Bundle
# ==============================================================================

# STAGE 1: Build Frontend Assets
FROM node:24-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# STAGE 2: Production Server Runner
FROM node:24-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000
ENV HOST=0.0.0.0

COPY package*.json ./
RUN npm ci --omit=dev

# Copy built frontend assets and server application
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/server ./server
COPY --from=builder /app/server.js ./server.js
COPY --from=builder /app/public ./public

# Ensure database directory exists
RUN mkdir -p /app/server/data

EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:3000/api/health || exit 1

CMD ["node", "server.js"]
