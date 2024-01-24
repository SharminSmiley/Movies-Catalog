import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Movies from "./pages/Movies";
import Pagenotfound from "./pages/Pagenotfound";
import Astarisborn from "./pages/Astarisborn";
import Theconjuring from "./pages/Theconjuring";
import Joker from "./pages/Joker";
import After from "./pages/After";
import Profile1 from "./pages/Profile1";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/astarisborn" element={<Astarisborn />} />
          <Route path="/theconjuring" element={<Theconjuring />} />
          <Route path="/joker" element={<Joker />} />
          <Route path="/after" element={<After />} />
          <Route path="*" element={<Pagenotfound />} />
          <Route path="/profile1" element={< Profile1/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
