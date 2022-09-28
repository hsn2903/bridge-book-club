import Navbar from "./components/navbar/Navbar";
import { About, Blog, Home, Purpose, SharedLayout, SingleBlog } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="blog" element={<Blog />} />
            <Route path="blog/single-blog" element={<SingleBlog />} />
            <Route path="purpose" element={<Purpose />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
