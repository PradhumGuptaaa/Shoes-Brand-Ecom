const cloudinary = require("cloudinary").v2;
const streamifier = require("streamifier");
const multer = require("multer");

// ✅ Cloudinary Config
cloudinary.config({
  cloud_name: "drxsgjnry",
  api_key: "434659455686278",
  api_secret: "8tCMqWWVC04wM4sDxLFvsd3sAJM",
});

// ✅ Multer setup (for file upload)
const storage = multer.memoryStorage(); // File ko memory me store karega
const upload = multer({ storage });

// ✅ Image Upload Function
const imageUploadUtil = async (fileBuffer) => {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      { resource_type: "auto" }, 
      (error, result) => {
        if (error) reject(error);
        else resolve(result);
      }
    );
    streamifier.createReadStream(fileBuffer).pipe(stream);
  });
};

// ✅ Export both `cloudinary` and `upload`
module.exports = { cloudinary, upload, imageUploadUtil };
