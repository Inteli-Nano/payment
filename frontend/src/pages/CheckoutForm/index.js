import React, { useState, useEffect } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import CheckoutForm from './CheckoutForm'
import { toast } from 'react-toastify'
import './index.scss'

const stripePromise = loadStripe(
  'pk_test_51LM4uyBPSKEcwyhuBi2zyEnPrQJF7U31jGf4D1yEuY4aLvw2RlJIr7yWuVWCTeVIxYhN9paxsiTom64FNKbHVIYq00w5oiDKSg',
)

const PaymentPage = () => {
  const history = useNavigate()
  const [clientSecret, setClientSecret] = useState('')
  const email = localStorage.getItem('register')
  const search = useLocation().search;
  const price = new URLSearchParams(search).get("price");
  if (!email) {
    history('/signup')
  }
  if (!price) {
    toast.warn('Price is empty')
    history('/membership')
  }

  useEffect(() => {
    fetch(`http://127.0.0.1:80/api/stripe/create-payment-intent`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        items: [{ id: 'xl-tshirt' }],
        price: price,
        email: email,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setClientSecret(data.clientSecret)
      })
  }, [])

  const appearance = {
    theme: 'stripe',
  }
  const options = {
    clientSecret,
    appearance,
  }
  console.log(email, price);
  return (
    <div className="App">
      {clientSecret && (
        <Elements options={options} stripe={stripePromise} >
          <CheckoutForm email={email} price={price}  />
        </Elements>
      )}
    </div>
  )
}

export default PaymentPage
