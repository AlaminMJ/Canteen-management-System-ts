import User from '@/resources/user/user.interface';
import jwt from 'jsonwebtoken';

const createToken = (user:any):{accessToken:string,refreshToken:string} => {
    const accessToken:string = jwt.sign(user, process.env.JWT_SECRET as jwt.Secret,{expiresIn: '5m'});
    const refreshToken:string = jwt.sign(user, process.env.JWT_SECRET_REFRESH as jwt.Secret,{expiresIn: '1h'});
    return {accessToken, refreshToken};
};

const decodeToken = (token:string) => {
    return jwt.verify(token, process.env.JWT_SECRET as jwt.Secret);
}

export { createToken,decodeToken };
// 