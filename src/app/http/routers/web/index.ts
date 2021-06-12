import { Router } from 'express'
import morgan from 'morgan';

const Web = () => {
  // Initialize router
  const router = Router();
  
  // Log the endpoints being accessed
  router.use(morgan('dev'));

  router.get('/', (request: any, response: any) => {
    response.send("base path")
  })

  return router;
}

export default Web;