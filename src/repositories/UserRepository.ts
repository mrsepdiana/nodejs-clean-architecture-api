import { BaseRepository } from ".";
import User from "../domains/User";

class UserRepository extends BaseRepository<typeof User> {
  constructor() {
    super(User)
    this.domain = User
  }

  async findByEmail(email: string) {
    return await this._findByField("email", email);
  }
}

export default UserRepository;