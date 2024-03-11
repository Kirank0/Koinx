import React from 'react';
import { useParams } from 'react-router-dom';
import Bitcoin from '../Bitcoin';
import TradingViewWidget from '../TradingViewWidget';
import TrendingCoins from '../TrendingCoins';
import Carousel from '../Carousel';

const Dynamic=()=>{
    const {token}=useParams();
    return (
        <>
            <Bitcoin name={token}/>
            <TradingViewWidget name={token}/>
            <TrendingCoins/>
            <Carousel/>
        </>
    )
     
}

export default Dynamic;