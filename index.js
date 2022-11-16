import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Card from './card';
import "tachyons";
import { robots } from './robots';

const root = ReactDOM.createRoot(document.getElementById('root'));

function names(){
  let rs = []
  for (let i = 0; i < robots.length; i++){
    rs.push(
      <Card 
      key={i} 
      id={robots[i].id} 
      names={robots[i].name} 
      username={robots[i].username}
      email={robots[i].email} />
      );
  }
  return rs;
}

root.render(
  <React.StrictMode>
    <div>
    {names()}
      {/* <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card /> */}
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
