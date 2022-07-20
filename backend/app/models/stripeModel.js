const mongoose = require('mongoose')
const Schema = mongoose.Schema

const StripeSchema = new Schema(
  {
    email: { type: String, required: true },
    price: { type: String, requried: true }
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  },
)

mongoose.model('stripe', StripeSchema)
