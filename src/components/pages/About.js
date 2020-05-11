import React from 'react';
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div>
      <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
      <div className="w-100">
        <h1 className="mb-0">Sodiq
          <span className="text-primary">Oloyede</span>
        </h1>
        <div className="subheading mb-5">No 28 Adebambo street,Obanikoro, Lagos State· (+273)8155936018· 
          <Link to="mailto:name@email.com">sodiqoloyede295@gmail.com</Link>
        </div>
        <p className="lead mb-5">I am experienced in leveraging agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.</p>
        <div className="social-icons">
          <Link to="#">
            <i className="fab fa-linkedin-in"></i>
          </Link>
          <Link to="#">
            <i className="fab fa-github"></i>
          </Link>
          <Link to="#">
            <i className="fab fa-twitter"></i>
          </Link>
          <Link to="#">
            <i className="fab fa-facebook-f"></i>
          </Link>
        </div>
      </div>
    </section>

    </div>
  )
}
