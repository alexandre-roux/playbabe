import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./containers/Home";
import About from "./containers/About";
import Eshop from "./containers/Eshop";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/eshop" element={<Eshop />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
