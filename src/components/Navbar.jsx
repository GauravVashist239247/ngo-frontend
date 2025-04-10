import { useState } from "react";
import logo from "../assets/egologo.png";
import { Link } from "react-router-dom";
// import JoinNowSection from "./JoinNowSection";
const Navbar = () => {

  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <header>
      <div className="container-xl">
        <nav className="navbar navbar-expand-lg d-flex justify-content-between align-items-center py-3">
          <Link className="nav-link active navbar-brand d-flex align-items-center" to="/">
            <img src={logo} alt="EduChild Logo" width="45" className="me-2" id="ngo-logo" />
            <span className="fs-3 fw-bold">CareCircle</span>
          </Link>
          {/* Mobile Toggle Button */}
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setIsNavOpen(!isNavOpen)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar Menu */}
          <div className={`navbar-collapse justify-content-center ${isNavOpen ? "show" : "collapse"}`} id="navbarNav">
            <ul className="navbar-nav fs-5">
              <li className="nav-item"><Link className="nav-link active" to="/">Home</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/Donate">Donate</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Buttons for Larger Screens */}
          <div className="d-lg-flex d-none gap-3">
            <button
              type="button"
              className="btn  w-100 my-1 px-4 py-2 fw-bold rounded-pill shadow-sm -btn donate__btn"
              data-bs-target="#offcanvasExample"
            >
              <a href="/Donate" className="text-white text-decoration-none d-block">
                Donate Now
              </a>
            </button>          </div>
        </nav>

        {/* Mobile Buttons */}
        {isNavOpen && (
          <div className="text-center pb-3 d-lg-none">
            <button type="button" className="btn w-100 my-1 px-4 py-2 fw-bold rounded-pill donate__btn shadow-sm" data-bs-target="#offcanvasExample"> <a href="/Donate" className="text-white text-decoration-none d-block">
                Donate Now
              </a></button>
          </div>
        )}
      </div>

      {/* Donation Offcanvas
      <div className="offcanvas offcanvas-end model_card" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
        <div className="offcanvas-header position-relative">
          <button type="button" className="btn-close position-absolute" style={{ right: "20px", top: "20px" }} data-bs-dismiss="offcanvas"></button>
        </div>
        <div className="offcanvas-body">
          <h5 className="fs-1 fw-bold">Support Our Mission – Every Contribution Counts!</h5>
          <p>Your donation helps us continue our work. Every amount makes a difference!</p>
          <img src="" alt="Donation" className="d-block" />
          <button className="btn btn-secondary mt-3" data-bs-dismiss="offcanvas">Close</button>
        </div>
      </div> */}
    </header>
  );
};

export default Navbar;
