import { logger } from './api/utils/logger';
import { app } from './app';
import 'dotenv/config';

app.listen(+process.env.PORT, '0.0.0.0', (err, addr) => {
  if (err) logger.error(err);

  logger.info(`Serving ${addr}`);
});
