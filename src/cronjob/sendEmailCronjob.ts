import nodemailer from 'nodemailer';

export function sendMail() {
    const mailTransporter = nodemailer.createTransport({
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
    } catch (error) {
       console.log(error.message);
    }

}
