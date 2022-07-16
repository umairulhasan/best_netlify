import React from "react"
import "./MyProjects.css"
//import img1 from "../../assets/images/expenseTracker.png"
import img2 from "../../assets/icons/netflixClone.png"
//import img3 from "../../assets/images/greenyEarth.png"

const MyProjects = () => {
  return (
    <>
      <section className="projects" id="projects">
        <h2 className="projects-title">Product Categories</h2>
        <div className="projects-container">
          <div className="project-container project-card">
            <img
              src={img2}
              alt="expense-tracker"
              loading="lazy"
              className="project-pic"
            />
            <h3 className="project-title">Phones</h3>
            <p className="project-details">
              We are also selling Tabs
            </p>
            <a href="/products" target="_blank" className="project-link">
              Check it Out
            </a>
          </div>

          <div className="project-container project-card">
            <img
              src={img2}
              alt="netflic-clone"
              loading="lazy"
              className="project-pic"
            />
            <h3 className="project-title">Tabs</h3>
            <p className="project-details">
            We are also selling Tabs
            </p>
            <a href="/products" target="_blank" className="project-link">
              Check it Out
            </a>
          </div>

          <div className="project-container project-card">
            <img
              src={img2}
              alt="greeny-earth"
              loading="lazy"
              className="project-pic"
            />
            <h3 className="project-title">Laptop</h3>
            <p className="project-details">
            We are also selling Tabs
            </p>
            <a href="/products" target="_blank" className="project-link">
              Check it Out
            </a>
          </div>
        </div>
        <div className="projects-container">
          <div className="project-container project-card">
            <img
              src={img2}
              alt="expense-tracker"
              loading="lazy"
              className="project-pic"
            />
            <h3 className="project-title">Phones</h3>
            <p className="project-details">
            We are also selling Tabs
            </p>
            <a href="/products" target="_blank" className="project-link">
              Check it Out
            </a>
          </div>

          <div className="project-container project-card">
            <img
              src={img2}
              alt="netflic-clone"
              loading="lazy"
              className="project-pic"
            />
            <h3 className="project-title">Phones</h3>
            <p className="project-details">
            We are also selling Tabs
            </p>
            <a href="/products" target="_blank" className="project-link">
              Check it Out
            </a>
          </div>

          <div className="project-container project-card">
            <img
              src={img2}
              alt="greeny-earth"
              loading="lazy"
              className="project-pic"
            />
            <h3 className="project-title">Phones</h3>
            <p className="project-details">
            We are also selling Tabs
            </p>
            <a href="/products" target="_blank" className="project-link">
              Check it Out
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default MyProjects
