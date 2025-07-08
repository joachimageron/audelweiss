import Stripe from "stripe";

/**
 * A set of functions called "actions" for `stripe`
 */

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default {
  createPaymentIntent: async (ctx, next) => {
    console.log("Creating payment intent...");
    try {
      const amount = 1000; // Default to 10.00 EUR if not provided
      const currency = "eur"; // Default to EUR if not provided

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
