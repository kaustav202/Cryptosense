import React from 'react';
import millify from 'millify';
import { Link } from 'react-router-dom';
import { Typography, Row, Col, Statistic } from 'antd';

import { useGetCryptosQuery } from '../services/CryptoApi';
import Cryptocurrencies from './Cryptocurrencies';
import News from './News';
import Loader from './Loader';

const Homepage = () => {

  const { data, isFetching } = useGetCryptosQuery(10);

  console.log(data);
  
  if(isFetching) return <Loader />;
  
  const globalStats = data?.data?.stats;


  return (
    <>
    
        <Typography.Title level={2} className='heading'> Live Global Crypto Stats
          <div class="live-loader">
            <span></span>
            <span></span>
            <span></span>
          </div>
         </Typography.Title>
        <Row>
            <Col span={12}> <Statistic title='Total Cryptocurrencies' value={globalStats.total}/> </Col>
            <Col span={12}> <Statistic title='Exchanges' value={millify(globalStats.totalExchanges)}/> </Col>
            <Col span={12}> <Statistic title='Total Market Cap' value={millify(globalStats.totalMarketCap)}/> </Col>
            <Col span={12}> <Statistic title='Total 24h Volume' value={millify(globalStats.total24hVolume)}/> </Col>
            <Col span={12}> <Statistic title='Total Markets' value={millify(globalStats.totalMarkets)}/> </Col>
        </Row>

        <div className='home-heading-container'>
          <Typography.Title level={2} className='home-title'> Top 10 crypto currencies in the world</Typography.Title>
          <Typography.Title level={3} className='show-more'> <Link to='/cryptocurrencies'> Show More </Link> </Typography.Title>
        </div>

        <Cryptocurrencies simplified={true} />

        <div className='home-heading-container'>
          <Typography.Title level={2} className='home-title'> Latest Crypto News </Typography.Title>
          <Typography.Title level={3} className='Show-more'> <Link to='/news'> Show More </Link>  </Typography.Title>
        </div>

        <News simplified/>
    </>
  )
}

export default Homepage