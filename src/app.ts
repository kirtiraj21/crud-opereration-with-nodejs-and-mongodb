import express from 'express';

// import cron from 'node-cron';

import { database } from './db/conn';
import { router } from './routes';
// import { sendMail } from './cronjob/sendEmailCronjob';

database();
const app = express();
const port = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);
// cron.schedule('* * * * *', function () {
//     sendMail();
// });
// app.get('/', (req, res) => {
//   res.send('This side kirtiraj on browser');
// });
app.listen(port, () => {
    console.log(`server is listening on ${port}`);
});
