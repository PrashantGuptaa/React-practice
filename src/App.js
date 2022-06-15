import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/day5/landing";
import Home from './components/day5/home';
import About from './components/day5/about';
import Contact from './components/day5/contact';
import NotFound from "./components/day5/notFound";
import NavigationBar from "./components/day5/navigationBar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavigationBar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path='*' element={<NotFound />} />
         </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
