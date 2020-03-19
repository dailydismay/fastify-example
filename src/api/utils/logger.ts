import * as log4js from 'log4js';

log4js.configure({
  appenders: {
    file: { type: 'file', filename: 'logs/shared.log' },
    console: { type: 'console' },
  },
  categories: {
    default: { appenders: ['file', 'console'], level: 'debug' },
  },
});

export const logger = log4js.getLogger();
