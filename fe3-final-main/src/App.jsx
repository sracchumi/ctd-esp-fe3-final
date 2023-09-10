
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import Favs from "./Routes/Favs";
import Detail from "./Routes/Detail";
import Contact from "./Routes/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
      <div className="App">
        <Router>
          <Navbar/>
          <Routes>
            <Route exact path="/home" element={<Home/>}/>
            <Route path="/favs" element={<Favs/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/dentist/:id" element={<Detail/>}/>
          </Routes>
        </Router>
        <Footer/>
      </div>
  );
}

export default App;
