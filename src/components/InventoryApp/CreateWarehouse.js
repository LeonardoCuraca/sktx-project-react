import React, { useState } from 'react';
import { GithubPicker } from 'react-color';

import WarehouseService from '../../Services/warehouse-service';

export default function CreateWarehouse() {

  const newWarehouse = {
    "warehouseTypeId": 1, 
    "warehouseName": "warehouse test ",
    "warehouseTelephone": "789456321",
    "warehouseColorCard": "#18b3c0",
    "address": {
        "departmentId": 1, 
        "districtId": 1,
        "viaId": 5,
        "addressViaName": "J", 
        "addressNumber": 4,
        "addressReference": "Fachada violeta..."
    }
  }

  const [warehouseTypes, setWarehouseTypes] = useState([]);

  const getWarehouseTypes = React.useCallback(async () => {
    WarehouseService.getAllTypes()
    .then(data => {
        if (data.code === 200) {
          setWarehouseTypes(data.list);
        }
    })
}, [])

  React.useEffect(() => {
    getWarehouseTypes();
    window['externalDropdownTrigger']()
  }, [getWarehouseTypes])

  return (
    <form className="ui form segment">
      <h4 className="ui dividing header">Crear Almacén</h4>
      <div className="fields">
        <div className="ten wide field">
          <label>Nombre</label>
          <input type="text" placeholder="Nombre de Almacén"></input>
        </div>
        <div className="six wide field">
          <label>Tipo de Almacén</label>
          <div className="ui selection dropdown">
            <i className="dropdown icon" />
            <div className="default text">Tipo de Almacén</div>
            <div className="menu">
              {
                warehouseTypes.map(warehouseType => {
                    return (
                      <div key={warehouseType.warehouseTypeId} className="item" data-value={warehouseType.warehouseTypeId}>{warehouseType.warehouseTypeName}</div>
                    )
                })
              }
            </div>
          </div>
        </div>
      </div>
      <div className="fields">
        <div className="twelve wide field">
          <label>Teléfono</label>
          <input type="tel" placeholder="Número de contacto"></input>
        </div>
        <div className="four wide field">
          <label>Color</label>
          <ColorPicker/>
        </div>
      </div>
    </form>
  )
}

class ColorPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayColorPicker: false,
      colorValue: "#18b3c0"
    };
  }

  handlePickClick = () => {
    const { displayColorPicker } = this.state;
    this.setState({
      displayColorPicker: !displayColorPicker
    });
  };

  handleColorChange = color => {
    console.log(color.hex)
    this.setState({
      colorValue: color.hex
    });
  };

  render() {
    const { displayColorPicker, colorValue } = this.state;

    return (
      <div className="color-picker">
        <div onClick={this.handlePickClick} class="ui segment" style={{height: '37.8px', padding: 0, display: 'flex', cursor: 'pointer'}}>
          <div style={{backgroundColor: this.state.colorValue, height: '60%', width: '94%', margin: 'auto', borderRadius: '.28571429rem', border: '1px solid rgba(34,36,38,.15)'}}></div>
        </div>
        {displayColorPicker && (
          <div>
            <GithubPicker
              color={colorValue}
              onChange={this.handleColorChange}
              colors={['#18B3C0', '#FF6900', '#FCB900', '#7BDCB5', '#00D084', '#8ED1FC', '#0693E3', '#ABB8C3', '#EB144C', '#F78DA7', '#9900EF']}
            />
          </div>
        )}
      </div>
    );
  }
}
