import React, { Component } from 'react';
import './Panel.css';

export default class Panel extends Component {
  render() {
    return (
      <div className="panel">
        <div className="media no-margin">
          <div className="media-body">
            <h3 className="no-margin">S/. 1000.00</h3>
            <span>CAJA</span>
          </div>
          <div className="media-right media-middle">
            <i className="home icon" style={{opacity: 0.75, fontSize: "48px", lineHeight: 1}}></i>
          </div>
        </div>
      </div>
    )
  }
}
