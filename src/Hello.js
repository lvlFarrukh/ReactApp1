import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import './index.css';
function Hello(props) {

  return <div>
            <h1>Pakistan Zindabad <br/> name: <strong>{props.Firstname}</strong></h1> 
            <ul>
              <li>Pakistan</li>
              <li>Turkey</li>
              <li>Afganistan</li>
              <li>{3+7+4+9}</li>
            </ul>
  </div>
}

export default Hello;
