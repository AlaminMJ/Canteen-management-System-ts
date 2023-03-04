import { Document } from 'mongoose';
interface User extends Document {
  name: string;
  email: string;
  password: string;
  role: string[];
  socketID: string;
  isMatchPassword(): void;
}
export default User;
