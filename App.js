// import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import Top from './Components/Top';
function App() {
  const [data, setdata] = useState([]);
      const [loading, setloading] = useState(true);
      useEffect(()=>{
          fetch('http://20.244.56.144/test/users')
          .then((response)=>response.json())
          .then((result)=>
              {
              setdata(result)
              setloading(false)
              })
          .catch((error)=>{
              console.error("Error:"+error)
              setloading(false)
          });
      },[]);
      if(loading) return <p>Loading</p>;
      return (
      <div>
          <h2>Fetch the Users</h2>
          <ul>
              {data.map((item) => (
                  <li key={item.id}>
                  <p>User{item.name}</p>
                  </li>
              ))}
          </ul>
      </div>
    );
}

export default App;
