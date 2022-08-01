# Cryptosense

An all in one application for tracking everything related to crypto currency and all related info at one place. Get general overview of the market, exchange rates, trading values or in-depth details about any specific cryptocurrency, in an interactive dashboard with a great UI.

</br>

## View Live


### 🔗💻 Vercel &nbsp;&nbsp; https://cryptosense.vercel.app/

</br>

## Features

- [x] Real Time data of specific cryptocurrency trading rates, price caps and daily change ratio.
- [x] Real Time global metadata of total markets, trade volumes, exchanges and price caps.
- [x] Line Chart plot of crypto price across given time period providing performance overview in real time.
- [x] Latest news about any particular cryptocurrency through microsoft bing news integration with the app.
- [x] Useful statistics, info, history and links to resources for all cryptocurrencies to find out more details.
- [x] Menu sidebar for navigation across different sections of the applcication at ease.


</br>

## Tech Stack

- #### React js
- #### Redux Toolkit
- #### React Router
- #### Chart js
- #### Ant Design
- #### Axios

</br>

## Architecture

![Blank document](https://user-images.githubusercontent.com/89788120/182190911-02bfecfd-6736-4347-9b79-99c4ec43a9d7.png)


## Services

The following services are created with the help of redux and redux-toolkit for direct, instantaneous access of dynamic and asynchronous operations and data, which allow the endpoints to be passed to parent as objects and it can just be destructured and called to fetch the response.

API : coinrankingapi

- **useGetCryptosQuery** </br>
List constaing general data about each cryptocurrencies with limit option to cap the number of crypto currencies fetched.</br></br>
    getCryptos: builder.query ({</br>
&nbsp;&nbsp;&nbsp;&nbsp; query: (count) => createRequest(`/coins?limit=${count}`)</br>
        })</br>
 
    
- **useGetCryptoDetailsQuery** </br>
Takes the coin id as parameter or query string in  the request url, and returns detailed info about that specific cryptocurrency.</br></br>
    getCryptoDetails:builder.query ({</br>
&nbsp;&nbsp;&nbsp;&nbsp; query: (coinId) => createRequest(`/coin/${coinId}`)</br>
        })</br>
    
- **useGetCryptoHistoryQuery** </br>
Object reprenting the time series mapping of any particular cryptocurrency trading price specified by the passed id and a time string.</br></br>
    getCryptoHistory: builder.query ({</br>
&nbsp;&nbsp;&nbsp;&nbsp; query: ({ coinId, timeperiod }) => createRequest(`coin/${coinId}/history?timePeriod=${timeperiod}`)</br>
        })</br>
        
</br>

API : bing-news-search

- **useGetCryptoNewsQuery** </br>
Takes a keyword matched with cryptocurrency name and gets data of latest news aricles related to it, upto the total limit.</br></br>
 getCryptoNews: builder.query ({</br>
&nbsp;&nbsp;&nbsp;&nbsp; query: ({newsCategory,count}) => createRequest(`/news/search?q=${newsCategory}&count=${count}`)</br>
      })</br>


</br>

## Additional Details

- [x]  Redux used to store, persist and provide state of api data and services globally.
- [x]  React Router used to render different components and implement routing without navigating to different page.
- [x]  Redux toolkit used to make API calls and create api services to be used in different components.
- [x]  Fully responsive design on all devices also adaptive components based on screen size.
- [x]  Continuos Deployment of master branch and live preview of other branches with vercel.
- [x]  Chart js library line chart component used to dynamically plot crypto currency prices.
- [x]  Fully Single Page Application with internal routing, making it fast and server independent.
