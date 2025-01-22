import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Sidebar from "./components/sidebar";
import Home from "./components/home";
import About from "./components/about";
import Services from "./components/services";
import Login from "./components/login";
import Footer from "./components/footer";

function App() {
  return (
    <BrowserRouter>
    <div style = {appcontainer}>
      <Sidebar/>
      <div style={mainStyle}>
        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>
            <Routes>
          {/* <Route path="/sidebar" element={<Sidebar />} /> */}
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}
const mainStyle = {
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
  width:"250vh",
};
const appcontainer={
  display:"flex",
  flexDirection:"row",
}

export default App;
