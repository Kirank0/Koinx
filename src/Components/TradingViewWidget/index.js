import React, { useEffect,useState, useRef, memo } from 'react';
import axios from 'axios';
import './index.css';

function TradingViewWidget(props) {
  const container = useRef();
  const[symbol,setSymbol]=useState();
  useEffect(
    () => {
        async function getSymbol(){
          const response=await axios.get(`https://api.coingecko.com/api/v3/coins/${props.name}`);
          console.log(response);
          setSymbol(response.data.symbol);
         }
         if (!symbol) {
          getSymbol();
         }
         else {
          const script = document.createElement("script");
          script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
          script.type = "text/javascript";
          script.async = true;
          script.innerHTML = `
            {
              "width": "910",
              "height": "480",
              "symbol": "${symbol}",
              "interval": "60",
              "timezone": "Asia/Kolkata",
              "theme": "light",
              "style": "3",
              "locale": "en",
              "enable_publishing": false,
              "gridColor": "rgba(0, 0, 0, 0.06)",
              "hide_top_toolbar": true,
              "save_image": false,
              "calendar": false,
              "hide_volume": true,
              "support_host": "https://www.tradingview.com"
            }`;
          container.current.appendChild(script);
        }
    },[symbol,props.name]);

  return (
    <div className="tradingview-container">
    <div className="tradingview-widget-container" ref={container}>
      <h1>{props.name} Price Chart</h1>
      <div className="tradingview-widget-container__widget"></div>
    </div>
    </div>
  );
}

export default memo(TradingViewWidget);
