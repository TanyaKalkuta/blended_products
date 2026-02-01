import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        // match: /^\S+@\S+\.\S+$/,
    },
    password: {
        type: String,
        required: true,
        trim: true
    }
}, {
    timestamps: true,
    versionKey: false,
})


userSchema.methods.toJSON = function () {
  const obj = this.toObject();
  delete obj.password;
  return obj;
}

export const User = mongoose.model('User', userSchema);
