import { FastifyInstance } from 'fastify';
import { helloSchema } from './../validation/hello';
import { helloHandler } from './../handlers/hello';

export const routeHello = (app: FastifyInstance) => {
  app.route({
    method: 'GET',
    url: '/hello',
    handler: helloHandler,
    schema: helloSchema,
  });

  return app;
};
