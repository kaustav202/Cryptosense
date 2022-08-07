# Cryptosense

An all in one application for tracking everything related to crypto currency and all related info at one place. Get general overview of the market, exchange rates, trading values or in-depth details about any specific cryptocurrency, in an interactive dashboard with a great UI.

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

## Project Structure

The project is structured following seperation of concerns on each level, broadly comprising of and divided into three main parts. The store is responsible for storing states and data while also providing access globally. The components section contains all the application modules which pertain to the application's UI including both representational and intelligent modules. The services section is for handling communication with 3rd party services, consuming APIs and ensuring the response is stored properly and accessible in a consistent manner.

</br>

<img width='90%' src='https://user-images.githubusercontent.com/89788120/182618243-c945a490-7ead-4e41-b554-e27b8fd2f828.png'/>



## Front-End Architecture

</br>

![Cryptosense_Architecture](https://user-images.githubusercontent.com/89788120/182631575-f0b14e3b-652e-4c91-a164-b9e61ba46760.png)

</br>

## Services

The following services are created with the help of redux and redux-toolkit for persistence and direct access of dynamic operations and data related to API requests, which allow the endpoints to be passed as objects which can then be destructured and called to get the response data by any component in the application.

### &nbsp;&nbsp; *API : coinrankingapi*

</br>

- **useGetCryptosQuery** </br>
List constaing general data about each cryptocurrencies with limit option to cap the number of crypto currencies fetched.

```javascript
    getCryptos: builder.query ({
             query: (count) => createRequest(`/coins?limit=${count}`)
        })
```
 
    
- **useGetCryptoDetailsQuery** </br>
Takes the coin id as parameter or query string in  the request url, and returns detailed info about that specific cryptocurrency.

```javascript
    getCryptoDetails:builder.query ({
             query: (coinId) => createRequest(`/coin/${coinId}`)
        })
```
    
- **useGetCryptoHistoryQuery** </br>
Object reprenting the time series mapping of any particular cryptocurrency trading price specified by the passed id and a time string.

```javascript
    getCryptoHistory: builder.query ({
       query: ({ coinId, timeperiod }) => createRequest(`coin/${coinId}/history?timePeriod=${timeperiod}`)
      })
```
        
### &nbsp;&nbsp; *API : bing-news-search*

</br>

- **useGetCryptoNewsQuery** </br>
Takes a keyword matched with cryptocurrency name and gets data of latest news aricles related to it, upto the total limit.

```javascript
 getCryptoNews: builder.query ({
           query: ({newsCategory,count}) => createRequest(`/news/search?q=${newsCategory}&count=${count}`)
      })
```


</br>

## Store

The store module in app directory serves as the application's state container and is responsible for storing and maintaining the two services' states. This allows the api services to be managed consistently and predictably.

- CryptoApi
- CryptoNewsApi

```javascript
 reducer: {
            [CryptoApi.reducerPath]: CryptoApi.reducer,
            [CryptoNewsApi.reducerPath]: CryptoNewsApi.reducer,
        }
```

## Additional Details

- [x]  Redux used to store, persist and provide state of api data and services globally.
- [x]  React Router used to render different components and implement routing without navigating to different page.
- [x]  Redux toolkit used to make API calls and create api services to be used in different components.
- [x]  Fully responsive design on all devices also adaptive components based on screen size.
- [x]  Continuos Deployment of master branch and live preview of other branches with vercel.
- [x]  Chart js library line chart component used to dynamically plot crypto currency prices.
- [x]  Fully Single Page Application with internal routing, making it fast and server independent.
