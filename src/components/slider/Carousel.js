import React from "react";
import Slider from "react-slick";
import "./slider.scss";

function Carousel() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 1000,
    // cssEase: "linear",
  };
  return (
    <div>
      <Slider {...settings}>
        <div className="carousel-item item-1 active">
          <div className="carousel-caption d-md-block carosel-data">
            {/* <h1 className="heads">ANGULAR DEVELOPMENT COURSE</h1>
            <Link className="btn btn-orange bradius-0 pb-10" to="/">
              EXPLORE COURSE
            </Link> */}
          </div>
        </div>
        <div className="carousel-item item-2">
          <div className="carousel-caption d-md-block carosel-data">
            {/* <h1 className="heads">REACTJS DEVELOPMENT COURSE</h1>
            <Link className="btn btn-orange bradius-0 pb-10" to="/">
              EXPLORE COURSE
            </Link> */}
          </div>
        </div>
        <div className="carousel-item item-3">
          <div className="carousel-caption d-md-block carosel-data">
            {/* <h1 className="heads">PYTHON DEVELOPMENT COURSE</h1>
            <Link className="btn btn-orange bradius-0 pb-10" to="/">
              EXPLORE COURSE
            </Link> */}
          </div>
        </div>
        <div className="carousel-item item-4">
          <div className="carousel-caption d-md-block carosel-data">
            {/* <h1 className="heads">AMAZON WEB SERVICES COURSE</h1>
            <Link className="btn btn-orange bradius-0 pb-10" to="/">
              EXPLORE COURSE
            </Link> */}
          </div>
        </div>
        <div className="carousel-item item-5">
          <div className="carousel-caption d-md-block carosel-data">
            {/* <h1 className="heads">WEB DEVELOPMENT COURSE</h1>
            <Link className="btn btn-orange bradius-0 pb-10" to="/">
              EXPLORE COURSE
            </Link> */}
          </div>
        </div>
      </Slider>
      <div style={{ textAlign: "center" }}>
        <button className="button">Play</button>
        <button className="button">Pause</button>
      </div>
    </div>
  );
}

export default Carousel;
