import React, { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setFormErrors({ ...formErrors, [e.target.name]: "" });
  };

  const validate = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }
    if (!formData.message.trim()) errors.message = "Message is required";
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post("https://ngo-backend-w0ir.onrender.com/api/contact/detail", formData);
      if (response.status === 201) {
        setShowToast(true);
        setFormData({ name: "", email: "", phone: "", message: "" });
        setTimeout(() => setShowToast(false), 3000);
      }
    } catch (error) {
      console.error("Error submitting message:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container my-5">
      {showToast && (
        <div className="alert alert-success text-center shadow-sm fw-semibold" role="alert">
          Message sent successfully!
        </div>
      )}

      <div className="row align-items-stretch shadow-lg rounded-4 overflow-hidden">
        {/* Contact Info Section */}
        <div
          className="col-md-5 text-white p-4 d-flex flex-column justify-content-center"
          style={{ background: "linear-gradient(135deg, #0069d9, #004085)" }}
        >
          <h3 className="fw-bold mb-3">Let's Connect</h3>
          <p className="mb-2">
            <i className="bi bi-geo-alt-fill me-2"></i>
            9757 Aspen Lane, NY 11419
          </p>
          <p className="mb-2">
            <i className="bi bi-telephone-fill me-2"></i>
            +1 (291) 939 9321
          </p>
          <p className="mb-2">
            <i className="bi bi-envelope-fill me-2"></i>
            info@mywebsite.com
          </p>
          <p className="mt-3">We typically reply within 24 hours.</p>
        </div>

        {/* Form Section */}
        <div className="col-md-7 bg-white p-5">
          <h3 className="fw-bold mb-4">Send Us a Message</h3>
          <form onSubmit={handleSubmit} noValidate>
            <div className="mb-3">
              <label htmlFor="name" className="form-label fw-medium">
                Name *
              </label>
              <input
                type="text"
                className={`form-control shadow-sm ${formErrors.name ? "is-invalid" : ""}`}
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              {formErrors.name && <div className="invalid-feedback">{formErrors.name}</div>}
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label fw-medium">
                Email *
              </label>
              <input
                type="email"
                className={`form-control shadow-sm ${formErrors.email ? "is-invalid" : ""}`}
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              {formErrors.email && <div className="invalid-feedback">{formErrors.email}</div>}
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label fw-medium">
                Phone
              </label>
              <input
                type="tel"
                className="form-control shadow-sm"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="form-label fw-medium">
                Message *
              </label>
              <textarea
                className={`form-control shadow-sm ${formErrors.message ? "is-invalid" : ""}`}
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              {formErrors.message && <div className="invalid-feedback">{formErrors.message}</div>}
            </div>
            <button type="submit" className="btn btn-primary w-100 fw-bold py-2" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
