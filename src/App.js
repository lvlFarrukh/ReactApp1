import React from 'react';
import logo from './logo.svg';
import './App.css';
import './hello.css';
import Hello from './Hello';

function Apps(props) {

  return <div>
            <h1>My name is {props.name}</h1>
            <h1>I am {props.age} year old</h1>
            <h1 className="ch">Alhamdullah i am a Computer Engineer</h1>
            <br/>
            <Hello Firstname={props.name}/>

        </div>


  // <div>
  //           <h3>Hi {props.name} your age is {props.age + 3}</h3>
  //           Alhamdulillah
            
  //           <h1>{props.obj.class}</h1>
  //         </div>
}

export default Apps;
