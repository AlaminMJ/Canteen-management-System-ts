import { Schema, Document, model } from 'mongoose';
import User from './user.interface';
const userSchema = new Schema(
    {
        name: { type: String, require: true },
        email: { type: String, require: true, unique: true },
        password: { type: String, require: true },
        role: { type: Array, default: ['user'] },
    },
    { timestamps: true }
);
export default model<User>('User', userSchema);
userSchema.pre('save', () => {});
