import { routeHello } from './routes/hello';
import { FastifyInstance } from 'fastify';

export const setupRoutes = (app: FastifyInstance) => {
  routeHello(app);
};
