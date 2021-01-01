import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import InventoryTable from './table';
import CreateWarehouse from './CreateWarehouse';
import WarehouseList from './WarehouseList';
import InventoryOverview from './InventoryOverview';
import ProductList from './ProductList';
import ProductVariantList from './ProductVariantList';
import ProductCreate from './ProductCreate';

export default function Inventory() {

  let { path } = useRouteMatch();
  return (
    <div>
      <div className="ui header"></div>
      <h4 className="ui horizontal divider header">
        <i className="tags icon"></i>
        Inventario
      </h4>
      <Switch>
        <Route exact path={`${path}`}>
          <InventoryOverview />
        </Route>
        <Route exact path={`${path}/warehouse`}>
          <WarehouseList />
        </Route>
        <Route exact path={`${path}/warehouse/create`}>
          <CreateWarehouse />
        </Route>
        <Route exact path={`${path}/warehouse/:warehouse_id/products`}>
          <InventoryTable />
        </Route>
        <Route exact path={`${path}/product`}>
          <ProductList />
        </Route>
        <Route exact path={`${path}/product/create`}>
          <ProductCreate />
        </Route>
        <Route exact path={`${path}/product/:product_id/variant`}>
          <ProductVariantList />
        </Route>
      </Switch>
    </div>
  )
}
