import jwt from "jsonwebtoken";

const adminAuth = (req, res,next) => {
  try {
   const authHeader = req.headers.authorization;
    const token =
      authHeader && authHeader.startsWith("Bearer ")
        ? authHeader.slice(7)
        : req.headers.token;

    if (!token) {
      return res.json({
        success: false,
        message: "Not Authorized, Try Again",
      });
    }

    const decode_token = jwt.verify(token, process.env.JWT_SECRET);
    if (decode_token !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
      return res.json({
        success: false,
        message: "Not Authorized, Try Again",
      });
    }
    next()

  } catch (error) {
    console.log("Admin Auth Error",error)
    res.json({
        status:false,
        message:error?.message
    })
  }
};

export default adminAuth;