import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="container max-w-6xl mx-auto px-5 py-6">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
};

export default App;
