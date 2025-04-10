import React from "react";

const StatCard = ({ title, text }) => (
  <div className="col-md-6 my-1">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title fw-bolder fs-2">{title}</h5>
        <p className="card-text fs-6">{text}</p>
      </div>
    </div>
  </div>
);


const About = () => {
  return (
    <section id="about-section" className="py-5">
      <div className="container-xl">
        <div className="row">
          {/* Left Side - About Content */}
          <div className="col-md-12">
            <p className="fs-6 lh-1">Non-Governmental Organization</p>
            <h4 className="fw-bolder fs-1 lh-1">Learn About Us</h4>
            <p className="fs-5 my-3">
              We envision a world where every child, regardless of their background, has access to quality education
              and the opportunity to reach their full potential. By building schools, providing essential resources,
              and offering scholarships, we strive to create a future where education bridges gaps and transforms lives.
            </p>

            {/* Statistics Cards */}
            <div className="row">
              <StatCard title="1000+" text="Children Educated across underserved communities." />
              <StatCard title="200+" text="Trained teachers empowering young minds every day." />
              <StatCard title="5000" text="Scholarships awarded to deserving students." />
              <StatCard title="150" text="Schools supported with infrastructure, resources & training." />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
