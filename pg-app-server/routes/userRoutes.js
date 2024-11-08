// const express = require("express");
// const router = express.Router();
// const user = require("../models/userModel");
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
import express from "express";
const router = express.Router();
import user from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


router.post("/", async (req, res) => {
  try {
    const { email, password, confirmPassword } = req.body;
    const currUser = await user.findOne({ email: email });
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    if (!email || !password || !confirmPassword) {
      return res.status(201).json({
        success: false,
        message: "Enter all the required values",
      });
    } else if (password.length < 6) {
      return res.status(201).json({
        success: false,
        message: "The password lenght must be at least 6 characters",
      });
    } else if (password !== confirmPassword) {
      return res.status(201).json({
        success: false,
        message: "The password and the confirm password must be the same",
      });
    } else if (currUser) {
      return res.status(201).json({
        success: false,
        message: "A user with this email id already exists",
      });
    } else {
      const newUser = new user({
        email,
        passwordHash,
      });
      const savedUser = await newUser.save();

      const token = jwt.sign(
        {
          id: savedUser._id,
        },
        process.env.JWT_PASSWORD
      );

      res
        .cookie("token", token, {
          httpOnly: true,
        })
        .status(200)
        .json({
          success: true,
          message: "User has been created successfully",
        })
        .send();
    }
  } catch (err) {
    res.status(401).json({
      success: false,
      error: err,
    });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    //validation
    if (!email || !password) {
      return res.status(201).json({
        success: false,
        message: "The email and password must be passed for login",
      }).send();
    }
    const currUser = await user.findOne({ email: email });
    if (!currUser) {
      return res.status(201).json({
        success: false,
        message: "Either the email or the password entered is wrong",
      }).send();
    }

    const passwordCheck = await bcrypt.compare(password, currUser.passwordHash);
    if (!passwordCheck) {
      return res.status(201).json({
        success: false,
        message: "Either the email or the password entered is wrong",
      }).send();
    }

    //token generation
    const token = await jwt.sign(
      {
        id: currUser._id,
      },
      process.env.JWT_PASSWORD
    );

    res
      .cookie("token", token, {
        httpOnly: true,
      })
      .status(200)
      .json({
        success: true,
        message: "Successfully logged in.",
      })
      .send();
  } catch (err) {
    res.status(401).json({
      success: false,
      error: err,
    });
  }
});

router.get("/logout", (req, res) => {
  try {
    res
      .cookie("token", "", {
        httpOnly: true,
        expires: new Date(0),
      })
      .json({
        success: true,
        message: "Successfully logged out",
      })
      .send();
  } catch (err) {
    res.status(401).json({
      success: false,
      error: err,
    });
  }
});

router.get("/loggedin",(req,res)=>{
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.json(false);
    }
    jwt.verify(
      req.cookies.token,
      process.env.JWT_PASSWORD
    );
    res.send(true);
  } catch (err) {
    res.json(false);
  }
}
)

export default router;
// module.exports = router;
