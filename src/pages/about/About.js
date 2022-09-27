import "./About.css";
import aboutImg from "../../assets/img/about-img.png";
import { FAQ } from "../../components";

const About = () => {
  return (
    <section class="about_section layout_padding">
      <div class="container p-5">
        <div class="row">
          <div class="col-md-6">
            <div class="img-box">
              <img src={aboutImg} alt="" />
            </div>
          </div>
          <div class="col-md-6">
            <div class="detail-box">
              <div class="heading_container">
                <h2>About Our Group</h2>
              </div>
              <p>
                At cumque tenetur iste molestiae, vel eum reiciendis assumenda!
                Numquam, repudiandae. Consequuntur obcaecati recusandae aliquam,
                amet doloribus eius dolores officiis cumque? Quibusdam
                praesentium pariatur sapiente mollitia, amet hic iusto voluptas!
                Iusto quo earum vitae excepturi, ipsam aliquid deleniti
                assumenda culpa deserunt.
              </p>
              <a href=""> Read More </a>
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
