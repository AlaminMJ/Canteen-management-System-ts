import { model, Schema, Document } from 'mongoose';
import Post from './post.interface';

const postSchema = new Schema(
    {
        tittle: { type: String, require: true },
        body: { type: String, require: true },
    },
    { timestamps: true }
);
export default model<Post>('Post', postSchema);
