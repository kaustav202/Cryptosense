import React, { useState } from 'react';
import millify from 'millify';
import { Link } from 'react-router-dom';
import { Card, Row, Col, Input} from 'antd';
import { useGetCryptosQuery } from '../services/CryptoApi';
import { useEffect } from 'react';

const Cryptocurrencies = props => {

  let lim;

  props.simplified? lim = 10: lim=100;

  const { data: cryptosList, isFetching } = useGetCryptosQuery(lim);

  const [cryptos, setCryptos ] =  useState(cryptosList?.data?.coins);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {

      const filteredData = cryptosList?.data?.coins.filter((coin)=> coin.name.toLowerCase().includes(searchTerm.toLowerCase()))
      setCryptos(filteredData);

    },[cryptosList, searchTerm]);

  console.log(cryptos);

  if(isFetching) return 'Loading...';
  
  return (

    <>
    
    { !props.simplified? (<div className='search-crypto'>
            <input  placeholder='search-cryptocurrency' onChange={(e)=> setSearchTerm(e.target.value)}/>
     </div>): ''}


      <Row gutter={[22,16]} className='crypto-card-container'>
        
        {cryptos?.map(

          (item) => {
            return (
            <Col xs={24} sm={12} lg={6} className='crypto-card' key={item.uuid}>
              <Link to={`crypto/${item.uuid}`}>
                <Card title={`${item.rank}. ${item.name}`}
                      extra={<img className='crypto-image' src={item.iconUrl} /> }
                      hoverable
                >
                  <p> Price: {millify(item.price)} </p>
                  <p> Market Cap: {millify(item.marketCap)} </p>
                  <p> Daily Change: {millify(item.change)}% </p>
                </Card>
              </Link>
            </Col>
            );
          }
        )}
      </Row>
      </>
  )
}

export default Cryptocurrencies