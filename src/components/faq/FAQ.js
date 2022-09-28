import { Accordion } from "react-bootstrap";
import "./FAQ.css";

const FAQ = () => {
  return (
    <div className="faq_section">
      <div className="container">
        <h2 className="heading-tertiary center-text">
          Frequently Asked Questions (FAQ)
        </h2>

        <div className="row">
          <div class="col-md-8">
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <p>When do you make your calls?</p>
                </Accordion.Header>
                <Accordion.Body>
                  We are meeting on Saturday at 20:00 UTC+3
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  <p>Can I just listen, instead of talking?</p>
                </Accordion.Header>
                <Accordion.Body>
                  Until you feel confortable, being silent is okay. But at some
                  point we should hear you.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  <p> How do you choose books for reading?</p>
                </Accordion.Header>
                <Accordion.Body>
                  We are choosing the books together.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  <p> What kind of books you are reading?</p>
                </Accordion.Header>
                <Accordion.Body>
                  It can be any genre. Just we should consider people's
                  sensivities.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>
                  <p>How does this group works?</p>
                </Accordion.Header>
                <Accordion.Body>
                  Please navigate to Purpuse & Rules section
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
