"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import cron from 'node-cron';
const conn_1 = require("./db/conn");
const routes_1 = require("./routes");
// import { sendMail } from './cronjob/sendEmailCronjob';
conn_1.database();
const app = express_1.default();
const port = 3000;
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(routes_1.router);
// cron.schedule('* * * * *', function () {
//     sendMail();
// });
// app.get('/', (req, res) => {
//   res.send('This side kirtiraj on browser');
// });
app.listen(port, () => {
    console.log(`server is listening on ${port}`);
});
//# sourceMappingURL=app.js.map