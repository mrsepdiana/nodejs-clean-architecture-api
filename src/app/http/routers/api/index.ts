import { Router } from 'express'
import morgan from 'morgan'
import compression from 'compression';
import bodyParser from 'body-parser';

import AuthEndpoint from './AuthEndpoint';

const Api = () => {
  // initialize router
  const router = Router();

  const prefixUrl = '/api'

  // Route configuration
  router.use(compression())

  // Log the endpoints being accessed
  router.use(morgan('dev'));

  // Route middleware to parse body json of the request
  router.use(bodyParser.json())

  router.use(prefixUrl, [AuthEndpoint()]);

  return router;
}


export default Api;