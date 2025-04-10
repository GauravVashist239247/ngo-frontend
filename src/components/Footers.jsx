import { useState } from "react";
import logo from "../assets/egologo.png"; // Ensure the logo path is correct

const Footer = () => {
  const [email, setEmail] = useState("");

  return (
    <footer className="footer bg-dark text-white py-5">
      <div className="container-xl">
        <div className="row gy-4">
          
          {/* Logo & About Section */}
          <div className="col-lg-4">
            <a className="navbar-brand d-flex align-items-center mb-3" href="#">
              <img src={logo} alt="EduChild Logo" width="50" className="me-2" />
              <span className="fs-3 fw-bold">CareCircle
              </span>
            </a>
            <p className="text-light opacity-75">
              Designed with love, for groups to create memories together.
            </p>
            <p className="text-light opacity-75">📧 CareCircle@gmail.com</p>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-4">
            <h5 className="fw-bold">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="footer-link">Our Work</a></li>
              <li><a href="#" className="footer-link">Our Story</a></li>
              <li><a href="#" className="footer-link">Partner With Us</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="col-lg-2 col-md-4">
            <h5 className="fw-bold">Resources</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="footer-link">Blogs</a></li>
              <li><a href="#" className="footer-link">Internship</a></li>
              <li><a href="#" className="footer-link">Career</a></li>
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div className="col-lg-4">
            <h5 className="fw-bold">Stay Updated</h5>
            <p className="text-light opacity-75">Subscribe to our newsletter for updates.</p>
            <div className="input-group">
              <input 
                type="email" 
                className="form-control" 
                placeholder="Enter your email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
              />
              <button className="btn btn-warning" type="button">Subscribe</button>
            </div>
          </div>

        </div>

        {/* Divider */}
        <hr className="border-light my-4" />

        {/* Social Media Links */}
        <div className="text-center">
          <a href="#" className="social-icon"><i className="bi bi-instagram"></i></a>
          <a href="#" className="social-icon"><i className="bi bi-facebook"></i></a>
          <a href="#" className="social-icon"><i className="bi bi-youtube"></i></a>
        </div>

        {/* Copyright */}
        <p className="text-center mt-3 opacity-75">© 2025 CareCircle
        . All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
