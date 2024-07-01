import "./Components/Styles/App.css";
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Components/Home/Home";
import Cities from "./Components/Cities/Cities";
import ScrollToTop from "./Components/Scrolltotop/Scrolltotop";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailsCityId from "./Components/DetailsCityId/DetailsCityId";
import { useEffect } from "react";

export default function App(props) {
  useEffect(() => {
    if (localStorage.getItem("token") !== null) {
      const token = localStorage.getItem("token");
      props.VerificarToken(token);
    }
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <NavBar />
      <Routes>
        <Route path="/Details/:id" element={<DetailsCityId />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
        <Route path="/Cities" element={<Cities />} />
      </Routes>
    </BrowserRouter>
  );
}
