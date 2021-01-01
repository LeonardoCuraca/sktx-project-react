import React, { useState } from 'react';
import ProductService from '../../Services/product-service';
import { useParams } from "react-router-dom";

export default function InventoryTable() {

  let { product_id } = useParams();

  const [variants, setVariants] = useState([]);

  const getVariants = React.useCallback(async () => {
      ProductService.getVariantByProduct(product_id)
      .then(data => {
        setVariants(data.list);
      })
  }, [product_id])

  React.useEffect(() => {
    getVariants()
      window['externalDropdownTrigger']()
  }, [getVariants])

  return (
    <div className="">
      <table className="ui table" style={{borderTop: ".2em solid"}}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Producto</th>
            <th>Talla</th>
            <th>Color</th>
            <th colSpan="2" className="center aligned">Acciones</th>
          </tr>
        </thead>
        <tbody>
            {
                variants.map(variant => {
                return <tr>
                    <td>{variant.productVariantId}</td>
                    <td>{variant.Product.productName}</td>
                    <td>{variant.Size.sizeName}</td>
                    <td>{variant.Color.colorName}</td>
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
