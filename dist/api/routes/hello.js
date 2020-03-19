"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hello_1 = require("./../validation/hello");
const hello_2 = require("./../handlers/hello");
exports.routeHello = (app) => {
    app.route({
        method: 'GET',
        url: '/hello',
        handler: hello_2.helloHandler,
        schema: hello_1.helloSchema,
    });
    return app;
};
//# sourceMappingURL=hello.js.map