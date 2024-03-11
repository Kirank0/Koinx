import React,{useState,useEffect} from 'react';
import axios from 'axios';
import './index.css';

const Bitcoin=(props)=>{
    const [bitcoinPriceUSD, setBitcoinPriceUSD] = useState();
    const [bitcoinPriceINR, setBitcoinPriceINR] = useState();
    const [bitcoinChangeInUSD, setBitcoinChangeInUSD] = useState();
    const [symbol, setSymbol] = useState();
    useEffect(() =>{
       async function getPrice(){
        const response=await axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=${props.name}&vs_currencies=usd,inr&include_24hr_change=true`);
        const response_s=await axios.get(`https://api.coingecko.com/api/v3/coins/${props.name}`);
        console.log(response);
        const btcPriceUSD = response.data[props.name].usd.toFixed(2);
        const btcPriceINR = response.data[props.name].inr;
        const btcChangeInUSD = response.data[props.name].usd_24h_change.toFixed(2);
        const coinSymbol=response_s.data.symbol;
        setBitcoinPriceUSD(btcPriceUSD);
        setBitcoinPriceINR(btcPriceINR);
        setBitcoinChangeInUSD(btcChangeInUSD);
        setSymbol(coinSymbol);
       }
       getPrice();
    },[]);

    return (
      <div className="bitcoin-container">
          <div className="name-symbol">
          <p className="bitcoin-name">{props.name}</p>
          <p className="symbol">{symbol}</p>
          </div>
          <div className="bitcoin-value-change">
          <p className="bitcoin-value-usd">${bitcoinPriceUSD}</p>
          <p className={`bitcoin-value ${bitcoinChangeInUSD >= 0 ? 'positive-change' : 'negative-change'}`}>{bitcoinChangeInUSD}%</p>
          <p className="change">(24H)</p>
          </div>
          <p className="bitcoin-value-inr">{`\u20B9${bitcoinPriceINR}`}</p>
      </div>
  );  
}

export default Bitcoin;
