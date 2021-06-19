import Validator from 'validatorjs'
import { LoginUseCase, SignupUseCase } from '../../../usecases';
import { responseHandler } from '../../utilities';
import { loginValidation, signupValidation } from '../validations';

/**
 * Login action handler
 * 
 * @param req incoming request
 * @param res response request
 * @returns login response 
 */
export const Login = async (req: any, res: any) => {
  const { body } = req;
  const validation = new Validator(body, loginValidation);
  const createResponse = responseHandler(req, res);

  if(validation.fails()) {
    return createResponse.error({errors: validation.errors.all(), message: "bad request", status: 400})
  }

  let data = await LoginUseCase(body);
  if(!data) {
    return createResponse.error({errors: "email or password does't match", message: "bad request", status: 400})
  }  

  return createResponse.success({data, status: 200, message: "sucess"});
}


/**
 * Signup action handler 
 * 
 * @param req incoming request
 * @param res response request
 * @returns signup response
 */
export const Signup = async (req: any, res: any) => {
  const { body } = req
  const createResponse = responseHandler(req, res);
  const validation = new Validator(body, signupValidation)

  if(validation.fails()) {
    return createResponse.error({errors: validation.errors.all(), message: "bad request", status: 400})
  }

  let data = await SignupUseCase(body);

  if(!data) {
    return createResponse.error({ 
      errors: {
        email: ["The email has already been taken."]
      }, 
      message: "bad request", status: 400
    })
  }  

  return createResponse.success({data, message: "success", status: 200});
}