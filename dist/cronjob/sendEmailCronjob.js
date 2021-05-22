"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMail = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
function sendMail() {
    const mailTransporter = nodemailer_1.default.createTransport({
        service: 'gmail',
        auth: {
            user: 'chouhankirtiraj52@gmail.com',
            pass: 'gmail21#',
        },
    });
    // Setting credentials
    const mailDetails = {
        from: 'chouhankirtiraj52@gmail.com',
        to: 'rajmind@mailinator.com',
        subject: 'Test mail using Cron job',
        text: 'Node.js cron job email'
            + ' testing for GeeksforGeeks',
    };
    // Sending Email
    try {
        mailTransporter.sendMail(mailDetails);
        console.log('Email sent successfully');
    }
    catch (error) {
        console.log(error.message);
    }
}
exports.sendMail = sendMail;
//# sourceMappingURL=sendEmailCronjob.js.map