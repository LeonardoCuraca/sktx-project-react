import React, { useState } from 'react';
import ProductService from '../../Services/product-service';

export default function InventoryOverview() {

    const [cardex, setCardex] = useState([]);

    const getCardex = React.useCallback(async () => {
        ProductService.getCardex()
        .then(data => {
            if (data.code === 200) {
                setCardex(data.list);
            }
        })
    }, [])

    React.useEffect(() => {
        getCardex()
        window['externalDropdownTrigger']()
    }, [getCardex])

    return (
        <div className="ui stackable centered grid">
            <div className="fourteen wide column">
                <table className="ui compact celled fixed table" style={{borderTop: ".2em solid #18b3c0"}}>
                    <thead>
                        <tr>
                            <th className="center aligned">ID</th>
                            <th>Almacén</th>
                            <th>Producto</th>
                            <th>Talla</th>
                            <th>Color</th>
                            <th>Movimiento</th>
                            <th>Cantidad</th>
                            <th colSpan="2" className="center aligned">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cardex.map(element => {
                                return <tr>
                                    <td className="center aligned">{element.productCardexId}</td>
                                    <td>{element.Warehouse.warehouseName}</td>
                                    <td>{element.ProductStock.ProductVariant.productId}</td>
                                    <td>{element.ProductStock.ProductVariant.Size.sizeName}</td>
                                    <td>{element.ProductStock.ProductVariant.Color.colorName}</td>
                                    <td>{element.Movement.movementName}</td>
                                    <td>{element.productQuantity}</td>
                                    <td class="selectable positive center aligned">
                                        <a href='/'><i className="eye icon" /> Visualizar</a>
                                    </td>
                                    <td class="selectable negative center aligned">
                                        <a href="/"><i className="trash icon"/> Quitar</a>
                                    </td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}