import Navbar from "./components/navbar/Navbar";
import { About, Home } from "./pages";
import Purpose from "./pages/Purpose";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
