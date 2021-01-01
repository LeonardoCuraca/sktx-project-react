import React, { useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import ProductService from '../../Services/product-service';

export default function WarehouseList() {

    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState();
    
    const getProducts = React.useCallback(async () => {
        ProductService.getAll()
        .then(data => {
            if (data.code === 200) {
                setProducts(data.list);
            }
        })
    }, [])

    React.useEffect(() => {
        getProducts()
    }, [getProducts])

    function openDeleteModal(productId){
        console.log(productId);
        window['showModal']();
    }

    let { url } = useRouteMatch();
    return (
        <div className="ui grid segment">
            <div className="sixteen wide column">
                <Link className="ui basic button" to={`${url}/create`}>
                    <i className="add icon" />
                    Añadir Producto
                </Link>
                <button className="ui basic button right floated">
                    <i className="clipboard list icon" />
                    Generar Reporte
                </button>
            </div>
            <div className="sixteen wide column">
                <div className="ui four stackable cards">
                    {
                        products.map(product => {
                            return (
                                <ProductCard product={product} openDeleteModal={() => openDeleteModal(product.productId)} />
                            )
                        })
                    }
                </div>
            </div>
            <div class="ui basic modal">
                <div class="ui icon header">
                    <i class="trash icon"></i>
                    Eliminar Producto
                </div>
                <div class="content">
                    <p>¿Está seguro(a) de eliminar el producto?</p>
                </div>
                <div class="actions">
                    <div class="ui red basic cancel inverted button">
                        <i class="remove icon"></i>
                        No
                    </div>
                    <div class="ui green ok inverted button">
                        <i class="checkmark icon"></i>
                        Sí
                    </div>
                </div>
            </div>
        </div>
    )
}

function ProductCard({product, openDeleteModal}) {

    let { path } = useRouteMatch();

    React.useEffect(() => {
        window['externalDropdownTrigger']();
    }, [])

    return (
        <div class="card">
            <div class="content">
                <div class="header" style={{display: 'flex', justifyContent: 'space-between'}}>
                    {product.productName}
                    <div class="ui pointing dropdown top right">
                        <i className='right floated dropdown icon'/>
                        <div class="menu" style={{margin: '0.5rem -0.5rem'}}>
                            <Link className="item" to={`${path}/${product.productId}/variant`}>
                                <i className="eye icon" style={{color: '#18b3c0'}} />
                                Revisar Variantes
                            </Link>
                            <Link className="item" to={`${path}/${product.productId}/edit`}>
                                <i className="pencil icon yellow" />
                                Editar Producto
                            </Link>
                            <div className="item" onClick={() => openDeleteModal}>
                                <i className="trash icon red" />
                                Eliminar Producto
                            </div>
                        </div>
                    </div>
                </div>
                <div className="meta">{product.ProductCategory.productCategoryName}</div>
                <div className="description">
                    {product.productDescription}
                </div>
            </div>
        </div>
    )
}