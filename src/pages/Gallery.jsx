import image4 from "../assets/img4.png";
import image5 from "../assets/img5.png"

const Gallery = () => {
  return (
    <div className="container mt-5 gallery-section">
      <div className="row g-3 d-flex align-items-end">

        {/* First Column */}
        <div className="col-md-3">
          <div className="gallery-card">
            <img src={image4} className="gallery-img" alt="Gallery Image" />
            <div className="card-overlay">
              <h4>Be the reason a child smiles</h4>
            </div>
          </div>
          <div className="custom-card bg-dark-green mt-3">
            <h2>85%</h2>
            <p>Increase in literacy rate in the regions we serve</p>
          </div>
        </div>

        {/* Second Column */}
        <div className="col-md-3">
          <div className="gallery-card">
            <img src={image5} className="gallery-img tall-img" alt="Gallery Image" />
            <div className="card-overlay text-white">
              <h2>200+</h2>
              <p>Trained teachers empowering young minds every day</p>
            </div>
          </div>
        </div>

        {/* Third Column */}
        <div className="col-md-3">
          <div className="custom-card bg-light-blue">
            <h4>Join 1000 people building a better tomorrow.</h4>
            <button className="btn btn-dark mt-3">Join Community</button>
          </div>
        </div>

        {/* Fourth Column */}
        <div className="col-md-3">
          <div className="gallery-card">
            <img src={image5} className="gallery-img medium-img" alt="Gallery Image" />
            <div className="card-overlay">
              <h5>Inspire change, Inspire education</h5>
            </div>
          </div>
          <div className="custom-card bg-dark-green mt-3">
            <h4>ONE child, Teacher, Book</h4>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Gallery;
