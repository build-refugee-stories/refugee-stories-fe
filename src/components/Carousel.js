import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";




// export default class SimpleSlider extends Component {
const Carousel = ({stories}) => {
    console.log(stories)
    console.log(stories[0])
//   render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear"
    };
 
    return (
      <div>
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div>
            <h2>{stories[stories.length-1].title} </h2>
            <img src={stories[stories.length-1].imageUrl}/>
            <button> Read More </button>
          </div>
          <div>
            <h2>{stories[stories.length-2].title} </h2>
            <img src={stories[stories.length-2].imageUrl}/>
            <button> Read More </button>
          </div>
          <div>
            <h2>{stories[stories.length-3].title} </h2>
            <img src={stories[stories.length-3].imageUrl}/>
            <button> Read More </button>
          </div>
          <div>
            <h2>{stories[stories.length-4].title} </h2>
            <img src={stories[stories.length-4].imageUrl}/>
            <button> Read More </button>
          </div>
          <div>
            <h2>{stories[stories.length-5].title} </h2>
            <img src={stories[stories.length-5].imageUrl}/>
            <button> Read More </button>
          </div>
        </Slider>
      </div>
    );
  };
  export default Carousel;