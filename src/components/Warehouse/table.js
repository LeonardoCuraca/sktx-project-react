import React, { Component } from 'react';

export default class InventoryTable extends Component {
  render() {
    return (
      <div className="">
        <table className="ui table" style={{borderTop: ".2em solid" + this.props.color}}>
          <thead>
            <tr>
              <th>Producto</th>
              <th>Categoría</th>
              <th colSpan="2" className="center aligned">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {
              this.props.elements.map(element => {
                return <tr>
                  <td>{element.product_name}</td>
                  <td>{element.product_category_id}</td>
                  <td className="right aligned"><i className="eye icon" /> Visualizar</td>
                  <td className="center aligned"><i className="trash icon" /> Quitar</td>
                </tr>
              })
            }
            <tr>
              <td className="right aligned">Total</td>
              <td colSpan="3">S/. 650.00</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}
