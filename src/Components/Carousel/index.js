// import React,{useEffect,useState} from "react";
// import axios from "axios";
// import './index.css';
// import Card from '../Card';


// const Carousel=()=>{
//     const[slider,setSlider]=useState();
//     useEffect(()=>{
//         async function makeCarousel(){
//             const response=await axios.get('https://api.coingecko.com/api/v3/search/trending');  
//             const coin=response.data.coins;
//             const sliderElements=coin.map((x)=>{
//                 return(
//                     <Card
//                      key={x.item.coin_id}
//                      cImg={x.item.data.sparkline}
//                      cPriceChange={x.item.data.price_change_percentage_24h.usd}
//                      cPrice={x.item.data.price}
//                      cSymbol={x.item.symbol}
//                      cLogo={x.item.large}
//                     />
//                 )
//             });
//             setSlider(sliderElements);
//            }
//            makeCarousel();
//     },[]);
//      return (
//         <>
//           {slider}
//         </>
//      )
// }

// export default Carousel;

import React, { useEffect, useState } from "react";
import axios from "axios";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Card from '../Card';
import './index.css';

const Carousel = () => {
  const [slider, setSlider] = useState([]);

  useEffect(() => {
    async function makeCarousel() {
      const response = await axios.get('https://api.coingecko.com/api/v3/search/trending');
      const coins = response.data.coins;
      const sliderElements = coins.map((x) => (
        <Card
          key={x.item.coin_id}
          cImg={x.item.data.sparkline}
          cPriceChange={x.item.data.price_change_percentage_24h.usd.toFixed(2)}
          cPrice={x.item.data.price}
          cSymbol={x.item.symbol}
          cLogo={x.item.large}
        />
      ));
      setSlider(sliderElements);
    }
    makeCarousel();
  }, []);

  const settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1
  };

  return (
    <div className="carousel-container">
     <h1>You May Also Like</h1>
     <Slider {...settings}>
      {slider}
     </Slider>
    </div>
  );
}

export default Carousel;
