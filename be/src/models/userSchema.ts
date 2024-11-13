import mongoose, { Schema, Document } from "mongoose";
import { v4 as uuidV4 } from "uuid";
import bcrypt from "bcryptjs";

export interface UserType extends Document {
  _id: string;
  uid: string;
  name: string;
  email: string;
  password: string;
  comparePassword: {
    (comparePassword: string): Promise<boolean>;
  };
}
const UserSchema = new Schema<UserType>({
  uid: { type: "String", default: uuidV4 },
  name: {
    type: "String",
    required: true,
  },
  email: {
    type: "String",
    required: true,
  },
  password: {
    type: "String",
    required: true,
  },
});
UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(20);
  this.password = await bcrypt.hash(this.password, salt);
});

UserSchema.methods.comparePassword = async function (enteredPassword: string) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model("Auth", UserSchema);

export default User;
