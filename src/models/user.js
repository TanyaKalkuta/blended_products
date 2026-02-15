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
    },
    avatar: {
        type: String,
        required: true,
        default: 'https://ac.goit.global/fullstack/react/default-avatar.jpg',
    }
}, {
    timestamps: true,
    versionKey: false,
});

// userSchema.pre('save', function () {
//   if (!this.avatar) {
//     this.avatar = 'https://ac.goit.global/fullstack/react/default-avatar.jpg';
//   }
// });


userSchema.methods.toJSON = function () {
  const obj = this.toObject();
  delete obj.password;
  return obj;
}

export const User = mongoose.model('User', userSchema);
