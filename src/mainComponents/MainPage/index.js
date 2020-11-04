import React from 'react';
import './MainPage.css';
import logo from './Big_Sales-Logo.png';

export default function MainPage() {
  return (
    <div>
      <div className="ui six item secondary menu" style={{position: "absolute"}}>
        <a className="item"></a>
        <a className="item"></a>
        <a className="item"></a>
        <a className="item" style={{color: "white"}}>Editorials</a>
        <a className="item" style={{color: "white"}}>Reviews</a>
        <a className="item" style={{color: "white"}}>Upcoming Events</a>
      </div>
      <div className="MainPage__content">
        <div className="MainPage__contentLeft">
          <img src={logo} className="MainPage__logo" />
        </div>
        <div className="MainPage__contentRight">
          <h2 className="ui icon header">
            <i className="shopping bag icon" style={{color: "white"}}/>
            <div className="content" style={{color: "white"}}>
              Bienvenido
              <div className="sub header" style={{color: "white"}}>Clientes, Trabajadores y Emprendedores mejor conectados.</div>
            </div>
          </h2>
        </div>
      </div>
    </div>
  )
}
