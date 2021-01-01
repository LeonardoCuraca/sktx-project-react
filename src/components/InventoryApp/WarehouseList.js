import React, { useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import WarehouseService from '../../Services/warehouse-service';

export default function WarehouseList() {

    const [warehouses, setWarehouses] = useState([]);
    
    const getWarehouses = React.useCallback(async () => {
        WarehouseService.getAll()
        .then(data => {
            if (data.code === 200) {
                setWarehouses(data.list);
            }
        })
    }, [])

    React.useEffect(() => {
        getWarehouses()
        window['externalDropdownTrigger']()
    }, [getWarehouses])

    let { url } = useRouteMatch();
    return (
        <div className="ui grid segment">
            <div className="sixteen wide column">
                <Link className="ui basic button" to={`${url}/create`}>
                    <i className="add icon" />
                    Añadir Almacén
                </Link>
                <button className="ui basic button right floated">
                    <i className="clipboard list icon" />
                    Generar Reporte
                </button>
            </div>
            <div className="sixteen wide column">
                <div className="ui three stackable cards">
                    {
                        warehouses.map(warehouse => {
                            return (
                                <WarehouseCard key={warehouse.warehouseId} warehouse={warehouse}/>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

function WarehouseCard(props) {

    let { path } = useRouteMatch();

    const warehouse = props.warehouse;
    console.log(warehouse);

    React.useEffect(() => {
        window['externalDropdownTrigger']()
    })

    return (
        <div className="card" style={{borderLeft: '16px solid' + warehouse.warehouseColorCard}}>
            <div className="content">
                <div className="header" style={{display: 'flex', justifyContent: 'space-between'}}>
                    {warehouse.warehouseName}
                    <div class="ui pointing dropdown top right">
                        <i className={warehouse.warehouseTypeId === 1 ? 'right floated tag icon' : 'right floated box icon'} style={{color: warehouse.warehouseColorCard}}/>
                        <div class="menu" style={{margin: '0.5rem -0.5rem'}}>
                            <Link className="item" to={`${path}/${warehouse.warehouseId}/products`}>
                                <i className="eye icon" />
                                Visualizar Registros
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="meta">{warehouse.WarehouseType.warehouseTypeName}</div>
            </div>
            <div className="content">
                <div class="ui list">
                    <div class="item">
                        <i class="phone icon"></i>
                        <div class="content">
                            <div class="header">Teléfono</div>
                            <div class="description">{warehouse.warehouseTelephone}</div>
                        </div>
                    </div>
                    <div class="item">
                        <i class="map marker alternate icon"></i>
                        <div class="content">
                            <div class="header">Dirección</div>
                            <div class="description">{warehouse.Address.Via.viaName + ' ' + warehouse.Address.addressViaName + ' ' + warehouse.Address.addressNumber}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}