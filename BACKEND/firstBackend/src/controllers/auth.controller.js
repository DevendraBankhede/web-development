import User from "../models/user.model.js";

export const RegisterUser = async (req, res,next) => {
  try {
    const { fullName, email, password, phone, gender, dob } = req.body;

    if (!fullName || !email || !password || !phone || !gender || !dob) {
      res.status(400).json({ message: "All Feilds Required" });
      return;
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      res.status(409).json({ message: "Email Already Registered" });
      return;
    }

    const photoUrl = `https://placehold.co/600x400?text=${fullName.charAt(0).toUpperCase()}`;

    const photo = {
      url: photoUrl,
      publicId: null,
    };

    const newUser = await User.create({
      fullName,
      email,
      password,
      phone,
      gender,
      dob,
      photo,
    });

    res.status(201).json({ message: "User Created Successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const LoginUser = async (req, res,next) => {

  try{
    const {email,password} = req.body;
    if(!email || !password) {
    const error  = new Error("All fields Required");
    error.statusCode = 400;
    return next(error);
  }

  const existingUser = await User.findOne({email});
  if(!existingUser) {
    const error = new Error("Email not registred");
    error.statusCode = 404;
    return next(error);
  }

  if(password !== existingUser.password) {
    const error = new Error("Incorrect Password");
    error.statusCode = 401;
    return next(error);
  }

  res.status(200).json({
    message:"Welcome Back",
    data: existingUser,
  });
  }catch(error) {
    console.log(error.message);
    next(error);
  }
};

export const LogoutUser = (req, res) => {
  res.json({ message: "Logout Successfull from Controller" });
};