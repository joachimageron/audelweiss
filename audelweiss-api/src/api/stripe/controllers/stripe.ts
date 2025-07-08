import Stripe from "stripe";

/**
 * A set of functions called "actions" for `stripe`
 */

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default {
  createPaymentIntent: async (ctx) => {
    console.log("Creating payment intent...");
    try {

      console.log("body", ctx.request.body);
      const amount = ctx.request.body.amount || 0; // Default to 0 if not provided
      const currency = ctx.request.body.currency || "eur"; // Default to EUR if not provided

      const paymentIntent = await stripe.paymentIntents.create({
        amount: amount,
        currency: currency,
      });

      ctx.body = {
        clientSecret: paymentIntent.client_secret,
      };
    } catch (err) {
      ctx.body = err;
    }
  },
};
