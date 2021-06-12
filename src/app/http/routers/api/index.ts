import { Router } from 'express'
import morgan from 'morgan'
import UserEndpoint from './UserEndpoint';
import compression from 'compression';

const Api = () => {
  // initialize router
  const router = Router();

  const prefixUrl = '/api'

  // Route configuration
  router.use(compression())

  // Log the endpoints being accessed
  router.use(morgan('dev'));

  router.use(prefixUrl, UserEndpoint())

  return router;
}


export default Api;