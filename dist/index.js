"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = require("./api/utils/logger");
const app_1 = require("./app");
require("dotenv");
app_1.app.listen(+process.env.PORT, '0.0.0.0', (err, addr) => {
    if (err)
        logger_1.logger.error(err);
    logger_1.logger.info(`Serving ${addr}`);
});
//# sourceMappingURL=index.js.map