import multer from "multer";

const storage = multer.memoryStorage();

const upload = multer({ storage });

export function uploadSingle(fieldName) {
  return upload.single(fieldName);
}
