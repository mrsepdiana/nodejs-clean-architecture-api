import { Encryption } from "../../app/utilities";
import { UserRepository } from "../../repositories"

export type SignupType = {
  firstName: string,
  lastName: string,
  email: string,
  phoneNumber: number,
  password: string,
}

const SignupUseCase = async (props: SignupType) => {
  const userRepository = new UserRepository();
  
  let data = {
    ...props,
    password: Encryption().encrypt(props.password)
  }

  let user: any;
  await userRepository.create(data).then(res => {
    user = res;
  }).catch(err => {
    user = null
  });

  if(user) {
    delete user?.dataValues.password
  }

  return user;
}

export default SignupUseCase