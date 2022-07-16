import React from "react"
import img from "../../assets/icons/152462.svg"
import PrimaryButton from "../PrimaryButton"

import { navigate } from "gatsby-link"
import "./Hero.css"
const Hero = () => {
  return (
    <>
      <section className="hero" id="about">
        <img src={img} alt="jane-doe" loading="lazy" className="hero-img" />
        <div className="bio animate__animated animate__shakeX">
          <h2 className="bio-title">WELCOME TO EASY ELECBUY</h2>
          <p className="bio-text">
          Welcome to Easyelec.com’s Terms of Use! We are truly excited to have you aboard. Thank you for choosing to use our services.
          </p>
          <p className="bio-text">
            Free shipping on your first order. So just order Now!
          </p>
          <PrimaryButton
            text="Explore all products"
            onClick={() => navigate("products")}
          />
        </div>
      </section>
    </>
  )
}

export default Hero
