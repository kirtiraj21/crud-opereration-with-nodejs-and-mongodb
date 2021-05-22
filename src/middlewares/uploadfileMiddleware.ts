import Multer from 'multer';

export const fileUpload = Multer({
    storage: Multer.diskStorage({
        destination(req, file, cb) {
            cb(null, 'uploads');
        },
        filename(req, file, cb) {
            cb(null, file.originalname);
        },
    }),
    fileFilter(req, file, callback) {
        // console.log(file);
        callback(null, true);
    },
});
