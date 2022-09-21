import "./Hero.css";
import heroImg from "../../assets/img/hero-img.png";

const Hero = () => {
  return (
    <section className="hero_section">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="detail-box">
              <h5>Bridge Book Club</h5>
              <h1>
                Meeting Station <br />
                For Book Lovers
              </h1>
              <p>
                We are meeting on Saturday at 20:00 UTC+3 for discussing books.
                If you want to want more informationi please contact with us.
              </p>
              <a href=""> Contact Us</a>
            </div>
          </div>
          <div className="col-md-6">
            <div className="img-box">
              <img src={heroImg} alt="people reading books" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
