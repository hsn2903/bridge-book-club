import "./Hero.css";
import heroImg from "../../assets/img/hero-img.png";

const Hero = () => {
  return (
    <section className="section_hero">
      <div className="hero">
        <div className="hero-text-box">
          <span className="subheading">Bridge Book Club</span>
          <h1 className="heading-primary">
            Book Club For
            <br />
            English Learners
          </h1>
          <p className="hero-description">
            We meet <strong>on Saturday at 20:00 UTC+3</strong> for discussing
            books. If you want to want more information please contact with us.
          </p>
          <a className="btn btn__full margin-right-sm" href="#">
            Contact us
          </a>
          <a className="btn btn__outline" href="#">
            Learn more &darr;
          </a>
        </div>
        <div className="hero-img-box">
          <img src={heroImg} alt="people reading books" className="hero-img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
