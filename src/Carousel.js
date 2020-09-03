
import React from 'react';

const Carousel = () => {
  return (
    <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">

      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="photo1.jpg" className="d-block w-100" alt="boats"></img>
        </div>
        <div className="carousel-item">
          <img src="photo2.jpg" className="d-block w-100" alt="beach"></img>
        </div>
        <div className="carousel-item">
          <img src="photo3.jpg" className="d-block w-100" alt="kids"></img>
        </div>
      </div>

      <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>

      <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>

    </div >
  )
}
export default Carousel;