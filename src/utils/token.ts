import User from '@/resources/user/user.interface';
import jwt from 'jsonwebtoken';

const createToken = (user: User): string => {
    const token = jwt.sign(user._id, process.env.JWT_SECRET as jwt.Secret);
    return token;
};
// const verifyToken = (token: Token):Promise<jwt.JsonWebTokenError | boolean> => {
//  jwt.verify(token,process.env.JWT_SECRET,()=>{
//     new Promise(resolve,reject

//  })
// };

export default { createToken };
