import "./CurrentBook.css";
import bookCover from "../../assets/img/book-covers/atomic-habits.png";

const CurrentBook = () => {
  return (
    <section class="section_current-book">
      <div className="container">
        <span className="subheading">current book</span>
        <h2 className="heading-secondary">The book we are reading now</h2>
      </div>
      <div class="container">
        <div className="current-book grid grid--2-cols">
          <div className="img-box">
            <img src={bookCover} alt="atomic habits cover" />
          </div>
          <div className="text-box">
            <p>
              An atomic habit is a regular practice or routine that is not only
              small and easy to do but is also the source of incredible power; a
              component of the system of compound growth. Bad habits repeat
              themselves again and again not because you don't want to change,
              but because you have the wrong system for change.
            </p>
            <a href=""> Read More </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurrentBook;
