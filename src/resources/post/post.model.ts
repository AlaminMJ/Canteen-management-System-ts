import { model, Schema, Document } from 'mongoose';
import { Post } from './post.interface';
const postSchema = new Schema({
  name: { type: String, require: true },
  message: { type: String, require: true },
});
const Post = model<Post>('Post', postSchema);
