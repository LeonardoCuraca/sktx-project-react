import React, { Component } from 'react';
import CategoryService from '../../Services/category-service';

export default class Categories extends Component {

  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      action: "null"
    };
  }

  componentWillMount = async () => {
    CategoryService.getAll()
    .then(data => {
      this.setState({
        categories: data
      })
    })
  }

  changeState(newState) {
    this.setState({
      action: newState
    })
  }

  render() {
    return (
      <div className="ui grid segment">
        <div className="sixteen wide column">
          <button className="ui basic button" onClick={this.changeState.bind(this, "create")}>
            <i className="add icon" />
            Añadir Almacén
          </button>
          <button className="ui basic button right floated">
            <i className="clipboard list icon" />
            Generar Reporte
          </button>
        </div>

      </div>
    )
  }
}
