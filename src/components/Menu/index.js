import React, { Component } from 'react';

import Panel from '../../shared/components/Panel';

export default class Menu extends Component {
  render() {
    return (
      <div className="ui grid segment">
        <div className="ui grid">
          <div className="doubling four column row">
            <div className="column"><Panel/></div>
            <div className="column"><Panel/></div>
            <div className="column"><Panel/></div>
            <div className="column"><Panel/></div>
          </div>
          <div className="doubling four column row">
            <div className="column"><Panel/></div>
            <div className="column"><Panel/></div>
            <div className="column"><Panel/></div>
            <div className="column"><Panel/></div>
          </div>
        </div>
      </div>
    )
  }
}
