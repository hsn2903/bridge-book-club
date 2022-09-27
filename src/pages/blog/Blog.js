import "./Blog.css";
import b1 from "../../assets/img/b1.jpg";
import b2 from "../../assets/img/b2.jpg";

const Blog = () => {
  return (
    <section class="blog_section layout_padding">
      <div class="container">
        <div class="heading_container heading_center">
          <h2>From Our Blog</h2>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="box">
              <div class="img-box">
                <img src={b1} alt="" />
                <h4 class="blog_date">
                  <span>22 September 2022</span>
                </h4>
              </div>
              <div class="detail-box">
                <h5>Tiny Changes, Remarkable Results</h5>
                <p>
                  No matter your goals, Atomic Habits offers a proven framework
                  for improving--every day. James Clear, one of the world's
                  leading experts on habit formation, reveals practical
                  strategies that will teach you exactly how to form good
                  habits, break bad ones, and master the tiny behaviors that
                  lead to remarkable results.
                </p>
                <a href="">Read More</a>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="box">
              <div class="img-box">
                <img src={b2} alt="" />
                <h4 class="blog_date">
                  <span>19 January 2021</span>
                </h4>
              </div>
              <div class="detail-box">
                <h5>Minus aliquid alias porro iure fuga</h5>
                <p>
                  Officiis veritatis id illo eligendi repellat facilis animi
                  adipisci praesentium. Tempore ab provident porro illo ex
                  obcaecati deleniti enim sequi voluptas at. Harum veniam eos
                  nisi distinctio! Porro, reiciendis eius.
                </p>
                <a href="">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
