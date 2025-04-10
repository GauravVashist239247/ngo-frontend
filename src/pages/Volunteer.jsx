import React, { useState } from 'react';
import v1 from '../assets/volunteer1.png';
import v2 from '../assets/volunteer2.png';
import v3 from '../assets/volunteer3.png';
import v4 from '../assets/volunteer4.png';

const volunteers = [
  { name: "Michel Fokluz", role: "Volunteer", img: v1 },
  { name: "Arian Droblas", role: "Volunteer", img: v2, overlay: true },
  { name: "Jara Klintof", role: "Volunteer", img: v3 },
  { name: "Aiden Markram", role: "Volunteer", img: v4 },
];

const VolunteerSection = () => {
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      const modalEl = document.getElementById('joinModal');
      const modalInstance = bootstrap.Modal.getInstance(modalEl);
      modalInstance.hide();
    }, 2000);
  };

  return (
    <section className="py-5 bg-light">
      {/* Heading Section */}
      <div className="container text-center position-relative mb-5">
        <div className="mb-2 text-success fw-semibold fs-5">
          <i className="bi bi-heart"></i> Start Donating 
        </div>
        <h2 className="fw-bold Volunteer-title">
        🙌 Volunteer With Us
        Be the Change You Want to See. Join CareCircle. <br />  
        </h2>
      </div>

      {/* Volunteer Cards */}
      <div className="container text-center">
        <div className="row">
          {volunteers.map((vol, index) => (
            <div className="col-md-6 col-lg-3" key={index}>
              <div className="card volunteer-card shadow-sm border-0">
                <div className="position-relative overflow-hidden">
                  <img src={vol.img} className="card-img-top volunteer-images" alt={vol.name} />
                  <div className="card-overlay">
                    <div className="overlay-icons d-flex flex-column align-items-end p-2">
                      <button className="btn btn-light btn-sm mb-2"><i className="bi bi-facebook"></i></button>
                      <button className="btn btn-light btn-sm mb-2"><i className="bi bi-twitter-x"></i></button>
                      <button className="btn btn-light btn-sm mb-2"><i className="bi bi-linkedin"></i></button>
                      <button className="btn btn-warning btn-sm rounded-circle"><i className="bi bi-plus-lg"></i></button>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <h5 className="card-title fw-bold mb-1 fs-4">{vol.name}</h5>
                  <p className="card-text">{vol.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          className="btn m-5 btn-warning rounded-pill px-4 py-2 fw-semibold shadow-sm fs-5"
          data-bs-toggle="modal"
          data-bs-target="#joinModal"
        >
          <i className="bi bi-people-fill me-2"></i>Join Our Team
        </button>
      </div>

      {/* Modal Form */}
      <div className="modal fade" id="joinModal" tabIndex="-1" aria-labelledby="joinModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="joinModalLabel">Join Our Volunteer Team</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            {showSuccess ? (
              <div className="modal-body">
                <div className="alert alert-success text-center fw-semibold mb-0" role="alert">
                  ✅ Thank you for joining! We'll contact you soon.
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="modal-body">
                  <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control" required />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" required />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Why do you want to join?</label>
                    <textarea className="form-control" rows="3" required></textarea>
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="submit" className="btn btn-warning">Submit</button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VolunteerSection;
