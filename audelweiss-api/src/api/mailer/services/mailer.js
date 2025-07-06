import nodemailer from 'nodemailer';


export default {
  async send({ to, subject, text, html }) {
    const transporter = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "6413bbf815ba59",   
        pass: "ad37504db05bc2"   
      }
    });

    const mailOptions = {
      from: '"Test Strapi" <test@mailtrap.io>', 
      to,
      subject,
      text,
      html,
    };

    const info = await transporter.sendMail(mailOptions);
    return info;
  },
};
