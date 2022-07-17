import React, { useState } from "react"
import { loadStripe } from "@stripe/stripe-js"




export default function Home (){


    const redirectToCheckout = async event => {
        event.preventDefault()
        const stripe = await loadStripe("pk_test_51LMVNcIWZTB35DcnHABwapLkQGGuyUL8WYOq1x0kZPzxC7ryHen3Nmcn8Xl9lU8Ekyhqw3it1DnHeuQ6zHWYZg6s00lzbLqLEU")
        const { error } = await stripe.redirectToCheckout({
          mode: "payment",
          lineItems: [{ price: "price_1LMVhPIWZTB35Dcn4E8nEihE", quantity: 1 }],
          successUrl: `http://localhost:8000/payment-success/`,
          cancelUrl: `http://localhost:8000/payment-error`,
        })
        if (error) {
          console.warn("Error:", error)
        }
      }

    return <button onClick={redirectToCheckout}>Buy Laptops</button>
}