import "./Contact.css";
import contactImg from "../../assets/img/contact-img.png";

const Contact = () => {
  return (
    <section id="cta_section" className="cta_section">
      <div className="container">
        <div className="cta">
          <div className="text-box">
            <h2 className="heading-secondary">Contact Us</h2>

            <form name="contact" method="POST" data-netlify="true">
              <div>
                <input type="text" placeholder="Name" name="name" />
              </div>
              <div>
                <input type="email" placeholder="Email" name="email" />
              </div>
              <div>
                <input type="text" placeholder="Phone Number" name="phone" />
              </div>
              <div>
                <input
                  type="text"
                  className="message-box"
                  placeholder="Message"
                  name="message"
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
