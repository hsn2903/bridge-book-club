import "./About.css";
import aboutImg from "../../assets/img/about-img.png";
import { FAQ } from "../../components";

const About = () => {
  return (
    <section class="about_section">
      <div class="container p-5">
        <div class="row">
          <div class="col-md-5 me-5">
            <div class="img-box">
              <img src={aboutImg} alt="" />
            </div>
          </div>
          <div class="col-md-6">
            <div class="detail-box">
              <div class="heading_container">
                <h2 className="subheading">About Our Group</h2>
              </div>
              <p>
                We are a group of book lovers who aim to not only read but also
                share our thoughts about books with each other. We believe that
                books serve as bridges. Although we have different opinions, we
                believe that we are not that far from each other when a free
                expression environment is offered. For this purpose, we meet in
                this group once a week to exchange what we read and what we
                understand from what we read.
              </p>
              {/* <a href=""> Read More </a> */}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-5">
        <FAQ />
      </div>
    </section>
  );
};

export default About;
