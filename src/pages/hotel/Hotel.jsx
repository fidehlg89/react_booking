import "./hotel.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faLocation,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";

const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber)
  };

  const photos = [
    {
      src: "https://q-xx.bstatic.com/xdata/images/city/250x250/689404.jpg?k=2bf38a3f88bda6be03f938144160349d403271000abbfe6a7d967a3a9857543b&o=",
    },
    {
      src: "https://q-xx.bstatic.com/xdata/images/city/250x250/689404.jpg?k=2bf38a3f88bda6be03f938144160349d403271000abbfe6a7d967a3a9857543b&o=",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/square600/187855604.webp?k=bbb45aa5b540c7608ea3af52d92b95a215df9af831dd3ae0e4c4cce501e28b1b&o=&s=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/square600/106411975.webp?k=53597242e9727e6e44a618b8edbc222c39b6937ac1bbe76761e24a2d796aed62&o=&s=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/square600/286659200.webp?k=9206fc9239b3e4538c22d04b85213d6d5e6257015022de8a37effd956fcde4b6&o=&s=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/square600/286659200.webp?k=9206fc9239b3e4538c22d04b85213d6d5e6257015022de8a37effd956fcde4b6&o=&s=1",
    }
  ];
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        {open && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handleMove("l")}
            />
            <div className="sliderWrapper">
              { <img src={photos[slideNumber].src} alt="" className="sliderImg" />}
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleMove("r")}
            />
          </div>
        )}
        <div className="hotelWrapper">
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocation} />
            <span>Elton St 125 New York</span>
          </div>
          <span className="hotelDistance">
            Excellent location 500 m from center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over $124 at this property and get a free airport taxi
          </span>
          <div className="hotelImages">
            {photos.map((photo, i) => (
              <div className="hotelImgWrapper" key={i}>
                <img
                  onClick={() => handleOpen(i)}
                  src={photo.src}
                  alt=""
                  className="hotelImg"
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in the heart of Krako</h1>
              <p className="hotelDesc">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Voluptatibus eum minima distinctio! Dolorem sint doloremque eos
                iure, optio rem atque? Illum omnis hic fuga libero sed iusto
                minima distinctio exercitationem? Lorem ipsum dolor, sit amet
                consectetur adipisicing elit. Voluptatibus eum minima
                distinctio! Dolorem sint doloremque eos iure, optio rem atque?
                Illum omnis hic fuga libero sed iusto minima distinctio
                exercitationem?
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 9-night stay!</h1>
              <span>
                Locared in real heart of Krakow, this property has an excellent
                location
              </span>
              <h2>
                <b>1945</b> (9 nights)
              </h2>
              <button>Reseve or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Hotel;
