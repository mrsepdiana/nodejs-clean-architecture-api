import { Router } from 'express'
import { getUserList } from '../../controllers/UserController';


const UserEndpoint = () => {
  // initialize router
  const router = Router();

  router.get('/users', getUserList)

  router.get('/users/:id', (request, response) => {
    response.json({user_id: request.params.id})
  })

  router.post('/users', (request: any, response: any) => {
    response.send("post a new user")
  })

  return router;
}


export default UserEndpoint;