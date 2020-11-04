import React, { Component } from 'react';
import { Route, Switch, Link, useRouteMatch } from 'react-router-dom';
import WarehouseService from '../../Services/warehouse-service';
import { Dropdown } from 'semantic-ui-react'

import InventoryTable from './table';
import CreateWarehouse from './CreateWarehouse';

import $ from 'jquery';
import load from 'little-loader';

export default class Inventory extends Component {

  constructor(props) {
    super(props);
    this.state = {
      warehouses: [],
      action: "null",
      elements: ['one', 'two', 'three'],
      color: ""
    };
  }

  componentWillMount = async () => {
    WarehouseService.getAll()
    .then(data => {
      this.setState({
        warehouses: data
      })
    })
  }

  componentDidMount() {
    window["externalDropdownTrigger"]();
  }

  selectWarehouse(warehouse) {
    WarehouseService.getAllProducts(warehouse._id)
    .then(data => {
      this.setState({
        action: "list",
        color: warehouse.warehouse_card_color,
        elements: data
      })
    })
  }

  changeState(newState) {
    this.setState({
      action: newState
    })
  }

  render() {

    const DropdownExampleDropdown = () => (
      <Dropdown text='File'>
        <Dropdown.Menu>
          <Dropdown.Item text='New' />
          <Dropdown.Item text='Open...' description='ctrl + o' />
          <Dropdown.Item text='Save as...' description='ctrl + s' />
          <Dropdown.Item text='Rename' description='ctrl + r' />
          <Dropdown.Item text='Make a copy' />
          <Dropdown.Item icon='folder' text='Move to folder' />
          <Dropdown.Item icon='trash' text='Move to trash' />
          <Dropdown.Divider />
          <Dropdown.Item text='Download As...' />
          <Dropdown.Item text='Publish To Web' />
          <Dropdown.Item text='E-mail Collaborators' />
        </Dropdown.Menu>
      </Dropdown>
    )

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
        <div className="sixteen wide column">
          <div className="ui selection dropdown">
            <input type="hidden" name="gender" />
            <i className="dropdown icon"></i>
            <div className="default text">Gender</div>
            <div className="menu">
              <div className="item" data-value="1">Male</div>
              <div className="item" data-value="0">Female</div>
            </div>
          </div>
          <div className="ui cards">
            {
              this.state.warehouses.map(warehouse => {
                var icon = "right floated box icon";
                var iconName = "Materiales"
                if (warehouse.warehouse_type == 1)
                  icon = "right floated tag icon";
                  iconName = "Productos";
                return (
                  <div className="card">
                    <div className="content">
                      <i className={icon} style={{color: warehouse.warehouse_card_color}} />
                      <div className="header" >{warehouse.warehouse_name}</div>
                      <div className="meta">{iconName}</div>
                      <div className="description">
                        <p>Teléfono: {warehouse.warehouse_phone_number}</p>
                        <p>Dirección: {warehouse.warehouse_address}</p>
                      </div>
                    </div>
                    <div className="ui bottom attached button" onClick={this.selectWarehouse.bind(this, warehouse)}>
                      <i className="eye icon" />
                      Visualizar Registros
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
        {
          this.state.action === "list" &&
          <div className="sixteen wide column">
            <InventoryTable elements={this.state.elements} color={this.state.color}/>
          </div>
        }
        {
          this.state.action === "null" &&
          <div className="sixteen wide column">
            Nada que ver aca
          </div>
        }
        {
          this.state.action === "create" &&
          <div className="sixteen wide column">
            <CreateWarehouse />
          </div>
        }
      </div>
    )
  }
}
