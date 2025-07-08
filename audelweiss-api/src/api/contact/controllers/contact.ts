import nodemailer from 'nodemailer';

export default {
  async postContact(ctx) {
    try {
      const { to, email, subject, text, html } = ctx.request.body;

      const transporter = nodemailer.createTransport({
        host: 'sandbox.smtp.mailtrap.io',
        port: 2525, 
        auth: {
          user: '6413bbf815ba59',
          pass: 'ad37504db05bc2',
        },
      });

      const mailOptions = {
        from: email, 
        to,
        subject,
        text,
        html,
      };

      const info = await transporter.sendMail(mailOptions);

      ctx.body = {
        sent: true,
        message: 'Mail envoyé via Mailtrap!',
        info, 
      };
      ctx.status = 200;
    } catch (err) {
      ctx.body = {
        error: 'Une erreur est survenue',
        details: err instanceof Error ? err.message : 'Unknown error',
      };
      ctx.status = 500;
    }
  },
};
