import { RouteSchema } from 'fastify';

export const helloSchema: RouteSchema = {
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
