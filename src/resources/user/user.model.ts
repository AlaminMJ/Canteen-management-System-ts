import { Schema, Document, model } from 'mongoose';
import bcrypt from 'bcryptjs';
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
userSchema.methods.verifyPassword = async function (
  password: string
): Promise<boolean> {
  return bcrypt.compare(password, this.password);
};

userSchema.pre<User>('save', async function (next) {
  if (!this.isModified('password')) {
    return next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});
