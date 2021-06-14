import bcrypt from 'bcrypt'

class Encryption {
  compare(data: string, dataEncode: string) {
    return bcrypt.compareSync(data, dataEncode)
  }

  encrypt(data: string | Buffer) {
    const salt = bcrypt.genSaltSync(12);
    return bcrypt.hashSync(data, salt);
  }
}

export default Encryption