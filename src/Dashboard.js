import React, { useState } from 'react';
import { Route, Switch, Link, useRouteMatch } from 'react-router-dom';
import './Dashboard.css';

import Warehouse from './components/Warehouse';
import Menu from './components/Menu';
import Category from './components/Category';

function DashboardMenu() {
  return (
    <div className="ui left fixed vertical menu">
      <div className="item">
        <img className="ui medium image" src="https://media.discordapp.net/attachments/706276646205915208/738279276012634112/unknown.png" />
      </div>
      <a className="item" href={'/dashboard/'}><p><i style={{marginRight: "8px"}} className="home icon"/>Inicio</p></a>
      <div className="item">
        <div className="header"><i style={{marginRight: "8px"}} className="tags icon"/>Productos</div>
        <div className="menu">
          <a className="item" style={{marginLeft: "24px"}} href={'/dashboard/categories'}>Categorías</a>
        </div>
      </div>
      <a className="item" href={'/dashboard/applicants'}><p><i style={{marginRight: "8px"}} className="user plus icon"/>Postulantes</p></a>
      <a className="item" href={'/dashboard/projects'}><p><i style={{marginRight: "8px"}} className="folder open icon"/>Proyectos</p></a>
      <div className="item">
        <div className="header"><i style={{marginRight: "8px"}} className="tags icon"/>Inventario</div>
        <div className="menu">
          <a className="item" style={{marginLeft: "24px"}} href={'/dashboard/warehouse'}>Almacenes</a>
          <a className="item" style={{marginLeft: "24px"}} href={'/dashboard/products'}>Reporte de Productos</a>
          <a className="item" style={{marginLeft: "24px"}} href={'/dashboard/materials'}>Reporte de Materiales</a>
        </div>
      </div>
      <a className="item" href={'/dashboard/sales'}><p><i style={{marginRight: "8px"}} className="chart line icon"/>Ventas</p></a>
      <a className="item" href={'/dashboard/quotes'}><p><i style={{marginRight: "8px"}} className="file alternate icon"/>Cotizaciones</p></a>
      <a className="item" href={'/dashboard/users'}><p><i style={{marginRight: "8px"}} className="users icon"/>Usuarios</p></a>
      <a className="item" href={'/login'}><p><i style={{marginRight: "8px"}} className="logout icon"/>Cerrar Sesión</p></a>
    </div>
  )
}

function Dashboard() {
  const [menuOpen, setMenuOpen] = useState(true);
  const [optionsOpen, setOptionsOpen] = useState(true);

  let match = useRouteMatch();
  return (
      <div className="dashboard">
        {/* Left Content */}
        {menuOpen && <DashboardMenu />}
        <div className="dashboard-content" style={{paddingLeft: menuOpen? "210px" : "0", paddingRight: optionsOpen? "210px" : "0"}}>
          <div className="togleIcons">
            <i className="list icon menuTogleIcon" onClick={() => setMenuOpen(!menuOpen)}/>
            <i className="list icon menuTogleIcon" onClick={() => setOptionsOpen(!optionsOpen)}/>
          </div>
          <Switch>
            <Route exact path={`${match.path}/`}>
              <h4 className="ui horizontal divider header">
                <i className="home icon"></i>
                Inicio
              </h4>
              <img className="ui image" src="https://cdn.discordapp.com/attachments/706276646205915208/738286359588110446/unknown.png" />
              <Menu />
            </Route>
            <Route exact path={`${match.path}/categories`}>
              <h4 className="ui horizontal divider header">
                <i className="home icon"></i>
                Categorías
              </h4>
              <Category />
            </Route>
            <Route path={`${match.path}/applicants`}>
              <h4 className="ui horizontal divider header">
                <i className="user plus icon"></i>
                Postulantes
              </h4>
              <button className="ui button">
                <i className="icon user"></i>
                Añadir Postulante
              </button>
              <table className="ui selectable celled table">
                <thead>
                  <tr>
                    <th>CV</th>
                    <th>Nombres</th>
                    <th>DNI</th>
                    <th>Celular</th>
                    <th>Correo</th>
                    <th>Fecha de Reunión</th>
                    <th>Estado</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><i className="file icon"/>Arevalo.pdf</td>
                    <td>Edwin William Arévalo Sermeño</td>
                    <td>73612521</td>
                    <td>963937997</td>
                    <td>edwin.arevalo@tecsup.edu.pe</td>
                    <td>Lunes 3 de Agosto del 2020 14:00</td>
                    <td>Pendiente</td>
                  </tr>
                  <tr className="positive">
                    <td><i className="file icon"/>Guerrero.pdf</td>
                    <td>Federico Alonso Guerrero Gomez</td>
                    <td>70194862</td>
                    <td>946875016</td>
                    <td>falonso@gmail.com</td>
                    <td>Jueves 30 de Julio del 2020 9:00</td>
                    <td>Aprobado</td>
                  </tr>
                  <tr className="negative">
                    <td><i className="file icon"/>Gonzales.pdf</td>
                    <td>Fernanda Beatriz Gonzales Figeroa</td>
                    <td>73094648</td>
                    <td>946168498</td>
                    <td>fbeatriz@hotmail.com</td>
                    <td>Jueves 30 de Julio del 2020 8:00</td>
                    <td>Rechazada</td>
                  </tr>
                </tbody>
              </table>
              <div className="ui segment">
                <form className="ui form">
                  <h4 className="ui dividing header">Programar Entrevista de Postulante</h4>
                  <div className="field">
                    <label>Nombre</label>
                    <div className="two fields">
                      <div className="field">
                        <input type="text" placeholder="Nombres" />
                      </div>
                      <div className="field">
                        <input type="text" placeholder="Apellidos" />
                      </div>
                    </div>
                    <div className="three fields">
                      <div className="field">
                        <input type="number" placeholder="DNI" />
                      </div>
                      <div className="field">
                        <input type="number" placeholder="Celular" />
                      </div>
                      <div className="field">
                        <input type="email" placeholder="Correo" />
                      </div>
                    </div>
                    <div className="field">
                      <input type="datetime-local" placeholder="Apellidos" />
                    </div>
                  </div>
                  <button class="ui button" type="submit">Registar</button>
                </form>
              </div>
            </Route>
            <Route path={`${match.path}/projects`}>
              <h4 className="ui horizontal divider header">
                <i className="folder open icon"></i>
                Proyectos
              </h4>
              <div className="ui four column grid">
                <div className="column">
                  <img className="ui rounded image" src="https://cdn.discordapp.com/attachments/706276646205915208/738331839776948295/unknown.png" />
                </div>
                <div className="column">
                  <img className="ui rounded image" src="https://cdn.discordapp.com/attachments/706276646205915208/738333058524250122/unknown.png" />
                </div>
              </div>
              <div className="ui blue active progress">
                <div className="bar" style={{width: "16.66%", background: "#6573c3"}}>
                  <div className="progress"></div>
                </div>
                <div className="label">En proceso...</div>
              </div>
              <div className="ui four column grid">
                <div className="column">
                  <div className="ui top attached tabular menu">
                    <div className="active item">To Do</div>
                  </div>
                  <div className="ui bottom attached active tab segment">
                    <div className="ui styled fluid accordion">
                      <div className="title">
                        <i className="dropdown icon"></i>
                        Enviar piezas de camisa a Ojal y Botón.
                      </div>
                      <div className="content">
                        <div className="ui two column grid">
                          <div className="column">
                            <div className="author">
                              <i className="clock outline icon"></i> 5h
                            </div>
                          </div>
                          <div className="column">
                            <div className="author">
                              <img className="ui avatar image" src="https://semantic-ui.com/images/avatar/small/matt.jpg" /> Matt
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="title">
                        <i className="dropdown icon"></i>
                        Pegar cortes de Pantalón
                      </div>
                      <div className="content">
                        <div className="ui segment">En proceso...</div>
                        <div className="ui two column grid">
                          <div className="column">
                            <div className="author">
                              <i className="clock outline icon"></i> 5h
                            </div>
                          </div>
                          <div className="column">
                            <div className="author">
                              <img className="ui avatar image" src="https://semantic-ui.com/images/avatar/small/matt.jpg" /> Matt
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="title">
                        <i className="dropdown icon"></i>
                        Comprar Botones
                      </div>
                      <div className="content">
                        <div className="ui segment">En proceso...</div>
                        <div className="ui two column grid">
                          <div className="column">
                            <div className="author">
                              <i className="clock outline icon"></i> 5h
                            </div>
                          </div>
                          <div className="column">
                            <div className="author">
                              <img className="ui avatar image" src="https://semantic-ui.com/images/avatar/small/matt.jpg" /> Matt
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <h4 className="ui horizontal divider header">+ Añada una Tarjeta</h4>
                  </div>
                </div>
                <div className="column">
                  <div className="ui top attached tabular menu">
                    <div className="active item">Doing</div>
                  </div>
                  <div className="ui bottom attached active tab segment">
                    <div className="ui styled fluid accordion">
                      <div className="title">
                        <i className="dropdown icon"></i>
                        Cortar piezas de Camisa
                      </div>
                      <div className="content">
                        <div className="ui segment">En proceso...</div>
                        <div className="ui two column grid">
                          <div className="column">
                            <div className="author">
                              <i className="clock outline icon"></i> 5h
                            </div>
                          </div>
                          <div className="column">
                            <div className="author">
                              <img className="ui avatar image" src="https://semantic-ui.com/images/avatar/small/matt.jpg" /> Matt
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <h4 className="ui horizontal divider header">+ Añada una Tarjeta</h4>
                  </div>
                </div>
                <div className="column">
                  <div className="ui top attached tabular menu">
                    <div className="active item">Done</div>
                  </div>
                  <div className="ui bottom attached active tab segment">
                    <div className="ui styled fluid accordion">
                      <div className="title">
                        <i className="dropdown icon"></i>
                        Comprar tela algodón 20/1
                      </div>
                      <div className="content">
                        <div className="ui segment">Finalizado.</div>
                        <div className="ui two column grid">
                          <div className="column">
                            <div className="author">
                              <i className="clock outline icon"></i> 5h
                            </div>
                          </div>
                          <div className="column">
                            <div className="author">
                              <img className="ui avatar image" src="https://semantic-ui.com/images/avatar/small/matt.jpg" /> Matt
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <h4 className="ui horizontal divider header">+ Añada una Tarjeta</h4>
                  </div>
                </div>
                <div className="column">
                  <div className="ui top attached tabular menu">
                    <div className="active item">Stop</div>
                  </div>
                  <div className="ui bottom attached active tab segment">
                    <div className="ui styled fluid accordion">
                      <div className="title">
                        <i className="dropdown icon"></i>
                        Cortar Piezas de Pantalón
                      </div>
                      <div className="content">
                        <div className="ui segment">Faltan 10m de tela azul marino.</div>
                        <div className="ui two column grid">
                          <div className="column">
                            <div className="author">
                              <i className="clock outline icon"></i> 5h
                            </div>
                          </div>
                          <div className="column">
                            <div className="author">
                              <img className="ui avatar image" src="https://semantic-ui.com/images/avatar/small/matt.jpg" /> Matt
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <h4 className="ui horizontal divider header">+ Añada una Tarjeta</h4>
                  </div>
                </div>
              </div>
              <div className="ui four column grid">
                <div className="column">
                  <img className="ui image" src="https://cdn.discordapp.com/attachments/706276646205915208/738337687815061585/unknown.png" />
                  <br/>
                  <img className="ui image" src="https://cdn.discordapp.com/attachments/706276646205915208/738340107454513172/unknown.png" />
                </div>
              </div>
            </Route>
            <Route path={`${match.path}/warehouse`}>
              <h4 className="ui horizontal divider header">
                <i className="tags icon"></i>
                Almacenes
              </h4>
              <Warehouse />
            </Route>
            <Route path={`${match.path}/sales`}>
              <h4 className="ui horizontal divider header">
                <i className="chart line icon"></i>
                Ventas
              </h4>
              <div className="ui segment">
                <img className="ui image" src="https://cdn.discordapp.com/attachments/706276646205915208/738285603552231495/unknown.png" />
              </div>
              <div className="ui two column grid">
                <div className="column">
                  <div className="ui segment">
                    <img className="ui image" src="https://cdn.discordapp.com/attachments/706276646205915208/738284842835247175/unknown.png" />
                  </div>
                </div>
                <div className="column">
                  <div className="ui segment">
                    <img className="ui image" src="https://cdn.discordapp.com/attachments/706276646205915208/738285508701978664/unknown.png" />
                  </div>
                </div>
              </div>
              <div className="ui segment">
                <img className="ui image" src="https://cdn.discordapp.com/attachments/706276646205915208/738313022057218088/unknown.png" />
              </div>
            </Route>
            <Route path={`${match.path}/quotes`}>
              <h4 className="ui horizontal divider header">
                <i className="file alternate icon"></i>
                Cotizaciones
              </h4>
              <img className="ui image" src="https://cdn.discordapp.com/attachments/706276646205915208/738319694603485224/unknown.png" />
              <br/>
              <div className="ui icon input">
                <input type="text" placeholder="Buscar..."/>
                <i className="search icon"></i>
              </div>
              <table className="ui green table">
                <thead>
                  <tr>
                    <th>Producto</th>
                    <th>Cantidad</th>
                    <th>Precio</th>
                    <th>Descuento</th>
                    <th>Importe</th>
                    <th>Quitar</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Pantalón Jogger</td>
                    <td>8.00</td>
                    <td>S/. 40.00</td>
                    <td>S/. 60.00</td>
                    <td>S/. 260.00</td>
                    <td><i className="trash icon" /></td>
                  </tr>
                  <tr>
                    <td colspan="4" className="right aligned">Total</td>
                    <td>S/. 260.00</td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
              <div class="ui buttons right floated">
                <button class="ui button">Cancelar</button>
                <div class="or" data-text="o"></div>
                <button class="ui positive button">Guardar</button>
              </div>
              <div className="ui top attached tabular menu">
                <div className="active item">
                  Cotizaciones Realizadas
                  <div class="floating ui circular olive label">3</div>
                </div>
              </div>
              <div className="ui bottom attached active tab segment">
                <table class="ui olive table">
                  <thead>
                    <tr>
                      <th>Fecha</th>
                      <th>Correlativo</th>
                      <th>A nombre de...</th>
                      <th>Tipo de Pago</th>
                      <th>Entrega</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>29/07/2020 18:12</td>
                      <td>COT00000003</td>
                      <td>Vilca Kohama Andy Oshiro Leoncio</td>
                      <td>CRÉDITO</td>
                      <td>INMEDIATA</td>
                      <td>S/. 135.00</td>
                    </tr>
                    <tr>
                      <td>29/07/2020 17:48</td>
                      <td>COT00000002</td>
                      <td>Anchillo Sanchez Diego Sebastián</td>
                      <td>CONTADO</td>
                      <td>PEDIDO</td>
                      <td>S/. 250.00</td>
                    </tr>
                    <tr>
                      <td>28/07/2020 10:14</td>
                      <td>COT00000001</td>
                      <td>Gave Balarezo Gianluca</td>
                      <td>CONTADO</td>
                      <td>INMEDIATA</td>
                      <td>S/. 355.00</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Route>
            <Route path={`${match.path}/users`}>
              <h4 className="ui horizontal divider header">
                <i className="home icon"></i>
                Usuarios
              </h4>
              <table className="ui selectable celled table">
                <thead>
                  <tr>
                    <th>Nombres</th>
                    <th>DNI</th>
                    <th>Celular</th>
                    <th>Correo</th>
                    <th>Dirección</th>
                    <th>Cargo</th>
                    <th>Estado</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="positive">
                    <td>Leonardo Francisco Curaca Sucapuca</td>
                    <td>70183830</td>
                    <td>943050013</td>
                    <td>leonardocuraca4@gmail.com</td>
                    <td>Daniel A. Carrión 173</td>
                    <td>Supervisión</td>
                    <td>Activo</td>
                  </tr>
                  <tr>
                    <td>Gerardo Alfonso Rojas Lopez</td>
                    <td>70524961</td>
                    <td>946021538</td>
                    <td>rlgerardo@gmail.com</td>
                    <td>Av. Las Acacias 134 - Chaclacayo</td>
                    <td>Corte y Confección</td>
                    <td>Activo</td>
                  </tr>
                </tbody>
              </table>
              <div className="ui top attached tabular menu">
                <div className="active item">Tareas</div>
              </div>
              <div className="ui bottom attached active tab segment">
                <div className="ui four column grid">
                  <div className="column">
                    <div className="ui styled fluid accordion">
                      <div className="title">
                        <i className="dropdown icon"></i>
                        Entregar piezas a Ojal y Botón
                      </div>
                      <div className="content">
                        <div className="ui segment">En proceso...</div>
                        <div className="ui two column grid">
                          <div className="column">
                            <div className="author">
                              <i className="clock outline icon"></i> 5h
                            </div>
                          </div>
                          <div className="column">
                            <div className="author">
                              <img className="ui avatar image" src="https://semantic-ui.com/images/avatar/small/matt.jpg" /> Matt
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="column">
                    <div className="ui styled fluid accordion">
                      <div className="title">
                        <i className="dropdown icon"></i>
                        Entregar pedido EP00000002
                      </div>
                      <div className="content">
                        <div className="ui segment">En proceso...</div>
                        <div className="ui two column grid">
                          <div className="column">
                            <div className="author">
                              <i className="clock outline icon"></i> 5h
                            </div>
                          </div>
                          <div className="column">
                            <div className="author">
                              <img className="ui avatar image" src="https://semantic-ui.com/images/avatar/small/matt.jpg" /> Matt
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="column">
                    <div className="ui styled fluid accordion">
                      <div className="title">
                        <i className="dropdown icon"></i>
                        Revisar limpiado de prendas
                      </div>
                      <div className="content">
                        <div className="ui segment">En proceso...</div>
                        <div className="ui two column grid">
                          <div className="column">
                            <div className="author">
                              <i className="clock outline icon"></i> 5h
                            </div>
                          </div>
                          <div className="column">
                            <div className="author">
                              <img className="ui avatar image" src="https://semantic-ui.com/images/avatar/small/matt.jpg" /> Matt
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Route>
          </Switch>
        </div>
        {/* Right Content */}
        {optionsOpen && <DashboardOptions />}
      </div>
  );
}

function DashboardOptions() {
  return (
    <div className="ui right fixed vertical menu">
      <div className="item">
        <h4 class="ui header">Otras opciones</h4>
      </div>
      <a className="item">Features</a>
      <a className="item">Testimonials</a>
      <a className="item">Sign-in</a>
    </div>
  )
}

export default Dashboard;
