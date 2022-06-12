import User from "../model/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import log from "../utils/logger.js";

export const test = (req, res) => {
  res.send("user testing route");
  log.info("this is testing");
};

export const createUser = async (req, res) => {
  try {
    const { firstname, lastname, address, phone, username, password } =
      req.body;
    //validation
    if (
      !username ||
      !password ||
      !firstname ||
      !lastname ||
      !address ||
      !phone
    ) {
      return res
        .status(400)
        .json({ errorMessage: "Please enter all required fields" });
    }

    const existingUser = await User.findOne({
      $or: [{ email: req.body.email }, { phone: req.body.phone }],
    });

    if (existingUser)
      return res.status(409).json({ errorMessage: "username Already Exist" });

    // hash password
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    // save new user

    const newUser = new User({
      firstname,
      lastname,
      address,
      phone,
      username,
      password: passwordHash,
    });

    const saveUser = await newUser.save();

    res.json(saveUser);
  } catch (error) {
    log.error(error);
    res.status(500).send();
  }
};

export const login = async (req, res) => {
  try {
  } catch (err) {
    log.error(err);
  }
};

