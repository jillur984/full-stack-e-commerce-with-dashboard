// import multer from "multer"


// const storage=multer.diskStorage({
//     filename:function(req,file,cb){
//         cb(null,file?.originalname)
//     }
// })

// const upload=multer({storage})

// export default upload;


import multer from "multer";

const storage = multer.diskStorage({
  filename: function (req, file, cb) {
    cb(null, file?.originalname);
  },
});

// Allow all image formats
const fileFilter = (req, file, cb) => {
  const allowed = ["image/png", "image/jpeg", "image/jpg", "image/webp"];

  if (allowed.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Only PNG, JPG, JPEG, WEBP allowed"), false);
  }
};

const upload = multer({
  storage,
  fileFilter, // ← added only this
});

export default upload;
