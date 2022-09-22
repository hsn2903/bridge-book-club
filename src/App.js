import Navbar from "./components/navbar/Navbar";
import { Home } from "./pages";
import Purpose from "./pages/Purpose";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
      <Home />
    </div>
  );
};

export default App;
