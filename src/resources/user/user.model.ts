import { Schema, model } from 'mongoose';
import User from './user.interface';
import bcrypt from 'bcryptjs';
const userSchema = new Schema(
  {
    name: { type: String, require: true },
    email: { type: String, require: true, unique: true },
    password: { type: String, require: true },
    verify: { type: Boolean, default: false },
    role: { type: Array, default: ['user'] },
    socketId: { type: String }
  },
  { timestamps: true }
);
export default model<User>('User', userSchema);
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next();
  }
  const salt: string = await bcrypt.genSalt(10);
  const hashPassword: string = await bcrypt.hash(this.password as string, salt);
  this.password = hashPassword;
  next();
});

userSchema.methods.isMatchPassword = async function (
  password: string
): Promise<boolean> {
  return await bcrypt.compare(password, this.password);
};
