import User from './user.interface';
import userModel from './user.model';

class UserService {
    private User = userModel;
    public async getUser(): Promise<User | void> {
        try {
        } catch (error) {}
    }
}

export default UserService;
