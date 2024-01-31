import User from "../models/user.model.js";
import Account from "../models/account.model.js";
import zod from "zod";
import jwt from "jsonwebtoken";

const signupBody = zod.object({
  username: zod.string().email(),
  firstName: zod.string(),
  lastName: zod.string(),
  password: zod.string(),
});

const signinBody = zod.object({
  username: zod.string().email(),
  password: zod.string(),
});

const updateBody = zod.object({
  firstName: zod.string().optional(),
  lastName: zod.string().optional(),
  password: zod.string().min(8).optional(),
});

export const signup = async (req, res) => {
  const { success, data } = signupBody.safeParse(req.body);
  if (!success) {
    return res.status(400).json({
      message: "Invalid input data",
    });
  }
  let { username, firstName, lastName, password } = data;
  if (firstName.length >= 7) {
    firstName = firstName.substring(0, 7);
  }
  if (lastName.length >= 6) {
    lastName = lastName.substring(0, 7);
  }
  try {
    const user = await User({
      username,
      firstName,
      lastName,
      password,
    });

    await user.save();

    const userId = user._id;
    const token = jwt.sign(
      {
        userId,
      },
      process.env.JWT_TOKEN,
      {
        expiresIn: "24h",
      }
    );
    const account = new Account({
      userId,
      balance: Number((Math.random() * 10000).toFixed(2)),
    });

    await account.save();

    const userDetails = JSON.stringify({
      username: firstName,
    });

    res.status(201).json({
      message: "User created successfully",
      userDetails,
      token,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error" + error.message,
    });
  }
};

export const signin = async (req, res) => {
  const { success, data } = signinBody.safeParse(req.body);
  if (!success) {
    return res.status(411).json({
      message: "Error while logging in",
    });
  }

  const { username, password } = data;

  try {
    const user = await User.findOne({ username, password });
    const userId = user._id;

    const token = jwt.sign(
      {
        userId,
      },
      process.env.JWT_TOKEN,
      {
        expiresIn: "24h",
      }
    );
    const userDetails = JSON.stringify({
      username: user.firstName,
    });
    res.status(200).json({
      userDetails,
      token,
    });
  } catch (error) {
    return res.status(411).json({
      message: "Error while logging in" + error.message,
    });
  }
};

export const update = async (req, res) => {
  const userId = req.userId;
  const { success, data } = updateBody.safeParse(req.body);

  if (!userId) {
    res.status(404).json({
      message: "Not Auth",
    });
    return;
  }

  if (!success) {
    res.status(400).json({
      message: "Check Inputs again" + error.message,
    });
    return;
  }

  try {
    const user = await User.findByIdAndUpdate(userId, data, { new: true });

    if (!user) {
      res.status(404).json({
        message: "User Not found",
      });
    }
    res.status(200).json({
      message: "Updated successfully",
    });
  } catch (error) {
    res.status(411).json({
      message: "Error while updating information",
    });
  }
};

export const getAll = async (req, res) => {
  const data = req.query.filter;

  try {
    const users = await User.find({});

    if (data) {
      const filteredUsers = users.filter((user) => {
        return (
          user.lastName.toLowerCase().includes(data.toLowerCase()) ||
          user.firstName.toLowerCase().includes(data.toLowerCase())
        );
      });

      if (filteredUsers.length > 0) {
        const mappedUsers = filteredUsers.map(
          ({ firstName, lastName, _id }) => ({
            firstName,
            lastName,
            _id,
          })
        );

        res.status(200).json({ users: mappedUsers });
      } else {
        res.status(404).json({
          message: "No matching users found",
        });
      }
    } else {
      res.status(200).json({ users });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Something went wrong" + error.message,
    });
  }
};
