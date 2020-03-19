import { RequestHandler } from 'fastify';

export const helloHandler: RequestHandler = async ({ headers }, reply) =>
  reply.send({ headers });
