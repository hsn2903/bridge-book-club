import "./FAQ.css";
import data from "./data";
import { useState } from "react";
import Question from "./Question";

const FAQ = () => {
  const [questions, setQuestions] = useState(data);

  return (
    <div className="faq_section">
      <div className="container">
        <h2 className="heading-tertiary center-text">
          Frequently Asked Questions (FAQ)
        </h2>

        <div className="row">
          <div class="col-md-8">
            {questions.map((question) => {
              return <Question key={question.id} {...question} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
