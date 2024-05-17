import { Logger } from 'tslog';

export const logger = new Logger({
  name: 'AppLogger',
  minLevel: process.env.NODE_ENV === 'production' ? 3 : 0,
});
