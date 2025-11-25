import validator from "validator";
import userModel from "../model/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// access token create helper function

const createToken = (user) => {
  return jwt.sign(
    {
      _id: user._id,
      email: user.email,
      name: user.name,
      isAdmin:user.isAdmin
    },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  );
};

const userRegister = async (req, res) => {
  try {
    const { name, email, password, isAdmin } = await req.body;

    //  console.log(req.body)

    if (!name) return res.json({ success: false, message: "name is Required" });
    if (!email)
      return res.json({ success: false, message: "email is Required" });
    if (!password)
      return res.json({ success: false, message: "password is Required" });

    const existingUser = await userModel.findOne({ email });

    if (existingUser) {
      return res.json({
        success: false,
        message: "User is Already Existing",
      });
    }

    // email validation
    if (!validator.isEmail(email)) {
      return res.json({
        success: false,
        message: "Please Enter a Valid Email Address",
      });
    }
    // password validation

    if (password.length < 8) {
      return res.json({
        success: false,
        message: "Password need at least 8 Charater",
      });
    }
    // hashed password
    const salt = await bcrypt.genSalt(10);
    const encryptedPassword = await bcrypt.hash(password, salt);

    // register a new user

    const newUser = new userModel({
      name,
      email,
      password: encryptedPassword,
      isAdmin,
    });

    // saved in database

    await newUser.save();

    return res.json({
      success: true,
      message: "User is Registration Succesfully",
      user: newUser,
    });
  } catch (error) {
    console.log("user registration error", error);
    return res.json({ success: false, message: error?.message });
  }
};

const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email)
      return res.json({ success: false, message: "Email is Required" });
    if (!password)
      return res.json({ success: false, message: "Password is Required" });

    const user = await userModel.findOne({ email });

    if (!user) {
      return res.json({
        status: false,
        message: "User Not Exits,Please try again with Another User",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {
      const token = createToken(user);
      res.json({
        success: true,
        token: token,
        message: "User Login Succesfully",
      });
    } else {
      res.json({
        success: false,
        message: "Invalid Credentials, Please try again",
      });
    }
  } catch (error) {
    console.log("user Login failed", error);
    return res.json({ success: false, message: error?.message });
  }
};
const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email)
      return res.json({ success: false, message: "Email is Required" });
    if (!password)
      return res.json({ success: false, message: "Password is Required" });

    const user = await userModel.findOne({ email });

    if(!user?.isAdmin){
      return res.json({success:false,message:"You are Not Authenticate for Login Admin"})
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {
      const token = createToken(user);
      res.json({
        success: true,
        token: token,
        message: "Admin Login Succesfully",
      });
    } else {
      res.json({
        success: false,
        message: "Password Invalid, Please try again",
      });
    }
  } catch (error) {
    console.log("Admin Login failed", error);
    return res.json({ success: false, message: error?.message });
  }
};

const removeUser = async (req, res) => {
  try {
    await userModel.findByIdAndDelete(req.body._id);
    return res.json({
      success: true,
      message: "User Deleted Succsfully",
    });
  } catch (error) {
    return res.json({
      success: false,
      message: "User Deleted Unsuccesfull",
    });
  }
};
const updateUser = async (req, res) => {
  try {
    const { _id, name, email, password } = req.body;

    const user = await userModel.findById(_id);

    if (!user) {
      return res.json({
        success: false,
        message: "User Not Found By That ID, Please check again",
      });
    }

    if (name) user.name = name;
    if (email) {
      if (!validator.isEmail(email)) {
        return res.json({
          success: false,
          message: "Email is InValid",
        });
      }

      user.email = email;
    }

    if (password) {
      if (password.length < 8) {
        return res.json({
          success: false,
          message: "Password Must Be 8 Character",
        });
      }
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);
    }

    await user.save();
    return res.json({
      success: true,
      message: "User Updated Succesfully",
      user,
    });
  } catch (error) {
    console.log("user Update Unsuccesfull", error);
    return res.json({ success: false, message: error?.message });
  }
};
const getUsers = async (req, res) => {
  try {
    const total = await userModel.countDocuments({});
    const users = await userModel.find({});
    return res.json({
      success: true,
      total,
      users,
      message: "Users Get Succesfully",
    });
  } catch (error) {
    console.log("Could Not Get User", error);
    return res.json({ success: false, message: error?.message });
  }
};

export {
  userRegister,
  userLogin,
  adminLogin,
  removeUser,
  updateUser,
  getUsers,
};
