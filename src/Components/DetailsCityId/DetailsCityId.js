import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { connect } from "react-redux";
import citiesActions from "../Redux/actions/citiesActions";
import itinerariesActions from "../Redux/actions/itinerariesActions";
import Footer from "../Footer/Footer";
import { useState } from "react";
import Swal from "sweetalert2";
import "../Styles/itineraryDetails.css";
import { useSelector } from "react-redux";
import UnderConstruction from "../UnderConstruction/UnderConstruction";
import "../../Components/Styles/styles.css";

const DetailsCityId = (props) => {
  console.log(props);
  console.log(props.city);
  console.log(props.city.itineraryId);

  const [reload, setReload] = useState();
  const itinerary = props.city.itineraryId;
  console.log(itinerary);

  const { id } = useParams();

  async function likesOrDislikes(id) {
    await props.likeDislike(id);
    setReload(!reload);
  }

  async function noUser() {
    Swal.fire({
      icon: "warning",
      title: "You have to be logged to like it",
      showConfirmButton: false,
      timer: 1500,
    });
  }
  useEffect(() => {
    props.findOneCity(id);
  }, [!reload]);

  return (
    <>
      <div className="DetailsCard">
        <div className="carddetails">
          <div className="tituloItinerario">
            <h1 className="card-title">{props.city.city} </h1>
          </div>
          <div className="d-flex flex-column">
            {itinerary ? (
              <div className="card2 mb-3 cardDetail2">
                <div className="ConteinerUser">
                  <img className="imguser" src={itinerary?.userimage} />
                  <h2 className="card-user">{itinerary?.username}</h2>
                </div>
                <h1 className="card-title2">{itinerary?.name}</h1>
                <div>
                  <img className="imgitinerary" src={itinerary?.image} />
                </div>
                <div className="card-body">
                  <p className="card-p2">Description: {itinerary?.details} </p>
                  <p className="card-p2">Duration: {itinerary?.duration}</p>
                  <p className="card-p2">
                    Hashtag:{" "}
                    {itinerary?.hashtag[0] + " " + itinerary?.hashtag[1]}
                  </p>
                  <p className="card-p2">
                    Price:{"💵".repeat(parseInt(itinerary.price))}
                  </p>
                </div>
                <div className="accordion" id={itinerary?.name}>
                  <div className="accordion-item">
                    <h2
                      className="accordion-header"
                      id={"heading" + itinerary?.name}
                    ></h2>
                    <div
                      id={itinerary?.name.replace(/ /g, "").slice(0, 5)}
                      className="accordion-collapse collapse "
                      aria-labelledby={"heading" + itinerary?.name}
                      itinerary-bs-parent={"#" + itinerary?.name}
                    ></div>
                  </div>
                </div>
              </div>
            ) : (
              <>
                <div className="conteinerimgcard-Not">
                  <img className="imgcard-not" src={props?.city?.image} />
                </div>
                <UnderConstruction />
              </>
            )}
          </div>
        </div>
      </div>
      <Footer />;
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    city: state.Data.city,
    itineraries: state.itinerariesReducers.itineraries,
  };
};

const mapDispatchToProps = {
  findOneCity: citiesActions.findOneCity,
  likeDislike: itinerariesActions.likeDislike,
};
export default connect(mapStateToProps, mapDispatchToProps)(DetailsCityId);
