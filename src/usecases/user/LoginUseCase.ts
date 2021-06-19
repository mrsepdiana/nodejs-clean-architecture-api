import { Encryption } from "../../app/utilities";
import { UserRepository } from "../../repositories"

export type LoginType = {
  email: string,
  password: string,
}

/**
 * Login Usecase
 * 
 * When user log in try to find with email, and matching 
 * the user's password with hashed password, if match return the user data 
 * with token, otherwise return null email or password is not match.
 * 
 * @param props email and password wrapped on object.
 * @returns user data | null  
 */
const LoginUseCase = async (props: LoginType) => {
  const userRepository = new UserRepository();
  const {email, password} = props
  
  let user: any;

  user = await userRepository.findByEmail(email).then(res => {
    return res?.dataValues
  }).catch(err => {
    return null;
  });

  // Validate password
  if(user) {
    let passwordMatch = Encryption().compare(password, user?.password)
    // delete password attribute
    delete user?.password
    
    if(!passwordMatch) {
      user = null
    }
  }

  return user;
}

export default LoginUseCase