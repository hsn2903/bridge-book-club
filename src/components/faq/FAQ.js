import { Accordion } from "react-bootstrap";
import "./FAQ.css";

const FAQ = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4 fs-2">
        Frequently Asked Questions (FAQ)
      </h2>

      <div className="row">
        <div class="col-md-6">
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>When do you make your calls?</Accordion.Header>
              <Accordion.Body>
                We are meeting on Saturday at 20:00 UTC+3
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                Can I just listen, instead of talking?
              </Accordion.Header>
              <Accordion.Body>
                Until you feel confortable, being silent is okay. But at some
                point we should hear you.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                How do you choose books for reading?
              </Accordion.Header>
              <Accordion.Body>We are choosing books together.</Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>
                What kind of books you are reading?
              </Accordion.Header>
              <Accordion.Body>
                It can be any genre. Just we should consider people's
                sensivities.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>How does this group works?</Accordion.Header>
              <Accordion.Body>
                Please navigate to Purpuse & Rules section
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
