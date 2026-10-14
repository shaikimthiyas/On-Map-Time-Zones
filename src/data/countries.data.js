/**
 * Horologium Geodesic Country & Timezone Registry
 * Exhaustive mapping of all 220 sovereign entities and territories
 * to standard IANA timezone keys, UTC offsets, flags, and capitals.
 */

export const COUNTRIES_DATA = {
  'Afghanistan': { code: 'AF', flag: '🇦🇫', tz: 'Asia/Kabul', capital: 'Kabul', utc: 'UTC+04:30', abbr: 'AFT' },
  'Albania': { code: 'AL', flag: '🇦🇱', tz: 'Europe/Tirane', capital: 'Tirana', utc: 'UTC+01:00', abbr: 'CET' },
  'Algeria': { code: 'DZ', flag: '🇩🇿', tz: 'Africa/Algiers', capital: 'Algiers', utc: 'UTC+01:00', abbr: 'CET' },
  'American Samoa': { code: 'AS', flag: '🇦🇸', tz: 'Pacific/Pago_Pago', capital: 'Pago Pago', utc: 'UTC-11:00', abbr: 'SST' },
  'Angola': { code: 'AO', flag: '🇦🇴', tz: 'Africa/Luanda', capital: 'Luanda', utc: 'UTC+01:00', abbr: 'WAT' },
  'Anguilla': { code: 'AI', flag: '🇦🇮', tz: 'America/Anguilla', capital: 'The Valley', utc: 'UTC-04:00', abbr: 'AST' },
  'Antigua and Barbuda': { code: 'AG', flag: '🇦🇬', tz: 'America/Antigua', capital: "St. John's", utc: 'UTC-04:00', abbr: 'AST' },
  'Argentina': { code: 'AR', flag: '🇦🇷', tz: 'America/Argentina/Buenos_Aires', capital: 'Buenos Aires', utc: 'UTC-03:00', abbr: 'ART' },
  'Armenia': { code: 'AM', flag: '🇦🇲', tz: 'Asia/Yerevan', capital: 'Yerevan', utc: 'UTC+04:00', abbr: 'AMT' },
  'Aruba': { code: 'AW', flag: '🇦🇼', tz: 'America/Aruba', capital: 'Oranjestad', utc: 'UTC-04:00', abbr: 'AST' },
  'Australia': { code: 'AU', flag: '🇦🇺', tz: 'Australia/Sydney', capital: 'Canberra', utc: 'UTC+10:00', abbr: 'AEST' },
  'Austria': { code: 'AT', flag: '🇦🇹', tz: 'Europe/Vienna', capital: 'Vienna', utc: 'UTC+01:00', abbr: 'CET' },
  'Azerbaijan': { code: 'AZ', flag: '🇦🇿', tz: 'Asia/Baku', capital: 'Baku', utc: 'UTC+04:00', abbr: 'AZT' },
  'Bahamas': { code: 'BS', flag: '🇧🇸', tz: 'America/Nassau', capital: 'Nassau', utc: 'UTC-05:00', abbr: 'EST' },
  'Bahrain': { code: 'BH', flag: '🇧🇭', tz: 'Asia/Bahrain', capital: 'Manama', utc: 'UTC+03:00', abbr: 'AST' },
  'Bangladesh': { code: 'BD', flag: '🇧🇩', tz: 'Asia/Dhaka', capital: 'Dhaka', utc: 'UTC+06:00', abbr: 'BST' },
  'Barbados': { code: 'BB', flag: '🇧🇧', tz: 'America/Barbados', capital: 'Bridgetown', utc: 'UTC-04:00', abbr: 'AST' },
  'Belarus': { code: 'BY', flag: '🇧🇾', tz: 'Europe/Minsk', capital: 'Minsk', utc: 'UTC+03:00', abbr: 'MSK' },
  'Belgium': { code: 'BE', flag: '🇧🇪', tz: 'Europe/Brussels', capital: 'Brussels', utc: 'UTC+01:00', abbr: 'CET' },
  'Belize': { code: 'BZ', flag: '🇧🇿', tz: 'America/Belize', capital: 'Belmopan', utc: 'UTC-06:00', abbr: 'CST' },
  'Benin': { code: 'BJ', flag: '🇧🇯', tz: 'Africa/Porto-Novo', capital: 'Porto-Novo', utc: 'UTC+01:00', abbr: 'WAT' },
  'Bermuda': { code: 'BM', flag: '🇧🇲', tz: 'Atlantic/Bermuda', capital: 'Hamilton', utc: 'UTC-04:00', abbr: 'AST' },
  'Bhutan': { code: 'BT', flag: '🇧🇹', tz: 'Asia/Thimphu', capital: 'Thimphu', utc: 'UTC+06:00', abbr: 'BTT' },
  'Bolivia': { code: 'BO', flag: '🇧🇴', tz: 'America/La_Paz', capital: 'Sucre', utc: 'UTC-04:00', abbr: 'BOT' },
  'Bosnia and Herzegovina': { code: 'BA', flag: '🇧🇦', tz: 'Europe/Sarajevo', capital: 'Sarajevo', utc: 'UTC+01:00', abbr: 'CET' },
  'Botswana': { code: 'BW', flag: '🇧🇼', tz: 'Africa/Gaborone', capital: 'Gaborone', utc: 'UTC+02:00', abbr: 'CAT' },
  'Brazil': { code: 'BR', flag: '🇧🇷', tz: 'America/Sao_Paulo', capital: 'Brasília', utc: 'UTC-03:00', abbr: 'BRT' },
  'British Virgin Islands': { code: 'VG', flag: '🇻🇬', tz: 'America/Tortola', capital: 'Road Town', utc: 'UTC-04:00', abbr: 'AST' },
  'Brunei Darussalam': { code: 'BN', flag: '🇧🇳', tz: 'Asia/Brunei', capital: 'Bandar Seri Begawan', utc: 'UTC+08:00', abbr: 'BNT' },
  'Bulgaria': { code: 'BG', flag: '🇧🇬', tz: 'Europe/Sofia', capital: 'Sofia', utc: 'UTC+02:00', abbr: 'EET' },
  'Burkina Faso': { code: 'BF', flag: '🇧🇫', tz: 'Africa/Ouagadougou', capital: 'Ouagadougou', utc: 'UTC+00:00', abbr: 'GMT' },
  'Burundi': { code: 'BI', flag: '🇧🇮', tz: 'Africa/Bujumbura', capital: 'Gitega', utc: 'UTC+02:00', abbr: 'CAT' },
  'Cambodia': { code: 'KH', flag: '🇰🇭', tz: 'Asia/Phnom_Penh', capital: 'Phnom Penh', utc: 'UTC+07:00', abbr: 'ICT' },
  'Cameroon': { code: 'CM', flag: '🇨🇲', tz: 'Africa/Douala', capital: 'Yaoundé', utc: 'UTC+01:00', abbr: 'WAT' },
  'Canada': { code: 'CA', flag: '🇨🇦', tz: 'America/Toronto', capital: 'Ottawa', utc: 'UTC-05:00', abbr: 'EST' },
  'Canary Islands (Spain)': { code: 'ES-CN', flag: '🇮🇨', tz: 'Atlantic/Canary', capital: 'Las Palmas', utc: 'UTC+00:00', abbr: 'WET' },
  'Cape Verde': { code: 'CV', flag: '🇨🇻', tz: 'Atlantic/Cape_Verde', capital: 'Praia', utc: 'UTC-01:00', abbr: 'CVT' },
  'Cayman Islands': { code: 'KY', flag: '🇰🇾', tz: 'America/Cayman', capital: 'George Town', utc: 'UTC-05:00', abbr: 'EST' },
  'Central African Republic': { code: 'CF', flag: '🇨🇫', tz: 'Africa/Bangui', capital: 'Bangui', utc: 'UTC+01:00', abbr: 'WAT' },
  'Chad': { code: 'TD', flag: '🇹🇩', tz: 'Africa/Ndjamena', capital: "N'Djamena", utc: 'UTC+01:00', abbr: 'WAT' },
  'Chile': { code: 'CL', flag: '🇨🇱', tz: 'America/Santiago', capital: 'Santiago', utc: 'UTC-04:00', abbr: 'CLT' },
  'China': { code: 'CN', flag: '🇨🇳', tz: 'Asia/Shanghai', capital: 'Beijing', utc: 'UTC+08:00', abbr: 'CST' },
  'Colombia': { code: 'CO', flag: '🇨🇴', tz: 'America/Bogota', capital: 'Bogotá', utc: 'UTC-05:00', abbr: 'COT' },
  'Comoros': { code: 'KM', flag: '🇰🇲', tz: 'Indian/Comoro', capital: 'Moroni', utc: 'UTC+03:00', abbr: 'EAT' },
  'Costa Rica': { code: 'CR', flag: '🇨🇷', tz: 'America/Costa_Rica', capital: 'San José', utc: 'UTC-06:00', abbr: 'CST' },
  'Croatia': { code: 'HR', flag: '🇭🇷', tz: 'Europe/Zagreb', capital: 'Zagreb', utc: 'UTC+01:00', abbr: 'CET' },
  'Cuba': { code: 'CU', flag: '🇨🇺', tz: 'America/Havana', capital: 'Havana', utc: 'UTC-05:00', abbr: 'CST' },
  'Curaçao': { code: 'CW', flag: '🇨🇼', tz: 'America/Curacao', capital: 'Willemstad', utc: 'UTC-04:00', abbr: 'AST' },
  'Cyprus': { code: 'CY', flag: '🇨🇾', tz: 'Asia/Nicosia', capital: 'Nicosia', utc: 'UTC+02:00', abbr: 'EET' },
  'Czech Republic': { code: 'CZ', flag: '🇨🇿', tz: 'Europe/Prague', capital: 'Prague', utc: 'UTC+01:00', abbr: 'CET' },
  "Côte d'Ivoire": { code: 'CI', flag: '🇨🇮', tz: 'Africa/Abidjan', capital: 'Yamoussoukro', utc: 'UTC+00:00', abbr: 'GMT' },
  'Democratic Republic of the Congo': { code: 'CD', flag: '🇨🇩', tz: 'Africa/Kinshasa', capital: 'Kinshasa', utc: 'UTC+01:00', abbr: 'WAT' },
  'Denmark': { code: 'DK', flag: '🇩🇰', tz: 'Europe/Copenhagen', capital: 'Copenhagen', utc: 'UTC+01:00', abbr: 'CET' },
  'Djibouti': { code: 'DJ', flag: '🇩🇯', tz: 'Africa/Djibouti', capital: 'Djibouti', utc: 'UTC+03:00', abbr: 'EAT' },
  'Dominica': { code: 'DM', flag: '🇩🇲', tz: 'America/Dominica', capital: 'Roseau', utc: 'UTC-04:00', abbr: 'AST' },
  'Dominican Republic': { code: 'DO', flag: '🇩🇴', tz: 'America/Santo_Domingo', capital: 'Santo Domingo', utc: 'UTC-04:00', abbr: 'AST' },
  'Ecuador': { code: 'EC', flag: '🇪🇨', tz: 'America/Guayaquil', capital: 'Quito', utc: 'UTC-05:00', abbr: 'ECT' },
  'Egypt': { code: 'EG', flag: '🇪🇬', tz: 'Africa/Cairo', capital: 'Cairo', utc: 'UTC+02:00', abbr: 'EET' },
  'El Salvador': { code: 'SV', flag: '🇸🇻', tz: 'America/El_Salvador', capital: 'San Salvador', utc: 'UTC-06:00', abbr: 'CST' },
  'Equatorial Guinea': { code: 'GQ', flag: '🇬🇶', tz: 'Africa/Malabo', capital: 'Malabo', utc: 'UTC+01:00', abbr: 'WAT' },
  'Eritrea': { code: 'ER', flag: '🇪🇷', tz: 'Africa/Asmara', capital: 'Asmara', utc: 'UTC+03:00', abbr: 'EAT' },
  'Estonia': { code: 'EE', flag: '🇪🇪', tz: 'Europe/Tallinn', capital: 'Tallinn', utc: 'UTC+02:00', abbr: 'EET' },
  'Ethiopia': { code: 'ET', flag: '🇪🇹', tz: 'Africa/Addis_Ababa', capital: 'Addis Ababa', utc: 'UTC+03:00', abbr: 'EAT' },
  'Faeroe Islands': { code: 'FO', flag: '🇫🇴', tz: 'Atlantic/Faroe', capital: 'Tórshavn', utc: 'UTC+00:00', abbr: 'WET' },
  'Falkland Islands': { code: 'FK', flag: '🇫🇰', tz: 'Atlantic/Stanley', capital: 'Stanley', utc: 'UTC-03:00', abbr: 'FKST' },
  'Federated States of Micronesia': { code: 'FM', flag: '🇫🇲', tz: 'Pacific/Pohnpei', capital: 'Palikir', utc: 'UTC+11:00', abbr: 'PONT' },
  'Fiji': { code: 'FJ', flag: '🇫🇯', tz: 'Pacific/Fiji', capital: 'Suva', utc: 'UTC+12:00', abbr: 'FJT' },
  'Finland': { code: 'FI', flag: '🇫🇮', tz: 'Europe/Helsinki', capital: 'Helsinki', utc: 'UTC+02:00', abbr: 'EET' },
  'France': { code: 'FR', flag: '🇫🇷', tz: 'Europe/Paris', capital: 'Paris', utc: 'UTC+01:00', abbr: 'CET' },
  'French Guiana': { code: 'GF', flag: '🇬🇫', tz: 'America/Cayenne', capital: 'Cayenne', utc: 'UTC-03:00', abbr: 'GFT' },
  'French Polynesia': { code: 'PF', flag: '🇵🇫', tz: 'Pacific/Tahiti', capital: 'Papeete', utc: 'UTC-10:00', abbr: 'TAHT' },
  'Gabon': { code: 'GA', flag: '🇬🇦', tz: 'Africa/Libreville', capital: 'Libreville', utc: 'UTC+01:00', abbr: 'WAT' },
  'Georgia': { code: 'GE', flag: '🇬🇪', tz: 'Asia/Tbilisi', capital: 'Tbilisi', utc: 'UTC+04:00', abbr: 'GET' },
  'Germany': { code: 'DE', flag: '🇩🇪', tz: 'Europe/Berlin', capital: 'Berlin', utc: 'UTC+01:00', abbr: 'CET' },
  'Ghana': { code: 'GH', flag: '🇬🇭', tz: 'Africa/Accra', capital: 'Accra', utc: 'UTC+00:00', abbr: 'GMT' },
  'Greece': { code: 'GR', flag: '🇬🇷', tz: 'Europe/Athens', capital: 'Athens', utc: 'UTC+02:00', abbr: 'EET' },
  'Greenland': { code: 'GL', flag: '🇬🇱', tz: 'America/Nuuk', capital: 'Nuuk', utc: 'UTC-02:00', abbr: 'WGT' },
  'Grenada': { code: 'GD', flag: '🇬🇩', tz: 'America/Grenada', capital: "St. George's", utc: 'UTC-04:00', abbr: 'AST' },
  'Guadeloupe': { code: 'GP', flag: '🇬🇵', tz: 'America/Guadeloupe', capital: 'Basse-Terre', utc: 'UTC-04:00', abbr: 'AST' },
  'Guam': { code: 'GU', flag: '🇬🇺', tz: 'Pacific/Guam', capital: 'Hagåtña', utc: 'UTC+10:00', abbr: 'ChST' },
  'Guatemala': { code: 'GT', flag: '🇬🇹', tz: 'America/Guatemala', capital: 'Guatemala City', utc: 'UTC-06:00', abbr: 'CST' },
  'Guinea': { code: 'GN', flag: '🇬🇳', tz: 'Africa/Conakry', capital: 'Conakry', utc: 'UTC+00:00', abbr: 'GMT' },
  'Guinea-Bissau': { code: 'GW', flag: '🇬🇼', tz: 'Africa/Bissau', capital: 'Bissau', utc: 'UTC+00:00', abbr: 'GMT' },
  'Guyana': { code: 'GY', flag: '🇬🇾', tz: 'America/Guyana', capital: 'Georgetown', utc: 'UTC-04:00', abbr: 'GYT' },
  'Haiti': { code: 'HT', flag: '🇭🇹', tz: 'America/Port-au-Prince', capital: 'Port-au-Prince', utc: 'UTC-05:00', abbr: 'EST' },
  'Honduras': { code: 'HN', flag: '🇭🇳', tz: 'America/Tegucigalpa', capital: 'Tegucigalpa', utc: 'UTC-06:00', abbr: 'CST' },
  'Hungary': { code: 'HU', flag: '🇭🇺', tz: 'Europe/Budapest', capital: 'Budapest', utc: 'UTC+01:00', abbr: 'CET' },
  'Iceland': { code: 'IS', flag: '🇮🇸', tz: 'Atlantic/Reykjavik', capital: 'Reykjavik', utc: 'UTC+00:00', abbr: 'GMT' },
  'India': { code: 'IN', flag: '🇮🇳', tz: 'Asia/Kolkata', capital: 'New Delhi', utc: 'UTC+05:30', abbr: 'IST' },
  'Indonesia': { code: 'ID', flag: '🇮🇩', tz: 'Asia/Jakarta', capital: 'Jakarta', utc: 'UTC+07:00', abbr: 'WIB' },
  'Iran': { code: 'IR', flag: '🇮🇷', tz: 'Asia/Tehran', capital: 'Tehran', utc: 'UTC+03:30', abbr: 'IRST' },
  'Iraq': { code: 'IQ', flag: '🇮🇶', tz: 'Asia/Baghdad', capital: 'Baghdad', utc: 'UTC+03:00', abbr: 'AST' },
  'Ireland': { code: 'IE', flag: '🇮🇪', tz: 'Europe/Dublin', capital: 'Dublin', utc: 'UTC+00:00', abbr: 'GMT' },
  'Israel': { code: 'IL', flag: '🇮🇱', tz: 'Asia/Jerusalem', capital: 'Jerusalem', utc: 'UTC+02:00', abbr: 'IST' },
  'Italy': { code: 'IT', flag: '🇮🇹', tz: 'Europe/Rome', capital: 'Rome', utc: 'UTC+01:00', abbr: 'CET' },
  'Jamaica': { code: 'JM', flag: '🇯🇲', tz: 'America/Jamaica', capital: 'Kingston', utc: 'UTC-05:00', abbr: 'EST' },
  'Japan': { code: 'JP', flag: '🇯🇵', tz: 'Asia/Tokyo', capital: 'Tokyo', utc: 'UTC+09:00', abbr: 'JST' },
  'Jordan': { code: 'JO', flag: '🇯🇴', tz: 'Asia/Amman', capital: 'Amman', utc: 'UTC+03:00', abbr: 'AST' },
  'Kazakhstan': { code: 'KZ', flag: '🇰🇿', tz: 'Asia/Almaty', capital: 'Astana', utc: 'UTC+05:00', abbr: 'ALMT' },
  'Kenya': { code: 'KE', flag: '🇰🇪', tz: 'Africa/Nairobi', capital: 'Nairobi', utc: 'UTC+03:00', abbr: 'EAT' },
  'Kosovo': { code: 'XK', flag: '🇽🇰', tz: 'Europe/Belgrade', capital: 'Pristina', utc: 'UTC+01:00', abbr: 'CET' },
  'Kuwait': { code: 'KW', flag: '🇰🇼', tz: 'Asia/Kuwait', capital: 'Kuwait City', utc: 'UTC+03:00', abbr: 'AST' },
  'Kyrgyzstan': { code: 'KG', flag: '🇰🇬', tz: 'Asia/Bishkek', capital: 'Bishkek', utc: 'UTC+06:00', abbr: 'KGT' },
  'Lao PDR': { code: 'LA', flag: '🇱🇦', tz: 'Asia/Vientiane', capital: 'Vientiane', utc: 'UTC+07:00', abbr: 'ICT' },
  'Latvia': { code: 'LV', flag: '🇱🇻', tz: 'Europe/Riga', capital: 'Riga', utc: 'UTC+02:00', abbr: 'EET' },
  'Lebanon': { code: 'LB', flag: '🇱🇧', tz: 'Asia/Beirut', capital: 'Beirut', utc: 'UTC+02:00', abbr: 'EET' },
  'Lesotho': { code: 'LS', flag: '🇱🇸', tz: 'Africa/Maseru', capital: 'Maseru', utc: 'UTC+02:00', abbr: 'SAST' },
  'Liberia': { code: 'LR', flag: '🇱🇷', tz: 'Africa/Monrovia', capital: 'Monrovia', utc: 'UTC+00:00', abbr: 'GMT' },
  'Libya': { code: 'LY', flag: '🇱🇾', tz: 'Africa/Tripoli', capital: 'Tripoli', utc: 'UTC+02:00', abbr: 'EET' },
  'Lithuania': { code: 'LT', flag: '🇱🇹', tz: 'Europe/Vilnius', capital: 'Vilnius', utc: 'UTC+02:00', abbr: 'EET' },
  'Luxembourg': { code: 'LU', flag: '🇱🇺', tz: 'Europe/Luxembourg', capital: 'Luxembourg City', utc: 'UTC+01:00', abbr: 'CET' },
  'Macedonia': { code: 'MK', flag: '🇲🇰', tz: 'Europe/Skopje', capital: 'Skopje', utc: 'UTC+01:00', abbr: 'CET' },
  'Madagascar': { code: 'MG', flag: '🇲🇬', tz: 'Indian/Antananarivo', capital: 'Antananarivo', utc: 'UTC+03:00', abbr: 'EAT' },
  'Malawi': { code: 'MW', flag: '🇲🇼', tz: 'Africa/Blantyre', capital: 'Lilongwe', utc: 'UTC+02:00', abbr: 'CAT' },
  'Malaysia': { code: 'MY', flag: '🇲🇾', tz: 'Asia/Kuala_Lumpur', capital: 'Kuala Lumpur', utc: 'UTC+08:00', abbr: 'MYT' },
  'Maldives': { code: 'MV', flag: '🇲🇻', tz: 'Indian/Maldives', capital: 'Malé', utc: 'UTC+05:00', abbr: 'MVT' },
  'Mali': { code: 'ML', flag: '🇲🇱', tz: 'Africa/Bamako', capital: 'Bamako', utc: 'UTC+00:00', abbr: 'GMT' },
  'Malta': { code: 'MT', flag: '🇲🇹', tz: 'Europe/Malta', capital: 'Valletta', utc: 'UTC+01:00', abbr: 'CET' },
  'Marshall Islands': { code: 'MH', flag: '🇲🇭', tz: 'Pacific/Majuro', capital: 'Majuro', utc: 'UTC+12:00', abbr: 'MHT' },
  'Martinique': { code: 'MQ', flag: '🇲🇶', tz: 'America/Martinique', capital: 'Fort-de-France', utc: 'UTC-04:00', abbr: 'AST' },
  'Mauritania': { code: 'MR', flag: '🇲🇷', tz: 'Africa/Nouakchott', capital: 'Nouakchott', utc: 'UTC+00:00', abbr: 'GMT' },
  'Mauritius': { code: 'MU', flag: '🇲🇺', tz: 'Indian/Mauritius', capital: 'Port Louis', utc: 'UTC+04:00', abbr: 'MUT' },
  'Mayotte': { code: 'YT', flag: '🇾🇹', tz: 'Indian/Mayotte', capital: 'Mamoudzou', utc: 'UTC+03:00', abbr: 'EAT' },
  'Mexico': { code: 'MX', flag: '🇲🇽', tz: 'America/Mexico_City', capital: 'Mexico City', utc: 'UTC-06:00', abbr: 'CST' },
  'Moldova': { code: 'MD', flag: '🇲🇩', tz: 'Europe/Chisinau', capital: 'Chișinău', utc: 'UTC+02:00', abbr: 'EET' },
  'Mongolia': { code: 'MN', flag: '🇲🇳', tz: 'Asia/Ulaanbaatar', capital: 'Ulaanbaatar', utc: 'UTC+08:00', abbr: 'ULAT' },
  'Montenegro': { code: 'ME', flag: '🇲🇪', tz: 'Europe/Podgorica', capital: 'Podgorica', utc: 'UTC+01:00', abbr: 'CET' },
  'Montserrat': { code: 'MS', flag: '🇲🇸', tz: 'America/Montserrat', capital: 'Plymouth', utc: 'UTC-04:00', abbr: 'AST' },
  'Morocco': { code: 'MA', flag: '🇲🇦', tz: 'Africa/Casablanca', capital: 'Rabat', utc: 'UTC+01:00', abbr: 'WEST' },
  'Mozambique': { code: 'MZ', flag: '🇲🇿', tz: 'Africa/Maputo', capital: 'Maputo', utc: 'UTC+02:00', abbr: 'CAT' },
  'Myanmar': { code: 'MM', flag: '🇲🇲', tz: 'Asia/Yangon', capital: 'Naypyidaw', utc: 'UTC+06:30', abbr: 'MMT' },
  'Namibia': { code: 'NA', flag: '🇳🇦', tz: 'Africa/Windhoek', capital: 'Windhoek', utc: 'UTC+02:00', abbr: 'CAT' },
  'Nauru': { code: 'NR', flag: '🇳🇷', tz: 'Pacific/Nauru', capital: 'Yaren', utc: 'UTC+12:00', abbr: 'NRT' },
  'Nepal': { code: 'NP', flag: '🇳🇵', tz: 'Asia/Kathmandu', capital: 'Kathmandu', utc: 'UTC+05:45', abbr: 'NPT' },
  'Netherlands': { code: 'NL', flag: '🇳🇱', tz: 'Europe/Amsterdam', capital: 'Amsterdam', utc: 'UTC+01:00', abbr: 'CET' },
  'New Caledonia': { code: 'NC', flag: '🇳🇨', tz: 'Pacific/Noumea', capital: 'Nouméa', utc: 'UTC+11:00', abbr: 'NCT' },
  'New Zealand': { code: 'NZ', flag: '🇳🇿', tz: 'Pacific/Auckland', capital: 'Wellington', utc: 'UTC+12:00', abbr: 'NZST' },
  'Nicaragua': { code: 'NI', flag: '🇳🇮', tz: 'America/Managua', capital: 'Managua', utc: 'UTC-06:00', abbr: 'CST' },
  'Niger': { code: 'NE', flag: '🇳🇪', tz: 'Africa/Niamey', capital: 'Niamey', utc: 'UTC+01:00', abbr: 'WAT' },
  'Nigeria': { code: 'NG', flag: '🇳🇬', tz: 'Africa/Lagos', capital: 'Abuja', utc: 'UTC+01:00', abbr: 'WAT' },
  'North Korea': { code: 'KP', flag: '🇰🇵', tz: 'Asia/Pyongyang', capital: 'Pyongyang', utc: 'UTC+09:00', abbr: 'KST' },
  'Northern Mariana Islands': { code: 'MP', flag: '🇲🇵', tz: 'Pacific/Saipan', capital: 'Saipan', utc: 'UTC+10:00', abbr: 'ChST' },
  'Norway': { code: 'NO', flag: '🇳🇴', tz: 'Europe/Oslo', capital: 'Oslo', utc: 'UTC+01:00', abbr: 'CET' },
  'Oman': { code: 'OM', flag: '🇴🇲', tz: 'Asia/Muscat', capital: 'Muscat', utc: 'UTC+04:00', abbr: 'GST' },
  'Pakistan': { code: 'PK', flag: '🇵🇰', tz: 'Asia/Karachi', capital: 'Islamabad', utc: 'UTC+05:00', abbr: 'PKT' },
  'Palau': { code: 'PW', flag: '🇵🇼', tz: 'Pacific/Palau', capital: 'Ngerulmud', utc: 'UTC+09:00', abbr: 'PWT' },
  'Palestine': { code: 'PS', flag: '🇵🇸', tz: 'Asia/Gaza', capital: 'Ramallah', utc: 'UTC+02:00', abbr: 'EET' },
  'Panama': { code: 'PA', flag: '🇵🇦', tz: 'America/Panama', capital: 'Panama City', utc: 'UTC-05:00', abbr: 'EST' },
  'Papua New Guinea': { code: 'PG', flag: '🇵🇬', tz: 'Pacific/Port_Moresby', capital: 'Port Moresby', utc: 'UTC+10:00', abbr: 'PGT' },
  'Paraguay': { code: 'PY', flag: '🇵🇾', tz: 'America/Asuncion', capital: 'Asunción', utc: 'UTC-04:00', abbr: 'PYT' },
  'Peru': { code: 'PE', flag: '🇵🇪', tz: 'America/Lima', capital: 'Lima', utc: 'UTC-05:00', abbr: 'PET' },
  'Philippines': { code: 'PH', flag: '🇵🇭', tz: 'Asia/Manila', capital: 'Manila', utc: 'UTC+08:00', abbr: 'PHT' },
  'Poland': { code: 'PL', flag: '🇵🇱', tz: 'Europe/Warsaw', capital: 'Warsaw', utc: 'UTC+01:00', abbr: 'CET' },
  'Portugal': { code: 'PT', flag: '🇵🇹', tz: 'Europe/Lisbon', capital: 'Lisbon', utc: 'UTC+00:00', abbr: 'WET' },
  'Puerto Rico': { code: 'PR', flag: '🇵🇷', tz: 'America/Puerto_Rico', capital: 'San Juan', utc: 'UTC-04:00', abbr: 'AST' },
  'Qatar': { code: 'QA', flag: '🇶🇦', tz: 'Asia/Qatar', capital: 'Doha', utc: 'UTC+03:00', abbr: 'AST' },
  'Republic of Congo': { code: 'CG', flag: '🇨🇬', tz: 'Africa/Brazzaville', capital: 'Brazzaville', utc: 'UTC+01:00', abbr: 'WAT' },
  'Reunion': { code: 'RE', flag: '🇷🇪', tz: 'Indian/Reunion', capital: 'Saint-Denis', utc: 'UTC+04:00', abbr: 'RET' },
  'Romania': { code: 'RO', flag: '🇷🇴', tz: 'Europe/Bucharest', capital: 'Bucharest', utc: 'UTC+02:00', abbr: 'EET' },
  'Russia': { code: 'RU', flag: '🇷🇺', tz: 'Europe/Moscow', capital: 'Moscow', utc: 'UTC+03:00', abbr: 'MSK' },
  'Rwanda': { code: 'RW', flag: '🇷🇼', tz: 'Africa/Kigali', capital: 'Kigali', utc: 'UTC+02:00', abbr: 'CAT' },
  'Saba (Netherlands)': { code: 'BQ-SA', flag: '🇸🇦', tz: 'America/Kralendijk', capital: 'The Bottom', utc: 'UTC-04:00', abbr: 'AST' },
  'Saint Kitts and Nevis': { code: 'KN', flag: '🇰🇳', tz: 'America/St_Kitts', capital: 'Basseterre', utc: 'UTC-04:00', abbr: 'AST' },
  'Saint Lucia': { code: 'LC', flag: '🇱🇨', tz: 'America/St_Lucia', capital: 'Castries', utc: 'UTC-04:00', abbr: 'AST' },
  'Saint Vincent and the Grenadines': { code: 'VC', flag: '🇻🇨', tz: 'America/St_Vincent', capital: 'Kingstown', utc: 'UTC-04:00', abbr: 'AST' },
  'Saint-Barthélemy': { code: 'BL', flag: '🇧🇱', tz: 'America/St_Barthelemy', capital: 'Gustavia', utc: 'UTC-04:00', abbr: 'AST' },
  'Saint-Martin': { code: 'MF', flag: '🇲🇫', tz: 'America/Marigot', capital: 'Marigot', utc: 'UTC-04:00', abbr: 'AST' },
  'Samoa': { code: 'WS', flag: '🇼🇸', tz: 'Pacific/Apia', capital: 'Apia', utc: 'UTC+13:00', abbr: 'WST' },
  'Saudi Arabia': { code: 'SA', flag: '🇸🇦', tz: 'Asia/Riyadh', capital: 'Riyadh', utc: 'UTC+03:00', abbr: 'AST' },
  'Senegal': { code: 'SN', flag: '🇸🇳', tz: 'Africa/Dakar', capital: 'Dakar', utc: 'UTC+00:00', abbr: 'GMT' },
  'Serbia': { code: 'RS', flag: '🇷🇸', tz: 'Europe/Belgrade', capital: 'Belgrade', utc: 'UTC+01:00', abbr: 'CET' },
  'Seychelles': { code: 'SC', flag: '🇸🇨', tz: 'Indian/Mahe', capital: 'Victoria', utc: 'UTC+04:00', abbr: 'SCT' },
  'Sierra Leone': { code: 'SL', flag: '🇸🇱', tz: 'Africa/Freetown', capital: 'Freetown', utc: 'UTC+00:00', abbr: 'GMT' },
  'Sint Maarten': { code: 'SX', flag: '🇸🇽', tz: 'America/Lower_Princes', capital: 'Philipsburg', utc: 'UTC-04:00', abbr: 'AST' },
  'Slovakia': { code: 'SK', flag: '🇸🇰', tz: 'Europe/Bratislava', capital: 'Bratislava', utc: 'UTC+01:00', abbr: 'CET' },
  'Slovenia': { code: 'SI', flag: '🇸🇮', tz: 'Europe/Ljubljana', capital: 'Ljubljana', utc: 'UTC+01:00', abbr: 'CET' },
  'Solomon Islands': { code: 'SB', flag: '🇸🇧', tz: 'Pacific/Guadalcanal', capital: 'Honiara', utc: 'UTC+11:00', abbr: 'SBT' },
  'Somalia': { code: 'SO', flag: '🇸🇴', tz: 'Africa/Mogadishu', capital: 'Mogadishu', utc: 'UTC+03:00', abbr: 'EAT' },
  'South Africa': { code: 'ZA', flag: '🇿🇦', tz: 'Africa/Johannesburg', capital: 'Pretoria', utc: 'UTC+02:00', abbr: 'SAST' },
  'South Korea': { code: 'KR', flag: '🇰🇷', tz: 'Asia/Seoul', capital: 'Seoul', utc: 'UTC+09:00', abbr: 'KST' },
  'South Sudan': { code: 'SS', flag: '🇸🇸', tz: 'Africa/Juba', capital: 'Juba', utc: 'UTC+02:00', abbr: 'CAT' },
  'Spain': { code: 'ES', flag: '🇪🇸', tz: 'Europe/Madrid', capital: 'Madrid', utc: 'UTC+01:00', abbr: 'CET' },
  'Sri Lanka': { code: 'LK', flag: '🇱🇰', tz: 'Asia/Colombo', capital: 'Sri Jayawardenepura Kotte', utc: 'UTC+05:30', abbr: 'SLST' },
  'St. Eustatius (Netherlands)': { code: 'BQ-SE', flag: '🇧🇶', tz: 'America/Kralendijk', capital: 'Oranjestad', utc: 'UTC-04:00', abbr: 'AST' },
  'Sudan': { code: 'SD', flag: '🇸🇩', tz: 'Africa/Khartoum', capital: 'Khartoum', utc: 'UTC+02:00', abbr: 'CAT' },
  'Suriname': { code: 'SR', flag: '🇸🇷', tz: 'America/Paramaribo', capital: 'Paramaribo', utc: 'UTC-03:00', abbr: 'SRT' },
  'Swaziland': { code: 'SZ', flag: '🇸🇿', tz: 'Africa/Mbabane', capital: 'Mbabane', utc: 'UTC+02:00', abbr: 'SAST' },
  'Sweden': { code: 'SE', flag: '🇸🇪', tz: 'Europe/Stockholm', capital: 'Stockholm', utc: 'UTC+01:00', abbr: 'CET' },
  'Switzerland': { code: 'CH', flag: '🇨🇭', tz: 'Europe/Zurich', capital: 'Bern', utc: 'UTC+01:00', abbr: 'CET' },
  'Syria': { code: 'SY', flag: '🇸🇾', tz: 'Asia/Damascus', capital: 'Damascus', utc: 'UTC+03:00', abbr: 'EEST' },
  'São Tomé and Principe': { code: 'ST', flag: '🇸🇹', tz: 'Africa/Sao_Tome', capital: 'São Tomé', utc: 'UTC+00:00', abbr: 'GMT' },
  'Taiwan': { code: 'TW', flag: '🇹🇼', tz: 'Asia/Taipei', capital: 'Taipei', utc: 'UTC+08:00', abbr: 'CST' },
  'Tajikistan': { code: 'TJ', flag: '🇹🇯', tz: 'Asia/Dushanbe', capital: 'Dushanbe', utc: 'UTC+05:00', abbr: 'TJT' },
  'Tanzania': { code: 'TZ', flag: '🇹🇿', tz: 'Africa/Dar_es_Salaam', capital: 'Dodoma', utc: 'UTC+03:00', abbr: 'EAT' },
  'Thailand': { code: 'TH', flag: '🇹🇭', tz: 'Asia/Bangkok', capital: 'Bangkok', utc: 'UTC+07:00', abbr: 'ICT' },
  'The Gambia': { code: 'GM', flag: '🇬🇲', tz: 'Africa/Banjul', capital: 'Banjul', utc: 'UTC+00:00', abbr: 'GMT' },
  'Timor-Leste': { code: 'TL', flag: '🇹🇱', tz: 'Asia/Dili', capital: 'Dili', utc: 'UTC+09:00', abbr: 'TLT' },
  'Togo': { code: 'TG', flag: '🇹🇬', tz: 'Africa/Lome', capital: 'Lomé', utc: 'UTC+00:00', abbr: 'GMT' },
  'Tonga': { code: 'TO', flag: '🇹🇴', tz: 'Pacific/Tongatapu', capital: "Nuku'alofa", utc: 'UTC+13:00', abbr: 'TOT' },
  'Trinidad and Tobago': { code: 'TT', flag: '🇹🇹', tz: 'America/Port_of_Spain', capital: 'Port of Spain', utc: 'UTC-04:00', abbr: 'AST' },
  'Tunisia': { code: 'TN', flag: '🇹🇳', tz: 'Africa/Tunis', capital: 'Tunis', utc: 'UTC+01:00', abbr: 'CET' },
  'Turkey': { code: 'TR', flag: '🇹🇷', tz: 'Europe/Istanbul', capital: 'Ankara', utc: 'UTC+03:00', abbr: 'TRT' },
  'Turkmenistan': { code: 'TM', flag: '🇹🇲', tz: 'Asia/Ashgabat', capital: 'Ashgabat', utc: 'UTC+05:00', abbr: 'TMT' },
  'Turks and Caicos Islands': { code: 'TC', flag: '🇹🇨', tz: 'America/Grand_Turk', capital: 'Cockburn Town', utc: 'UTC-05:00', abbr: 'EST' },
  'Tuvalu': { code: 'TV', flag: '🇹🇻', tz: 'Pacific/Funafuti', capital: 'Funafuti', utc: 'UTC+12:00', abbr: 'TVT' },
  'Uganda': { code: 'UG', flag: '🇺🇬', tz: 'Africa/Kampala', capital: 'Kampala', utc: 'UTC+03:00', abbr: 'EAT' },
  'Ukraine': { code: 'UA', flag: '🇺🇦', tz: 'Europe/Kyiv', capital: 'Kyiv', utc: 'UTC+02:00', abbr: 'EET' },
  'United Arab Emirates': { code: 'AE', flag: '🇦🇪', tz: 'Asia/Dubai', capital: 'Abu Dhabi', utc: 'UTC+04:00', abbr: 'GST' },
  'United Kingdom': { code: 'GB', flag: '🇬🇧', tz: 'Europe/London', capital: 'London', utc: 'UTC+00:00', abbr: 'GMT' },
  'United States': { code: 'US', flag: '🇺🇸', tz: 'America/New_York', capital: 'Washington, D.C.', utc: 'UTC-05:00', abbr: 'EST' },
  'United States Virgin Islands': { code: 'VI', flag: '🇻🇮', tz: 'America/St_Thomas', capital: 'Charlotte Amalie', utc: 'UTC-04:00', abbr: 'AST' },
  'Uruguay': { code: 'UY', flag: '🇺🇾', tz: 'America/Montevideo', capital: 'Montevideo', utc: 'UTC-03:00', abbr: 'UYT' },
  'Uzbekistan': { code: 'UZ', flag: '🇺🇿', tz: 'Asia/Tashkent', capital: 'Tashkent', utc: 'UTC+05:00', abbr: 'UZT' },
  'Vanuatu': { code: 'VU', flag: '🇻🇺', tz: 'Pacific/Efate', capital: 'Port Vila', utc: 'UTC+11:00', abbr: 'VUT' },
  'Venezuela': { code: 'VE', flag: '🇻🇪', tz: 'America/Caracas', capital: 'Caracas', utc: 'UTC-04:00', abbr: 'VET' },
  'Vietnam': { code: 'VN', flag: '🇻🇳', tz: 'Asia/Ho_Chi_Minh', capital: 'Hanoi', utc: 'UTC+07:00', abbr: 'ICT' },
  'Western Sahara': { code: 'EH', flag: '🇪🇭', tz: 'Africa/El_Aaiun', capital: 'Laayoune', utc: 'UTC+01:00', abbr: 'WEST' },
  'Yemen': { code: 'YE', flag: '🇾🇪', tz: 'Asia/Aden', capital: "Sana'a", utc: 'UTC+03:00', abbr: 'AST' },
  'Zambia': { code: 'ZM', flag: '🇿🇲', tz: 'Africa/Lusaka', capital: 'Lusaka', utc: 'UTC+02:00', abbr: 'CAT' },
  'Zimbabwe': { code: 'ZW', flag: '🇿🇼', tz: 'Africa/Harare', capital: 'Harare', utc: 'UTC+02:00', abbr: 'CAT' }
};

/**
 * Retrieve country metadata safely by name
 */
export function getCountryData(countryName) {
  if (!countryName) return null;
  if (COUNTRIES_DATA[countryName]) {
    return { name: countryName, ...COUNTRIES_DATA[countryName] };
  }
  const lower = countryName.toLowerCase().trim();
  for (const [key, value] of Object.entries(COUNTRIES_DATA)) {
    if (key.toLowerCase() === lower) {
      return { name: key, ...value };
    }
  }
  return null;
}

/**
 * Compute local civil time and date for any registered country
 */
export function getCountryLiveTime(countryName, customDate = null, is24h = true) {
  const data = getCountryData(countryName);
  const now = customDate || new Date();
  const tz = data ? data.tz : 'UTC';

  try {
    const timeFormatter = new Intl.DateTimeFormat('en-US', {
      timeZone: tz,
      hour: is24h ? '2-digit' : 'numeric',
      minute: '2-digit',
      second: '2-digit',
      hour12: !is24h
    });

    const dateFormatter = new Intl.DateTimeFormat('en-US', {
      timeZone: tz,
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });

    const parts = new Intl.DateTimeFormat('en-US', {
      timeZone: tz,
      timeZoneName: 'short'
    }).formatToParts(now);
    const tzShort = parts.find(p => p.type === 'timeZoneName')?.value || (data ? data.abbr : 'UTC');

    const offsetParts = new Intl.DateTimeFormat('en-US', {
      timeZone: tz,
      timeZoneName: 'longOffset'
    }).formatToParts(now);
    const gmtOffset = offsetParts.find(p => p.type === 'timeZoneName')?.value || (data ? data.utc : 'UTC');

    // Time difference relative to user machine
    const userDate = new Date(now.toLocaleString('en-US'));
    const countryDate = new Date(now.toLocaleString('en-US', { timeZone: tz }));
    const diffHours = (countryDate.getTime() - userDate.getTime()) / (1000 * 60 * 60);
    const roundedDiff = Math.round(diffHours * 10) / 10;

    let diffText = 'Same time as your local time';
    if (roundedDiff > 0) {
      diffText = `+${roundedDiff}h ahead of your time`;
    } else if (roundedDiff < 0) {
      diffText = `${roundedDiff}h behind your time`;
    }

    return {
      country: countryName,
      time: timeFormatter.format(now),
      date: dateFormatter.format(now),
      tzCode: tzShort,
      gmtOffset: gmtOffset.replace('GMT', 'UTC'),
      diffText,
      data
    };
  } catch (err) {
    return {
      country: countryName,
      time: now.toLocaleTimeString(),
      date: now.toLocaleDateString(),
      tzCode: data ? data.abbr : 'UTC',
      gmtOffset: data ? data.utc : 'UTC',
      diffText: 'Comparison unavailable',
      data
    };
  }
}

// Global exposure for standalone browser scripts if needed
if (typeof window !== 'undefined') {
  window.COUNTRIES_DATA = COUNTRIES_DATA;
  window.getCountryData = getCountryData;
  window.getCountryLiveTime = getCountryLiveTime;
}
