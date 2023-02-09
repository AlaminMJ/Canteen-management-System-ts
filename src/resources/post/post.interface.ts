import mongoose from 'mongoose';
export interface Post extends mongoose.Document {
  title: string;
  message: string;
}
