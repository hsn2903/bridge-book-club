import "./How.css";
import stepImage1 from "../../assets/img/how/reading_book.svg";
import stepImage2 from "../../assets/img/how/group_hangout.svg";
import stepImage3 from "../../assets/img/how/activity_tracker.svg";

const How = () => {
  return (
    <section className="section_how" id="how">
      <div className="container">
        <span className="subheading">How it works</span>
        <h2 className="heading-secondary">Our methods in 3 simple steps</h2>
      </div>
      <div className="container grid grid--2-cols grid--center-v">
        {/* STEP 01 */}
        <div className="step-text-box">
          <p className="step-number">01</p>
          <h3 className="heading-tertiary">Be ready before the call</h3>
          <p className="step-description">
            We discuss specific part a book in each call. Read and think about
            it before the call.
          </p>
        </div>
        <div className="step-img-box">
          <img
            src={stepImage1}
            alt="iPhone app preferences selection screen"
            className="step-img"
          />
        </div>

        {/* STEP 02 */}
        <div className="step-img-box">
          <img
            src={stepImage2}
            alt="iPhone app meal approving plan screen"
            className="step-img"
          />
        </div>
        <div className="step-text-box">
          <p className="step-number">02</p>
          <h3 className="heading-tertiary">Share your thoughts</h3>
          <p className="step-description">
            We are here to learn from each other. Share your thoughts without
            hesitation. We will learn from each other.
          </p>
        </div>

        {/* STEP 03 */}
        <div className="step-text-box">
          <p className="step-number">03</p>
          <h3 className="heading-tertiary">Be active</h3>
          <p className="step-description">
            Instead of joining one call and missing the next, be a regular
            participant.
          </p>
        </div>
        <div className="step-img-box">
          <img
            src={stepImage3}
            alt="iPhone app delivery screen"
            className="step-img"
          />
        </div>
      </div>
    </section>
  );
};

export default How;
