import User from './user.interface';
import userModel from './user.model';

class UserService {
  private User = userModel;
  public async register(
    name: string,
    email: string,
    password: string
  ): Promise<User | void> {
    try {
      const user = new this.User({ name, email, password });
      await user.save();
      return user;
    } catch (error) {}
  }
  public async logIn(email: string, password: string): Promise<string | void> {
    try {
      const user = await this.User.find({ email });

      return '';
    } catch (error) {
      throw new Error('Log in failer');
    }
  }
}

export default UserService;
