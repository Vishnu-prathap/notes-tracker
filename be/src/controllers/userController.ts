import User from "../models/userSchema";
import { Request, Response } from "express";
import { generateToken } from "../utils/userUtils";
// postCreateUser

const postCreateUser = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  const userExists = await User.find({ email });
  if (userExists)
    return res.status(400).json({ message: "The user already exists" });
  const user = await User.create({
    name,
    email,
    password,
  });
  if (user) {
    generateToken(res, user.uid);
    return res.status(201).json({
      id: user.uid,
      name: user.name,
      email: user.email,
    });
  } else {
    return res
      .status(400)
      .json({ message: "An error occured in creating user" });
  }
};

const getAllUser = async (req: Request, res: Response) => {
  try {
    const getResponse = await User.find();
    res.status(200).json(getResponse);
  } catch (error: any) {
    res.status(404).json({
      message: "User not found",
      error: error.message,
    });
  }
};

const postUpdateUser = async (req: Request, res: Response) => {
  try {
    const updateUser = await User.findByIdAndUpdate(req.params.uid, req.body);
    res.status(200).json({ message: "The user is updated", updateUser });
  } catch (error: any) {
    res.status(400).json({
      message: "User not updated",
      error: error.message,
    });
  }
};

const delUser = async (req: Request, res: Response) => {
  try {
    const deleteUser = await User.findByIdAndDelete(req.params.uid, req.body);
    res.status(200).json({ message: "The user is deleted", deleteUser });
  } catch (error: any) {}
};

export { postCreateUser, postUpdateUser, delUser, getAllUser };
