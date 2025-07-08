import nodemailer from 'nodemailer';

export default {
  async postContact(ctx) {
    try {
      const { to, email, subject, text, html } = ctx.request.body;

      // Configure le transporteur nodemailer pour Mailtrap
      const transporter = nodemailer.createTransport({
        host: 'sandbox.smtp.mailtrap.io',
        port: 2525, // ou 587
        auth: {
          user: '6413bbf815ba59',
          pass: 'ad37504db05bc2',
        },
      });

      // Prépare le mail
      const mailOptions = {
        from: email, // ou adresse par défaut
        to,
        subject,
        text,
        html,
      };

      // Envoie le mail
      const info = await transporter.sendMail(mailOptions);

      // Pour debug, tu peux renvoyer l’info de Nodemailer
      ctx.body = {
        sent: true,
        message: 'Mail envoyé via Mailtrap!',
        info, // optionnel
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
