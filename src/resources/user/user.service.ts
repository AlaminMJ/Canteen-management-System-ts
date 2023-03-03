import userModel from './user.model';

class UserService {
  private User = userModel;
  public async getUserById(id: string) {
    try {
      const user = await this.User.findById(id);
      if (!user) {
      }
      return user;
    } catch (error) {
      throw new Error("Con't get user");
    }
  }
  public async deleteUserById(id: string) {
    try {
      const user = await this.User.findById(id);
      if (!user) {
        throw new Error('User not found this id');
      }
      user.remove();
    } catch (error) {
      throw new Error("Con't get user");
    }
  }
}

export default UserService;
