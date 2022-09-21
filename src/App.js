import Navbar from "./components/navbar/Navbar";
import { Home } from "./pages";
import Purpose from "./pages/Purpose";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      {/* <Purpose /> */}
      <Home />
    </div>
  );
};

export default App;
