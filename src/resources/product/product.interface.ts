import { Document } from 'mongoose';

export default interface Product extends Document {
    name: string;
    unit: string;
    img_url: string;
}
