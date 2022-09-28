import "./SingleBlog.css";

const SingleBlog = () => {
  return (
    <section className="section_singleblog">
      <h2 className="heading-tertiary center-text">
        Questions for Book Club Discussions
      </h2>
      <div className="container">
        <div className="post-content">
          <span className="subheading">Starter Questions</span>
          <p>Can you introduce yourself a little please?</p>
          <p>What are your first impressions about the book? (Not chapter)</p>
          <p>What do you think about the title? (Atomic Habits)</p>
          <p>
            Do you have any habits to have? (Saying it loud can help motivation)
          </p>
          <br />
          <br />
          <span className="subheading">Round 1 Questions</span>
          <p>What emotions did this book make you feel?</p>
          <p>Was the book similar or different to what you normally read?</p>
          <p>What was your favorite part of the chapter?</p>
          <br />
          <br />
          <span className="subheading">Round 2 Questions</span>
          <p>Did you reread any passages? If so, which ones?</p>
          <p>Did any parts of the book surprise you?</p>
          <p>Are you glad you read this book?</p>
          <p> Did you Google anything about the book while reading it?</p>
          <br />
          <br />
          <span className="subheading">Round 3 Questions</span>
          <p>Did reading the book impact your mood? If yes, how so?</p>
          <p>Did the book change your opinions or way of thinking at all?</p>
          <p>Do you think you'll remember it in a few months or years?</p>
          <p>Did you learn anything new by reading this book?</p>
        </div>
      </div>
    </section>
  );
};

export default SingleBlog;
