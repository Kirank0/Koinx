import React,{useEffect, useState} from 'react';
import axios from 'axios';
import './index.css';

const TrendingCoins=()=>{
    const[firstCoin,setFirstCoin]=useState();
    const[secondCoin,setSecondCoin]=useState();
    const[thirdCoin,setThirdCoin]=useState();
    useEffect(()=>{
        async function getTrendingCoins(){
            const response=await axios.get('https://api.coingecko.com/api/v3/search/trending');  
            const coin=[];
            for(let i=0;i<response.data.coins.length;i++){
                coin.push(response.data.coins[i].item.name);
            }
            setFirstCoin(coin[0]);
            setSecondCoin(coin[1]);
            setThirdCoin(coin[2]);   
           }
        getTrendingCoins();
    },[]);
    
    return(
     <div className="trending-coins-container">
        <h1>Trending Coins (24h)</h1>
        <h2>{firstCoin}</h2>
        <h2>{secondCoin}</h2>
        <h2>{thirdCoin}</h2>
        </div>
    );
}

export default TrendingCoins;
