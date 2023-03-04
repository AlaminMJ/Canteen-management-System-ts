
import User from './user.interface';
import bcrypt from 'bcryptjs';
const userSchema = new Schema(
  {

  },
  { timestamps: true }
);
export default model<User>('User', userSchema);

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next();
  }

