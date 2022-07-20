const mongoose = require('mongoose')
const StripeModel = mongoose.model('stripe');
const Auth = mongoose.model('auth');
// This is your test secret API key.
const stripe = require('stripe')(
  'sk_test_51LM4uyBPSKEcwyhuqCejrTXSvpSMGFVgU8rHv04T4c7Sqq8eu4y7DcvnGbezlCWGKnGpB6EAMBPHlvivz6Ey4Ucu00kC1a51gl',
)

exports.stripSub = async (req, res) => {
  const { items, price } = req.body  
  const paymentIntent = await stripe.paymentIntents.create({
    amount: parseInt(price * 1000),
    currency: 'eur',
    automatic_payment_methods: {
      enabled: true,
    },
  })

  res.send({
    clientSecret: paymentIntent.client_secret,
  })
}

exports.history = async (req, res) => {
  const { email } = req.query;
  const history = await StripeModel.find({email: email}).exec();
  if(history.length) {
    res.status(200).json({
      message: "Read successfully",
      doc: history
    })
  } else {
    res.status(404).json({
      message: "No data"
    })
  }
}
exports.subscript = async (req, res) => {
  const { price, email, mode } = req.body;
  await Auth.findOneAndUpdate({email: email}, {price: price, subscription: mode});
  if( price ) {
    newStripe = new StripeModel({ price: price, email: email })
    newStripe.save();
  }

  res.status(200).json();
}