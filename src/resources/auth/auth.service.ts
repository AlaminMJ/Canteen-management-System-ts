import userModel from '../user/user.model';

class AuthService {
  private User = userModel;
  public async create(name: string, email: string, password: string) {
    try {
      const user = new this.User({ name, email, password });
      await user.save();
      return user;
    } catch (error) {}
  }
  public async findByEmail(email: string) {
    try {
      const user = this.User.findOne({ email });
      return user;
    } catch (error) {}
  }
}

export default AuthService;
