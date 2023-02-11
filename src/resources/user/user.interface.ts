import { Document } from 'mongoose';
interface User extends Document {
    name: string;
    email: string;
    password: string;
    role: string[];
    validPassword(): void;
}
export default User;
