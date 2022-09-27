import { Contact, CurrentBook, Hero, How } from "../../components";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Hero />
      <How />
      <CurrentBook />
      <Contact />
    </div>
  );
};

export default Home;
