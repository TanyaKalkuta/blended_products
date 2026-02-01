import mongoose, { Schema } from 'mongoose';

const productsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
      enum: ['books', 'electronics', 'clothing', 'other'],
      default: 'other',
    },
    description: {
      type: String,
      required: false,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const Product = mongoose.model('Product', productsSchema);
