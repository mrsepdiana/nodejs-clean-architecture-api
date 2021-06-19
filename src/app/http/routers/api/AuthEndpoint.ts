import { Router } from "express"
import { Login, Signup } from "../../controllers/AuthController";

const AuthEndpoint = () => {
  const router = Router();

  router.post("/login", Login)
  router.post("/signup", Signup)

  return router;
}

export default AuthEndpoint;