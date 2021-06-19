import bcrypt from 'bcrypt'

const Encryption = () => {
  const compare = (data: string, dataEncode: string) => {
    return bcrypt.compareSync(data, dataEncode)
  }

  const encrypt = (data: string | Buffer) => {
    const salt = bcrypt.genSaltSync();
    return bcrypt.hashSync(data, salt);
  }

  return {compare, encrypt}
}

export default Encryption