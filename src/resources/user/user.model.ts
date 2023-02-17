import { Schema, Document, model } from 'mongoose';
import bcrypt from 'bcryptjs';
import User from './user.interface';
const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: [String], default: ['user'] },
  },
  { timestamps: true }
);
export default model<User>('User', userSchema);

userSchema.methods.verifyPassword = async function (
  password: string
): Promise<boolean> {
  return bcrypt.compare(password, this.password);
};

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next();
  }
  const solt = await bcrypt.genSalt(10);
  const hashedPassoword = await bcrypt.hash(this.password, solt);
  this.password = hashedPassoword;
  next();
});
