import { Schema } from 'mongoose';
export default interface Token {
    id: Schema.Types.ObjectId;
    expireIn: number;
}
