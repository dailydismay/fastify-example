import * as fastify from 'fastify';
import * as swagger from 'fastify-swagger';
import { setupRoutes } from './api/index';

export const app = fastify();

app.register(swagger, {
  routePrefix: '/docs',
  swagger: {
    info: {
      title: 'Api server',
      version: '2.0',
    },
  },
  exposeRoute: true,
});

setupRoutes(app);
