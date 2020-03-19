"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const log4js = require("log4js");
log4js.configure({
    appenders: {
        file: { type: 'file', filename: 'logs/shared.log' },
        console: { type: 'console' },
    },
    categories: {
        default: { appenders: ['file', 'console'], level: 'debug' },
    },
});
exports.logger = log4js.getLogger();
//# sourceMappingURL=logger.js.map