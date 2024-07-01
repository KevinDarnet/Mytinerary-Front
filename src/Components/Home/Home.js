import React, { useRef, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "../Styles/styles.css";
import Carousel from "../Carousel/Carousel";
import { Link as LinkRouter } from "react-router-dom";
import Calltoaction from "../Calltoaction/Calltoaction";
import Footer from "../Footer/Footer";
import Logomytinerary from "../Assests/Logomytinerary.png";

export default function App() {
  return (
    <>
      <div className="conteinerHeader">
        <div className="conteinerlogoinheader">
          <img className="logoinheader" src={Logomytinerary} />
        </div>
        <div className="conteinertitlogo">
          <h2 className="tituloheader">
            Find your perfect trip, designed by insiders who know and love their
            cities!
          </h2>

          <div className="buttoncitties">
            <LinkRouter to="/Cities" className="linkresp">
              <button className="btnhome">Travel</button>
            </LinkRouter>
          </div>
        </div>
      </div>
      <div className="divcalltoaction">
        <Calltoaction />
      </div>
      <div className="conteinerCarousel">
        <Carousel />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
