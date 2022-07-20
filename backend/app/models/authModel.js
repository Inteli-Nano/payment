const mongoose = require('mongoose')
const Schema = mongoose.Schema

const AuthSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    subscription: { type: Number, default: 0},
    price: {type: Number, default: 0 },
    password: { type: String, requried: true },
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  },
)

mongoose.model('auth', AuthSchema)
