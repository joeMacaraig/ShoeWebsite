import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { User } from "../models/user.models.js";

dotenv.config();

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.TOKEN, { expiresIn: "3d" });
};

export const userController = {
  loginUser: async (req, res) => {
    const userCollection = User;
    const { username, password } = req.body;

    try {
      //using the login method from user model
      const user = await userCollection.login(username, password);

      //create token for user
      const token = createToken(userCollection._id);

      res.status(200).json({ username, token });
    } catch (e) {
      res.status(400).json({ error: e.message });
    }
  },
  signupUser: async (req, res) => {
    const userCollection = User;
    const {first_name, last_name, email, username, password} =
      req.body;

    try {
      const user = await userCollection.signup(
        first_name,
        last_name,
        email,
        username,
        password
      );
      const token = createToken(userCollection._id);
      res.status(200).json({ user, token });
    } catch (e) {
      res.status(400).json({ error: e.message });
    }
  },
};


