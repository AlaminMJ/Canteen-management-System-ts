import { Document } from 'mongoose';
interface User extends Document {
  name: string;
  email: string;
  password: string;
  role: string[];
  verifyPassword(password: string): Promise<boolean>;
}
export default User;
