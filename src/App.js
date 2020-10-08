import React from 'react';
import './profile/Profile.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {MaterialDesign} from 'react-icons//md';
import $ from 'jquery';
import Profile from './profile/Profile';


function App() {
  function handleName() {
    return alert("IlhemHmida");
  }
  return (
    <div className="App">
      <header  className="App-header">
        <Profile Email="ilhemhmida0@gmail.com"  Phone="54475771" FullName="Hmida ilhem"  Bio="I'm 24 Years old , Passionated with web development , trying to build my carrer in this field " Profession="Automation engineer"  Adress="Tunis">
          <img  style={{ borderRadius: '5px', width : '100px', height: '100px'}} alt="User-Profile-Image" src='wejhi.jpg' alt='abc'></img>
           { handleName() }
          </Profile>
      </header>
    </div>
  );
}

export default App;