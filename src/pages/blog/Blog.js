import { Link } from "react-router-dom";
import "./Blog.css";
import b1 from "../../assets/img/b1.jpg";
import b2 from "../../assets/img/b2.jpg";

const Blog = () => {
  return (
    <section class="section_blog">
      <div class="container">
        <h2 className="heading-primary">From Our Blog</h2>

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
                <h5>Qestions for Week 1</h5>
                <p>
                  We discussed second chapter of Atomic Habits by James Clear on
                  our weekly meetings. Here are the questions we discussed.
                </p>
                <Link to="/blog/single-blog">Read More</Link>
              </div>
            </div>
          </div>
          {/* <div class="col-md-6">
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
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Blog;
