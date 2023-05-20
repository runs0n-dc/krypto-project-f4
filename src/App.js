import React, {useState, useEffect} from 'react';
import TableRow from './Component/TableRow.js';
// import axios from 'axios';
import './App.css';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false')
    .then(res => res.json())
    .then(data => setData(data))
    .catch(error => console.log(error));
    // async function getData() {
    //   try {
    //     let response = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false');
    //     setData(response.data);
    //   } catch(error) {
    //     console.log(error)
    //   }
    //   finally {
    //     console.log('data fetched');
    //   }
    // }
    // getData();
  }, []);
  return (
    <div className="App">
      <h1>Top 10 Cryptocurrencies</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Id</th>
            <th>Image</th>
            <th>Symbol</th>
            <th>Current Price</th>
            <th>Total Volume</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => {
            return <TableRow key={item.id} item={item} />
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
