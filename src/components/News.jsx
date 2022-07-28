import React from 'react';
import { useState } from 'react';
import { Select, Typography, Row, Col, Avatar, Card } from 'antd';
import moment from 'moment';
import { useGetCryptoNewsQuery } from '../services/CryptoNewsApi';
import { useGetCryptosQuery } from '../services/CryptoApi';
import Loader from './Loader';

const demoImage = '#';

const News = (props) => {

  const [ newsCategory, setNewsCategory ] = useState('Cryptocurrency');

  const{data} = useGetCryptosQuery(100);

  const {data: cryptonews} = useGetCryptoNewsQuery({newsCategory: newsCategory, count: props.simplified? 4: 15});
  console.log('In News');

  const {Option} = Select;

  if (typeof cryptonews !== 'undefined')

  return (

    <div className='news-wrapper'> 
    <Row gutter={[24,24]}>

      {(! props.simplified && (
        <Col span={24}>
          <Select
            showSearch
            className='select-news'
            placeholder='Select a Crypto'
            optionFilterProp='children'
            onChange={(value)=> setNewsCategory(value)}
            filterOption={(input,option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >-1 }
            >
              <Option value='Cryptocurrency'> Cryptocurrency </Option>
                  {data?.data?.coins.map(coin=> <Option value={coin.name}> {coin.name} </Option> )}
            </Select>
        </Col>
      ))}

      {cryptonews?.value.map((item,i)=>{

        return (
        
          
        <Col xs={24} sm={12} lg={8} key={i}>

          <Card hoverable className='news-card'>
            <a href={item.url} target="_blank" rel="noreferrer">
              <div className='news-image-container'>
                <Typography.Title className='news-title' level={4} > {item.name} </Typography.Title>
                <img  style={{maxWidth: '200px', maxHeight: '100px'}} src={item?.image?.thumbnail?.contentUrl || demoImage } alt='news'></img>
              </div>
              <p>
                { item.description > 100 ? `${item.description.substring(0,100)}...` : item.description }
              </p>
              <div className='provider-container'>
                <div>
                  <Avatar src={item.provider[0]?.image?.thumbnail?.contentUrl || demoImage} alt=''></Avatar>
                  <Typography.Text> {moment(item.datePublished).startOf('ss').fromNow()} </Typography.Text>
                </div>
              </div>
            </a>
          </Card>
 
        </Col>
      )
        
      })}
    </Row>
    </div>
  )
}

export default News