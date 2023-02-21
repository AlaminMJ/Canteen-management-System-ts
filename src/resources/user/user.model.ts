import { Schema, model } from 'mongoose';
import User from './user.interface';
import bcrypt from 'bcryptjs';
const userSchema = new Schema(
    {
        name: { type: String, require: true },
        email: { type: String, require: true, unique: true },
        password: { type: String, require: true },
        otp: { type: String },
        otpCreatedAt: { type: Date },
        verify: { type: Boolean, default: false },
        role: { type: Array, default: ['user'] },
    },
    { timestamps: true }
);
export default model<User>('User', userSchema);
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next();
    }
    const solt: string = await bcrypt.genSalt(10);
    const hashPassword: string = await bcrypt.hash(
        this.password as string,
        solt
    );
    this.password = hashPassword;
    next();
});
// userSchema.pre('save', async function (next) {
//     if (!this.isModified('opt')) {
//         next();
//     }

//     this.password = hashPassword;
//     next();
// });
