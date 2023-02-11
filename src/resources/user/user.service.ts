import User from './user.interface';
import userModel from './user.model';

class UserService {
    private User = userModel;
    public async create(
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
}

export default UserService;
