import "./Contact.css";
import contactImg from "../../assets/img/contact-img.png";

const Contact = () => {
  return (
    <section id="cta_section" className="cta_section">
      <div className="container">
        <div className="cta grid grid--2-cols">
          <div className="text-box">
            <h2 className="heading-secondary">Contact Us</h2>

            <form action="#">
              <div>
                <input type="text" placeholder="Name" />
              </div>
              <div>
                <input type="email" placeholder="Email" />
              </div>
              <div>
                <input type="text" placeholder="Phone Number" />
              </div>
              <div>
                <input
                  type="text"
                  className="message-box"
                  placeholder="Message"
                />
              </div>
              <div className="btn-box">
                <button>SEND</button>
              </div>
            </form>
          </div>
          <div className="img-box">
            <img src={contactImg} alt="books" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
