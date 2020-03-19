"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fastify = require("fastify");
const swagger = require("fastify-swagger");
const index_1 = require("./api/index");
exports.app = fastify();
exports.app.register(swagger, {
    routePrefix: '/docs',
    swagger: {
        info: {
            title: 'Api server',
            version: '2.0',
        },
    },
    exposeRoute: true,
});
index_1.setupRoutes(exports.app);
//# sourceMappingURL=app.js.map