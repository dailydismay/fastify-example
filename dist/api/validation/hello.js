"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.helloSchema = {
    tags: ['hello'],
    response: {
        200: {
            type: 'object',
            properties: {
                headers: {
                    type: 'object',
                    additionalProperties: true,
                    properties: {
                        host: {
                            type: 'string',
                        },
                        connection: {
                            type: 'string',
                        },
                        'cache-control': {
                            type: 'string',
                        },
                    },
                },
            },
        },
    },
};
//# sourceMappingURL=hello.js.map