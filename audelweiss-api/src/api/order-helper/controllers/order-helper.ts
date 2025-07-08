/**
 * A set of functions called "actions" for `orderHelper`
 */
export default {
  createOrder : async (ctx) => {
    console.log("Creating order...");
    try {
      ctx.body = "ok";
    } catch (err) {
      ctx.body = err;
    }
  },
};
