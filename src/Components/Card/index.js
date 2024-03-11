import React from 'react';
import './index.css';

const Card=(props)=>{
  return (
    <div className="card">
        <div className="coin-info">
         <img className="card-img" src={props.cLogo} alt={props.cSymbol} />
          <span className="coin-symbol">{props.cSymbol}</span>
          <span className="coin-price-change">{props.cPriceChange}%</span>
        </div>
        <div className="coin-price">{props.cPrice}</div>
        <img className="coin-sparkline" src={props.cImg} alt={`${props.cSymbol} Sparkline`} />
    </div>
  );
}

export default Card;