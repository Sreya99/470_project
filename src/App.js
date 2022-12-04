import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";

// Pages
import HomePage from "./pages/Homepage";
import AboutPage from "./pages/Aboutpage";
import SinglePage from "./pages/Singlepage";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Routes>
          <Route exact path="/" element={<HomePage/>} />
          <Route path="/about" element={<AboutPage/>} />
          <Route path="/singleshow/:id" element={<SinglePage/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;