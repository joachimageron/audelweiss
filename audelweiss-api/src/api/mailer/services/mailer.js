import nodemailer from 'nodemailer';


export default {
  async send({ to, subject, text, html }) {
    const transporter = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: process.env.MAILTRAP_USER,
        pass: process.env.MAILTRAP_PASS,
      }
    });

    const mailOptions = {
      from: '"Test Strapi" <test@mailtrap.io>', 
      to,
      subject,
      text,
      html,
    };

    console.log('📤 Mail envoyé :', info.messageId);

    return info;
  },
};
