import { Schema, model, Document } from 'mongoose';
interface INotification extends Document {
  recipient: Schema.Types.ObjectId;
  message: string;
  read: boolean;
}
const notificationSchema = new Schema<INotification>(
  {
    recipient: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
    message: { type: String, required: true },
    read: { type: Boolean, default: false },
  },
  { timestamps: true }
);
notificationSchema.methods. async function markNotificationasRead (next) {
  if(this.mo);
export default model<INotification>('Notification', notificationSchema);
