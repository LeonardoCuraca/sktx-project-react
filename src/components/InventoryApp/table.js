import React, { useState } from 'react';
import WarehouseService from '../../Services/warehouse-service';
import { useParams } from "react-router-dom";

export default function InventoryTable() {

  let { warehouse_id } = useParams();

  const [products, setProducts] = useState([]);

  const getProducts = React.useCallback(async () => {
      WarehouseService.getAllProducts(warehouse_id)
      .then(data => {
        setProducts(data);
      })
  }, [warehouse_id])

  React.useEffect(() => {
    getProducts()
      window['externalDropdownTrigger']()
  }, [getProducts])

  return (
    <div className="">
      <table className="ui table" style={{borderTop: ".2em solid"}}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Producto</th>
            <th>Almacén</th>
            <th className="center aligned">Talla</th>
            <th className="center aligned">Cantidad</th>
            <th className="center aligned">Precio</th>
            <th colSpan="2" className="center aligned">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {
            products.map(element => {
              return <tr>
                <td>{element._id}</td>
                <td>{element.product_id}</td>
                <td>{element.warehouse_id}</td>
                <td className="center aligned">{element.stock_size}</td>
                <td className="center aligned">{element.stock_quantity}</td>
                <td className="center aligned">S/. {element.stock_price}</td>
                <td className="right aligned"><i className="eye icon" /> Visualizar</td>
                <td className="center aligned"><i className="trash icon" /> Quitar</td>
              </tr>
            })
          }
        </tbody>
        <tfoot>
          <tr>
            <th>
              <div class="ui labeled button" tabindex="0">
                <div class="ui button">
                  Total
                </div>
                <label class="ui basic label">
                  S/. 2 048.00
                </label>
              </div>
            </th>
            <th colSpan="7"></th>
          </tr>
        </tfoot>
      </table>
    </div>
  )
}
