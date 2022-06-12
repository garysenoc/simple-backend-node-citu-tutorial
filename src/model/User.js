import mongoose from "mongoose";

const featureSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: [true, "User must have a firstname"],
    trim: true,
  },
  lastname: {
    type: String,
    required: [true, "User must have a lastname"],
    trim: true,
  },
  address: {
    type: String,
    required: [true, "User must have a address"],
    trim: true,
  },
  phone: {
    type: String,
    required: [true, "User must have a phone"],
    trim: true,
  },
  username: {
    type: String,
    required: [true, "User must have a phone"],
    trim: true,
  },
  password: {
    type: String,
    required: [true, "User must have a password"],
    trim: true,
  },
  dateCreated: {
    type: Date,
    default: Date.now(),
  },
});

const User = mongoose.model("Feature", featureSchema);

export default User;

