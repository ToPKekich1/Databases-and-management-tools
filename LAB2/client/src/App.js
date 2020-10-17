import React, { Component } from 'react';
import './App.css';
import { NavLink, Route, Switch, Redirect } from 'react-router-dom';
import Clients from './containers/Clients';
import Passport from './containers/Passport';

export default class App extends Component {
    render() {
        return (
            <div className="container">
                <ul className="nav d-flex justify-content-around px-5 mt-4">
                    <li className="nav-item ">
                        <NavLink
                            className="nav-link btn btn-primary"
                            to="/passport">
                            Passports
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            className="nav-link btn btn-primary"
                            to="/clients">
                            Clients
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            className="nav-link btn btn-primary"
                            to="/orders">
                            Orders
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            className="nav-link btn btn-primary"
                            to="/products">
                            Products
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            className="nav-link btn btn-primary"
                            to="/orders_products">
                            Order_Products
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            className="nav-link btn btn-primary"
                            to="/reviews">
                            Reviews
                        </NavLink>
                    </li>
                </ul>

                <Switch>
                    <Route path={'/passport'} exact component={Passport} />
                    <Route path={'/clients'} exact component={Clients} />
                    <Route path={'/orders'} exact component={''} />
                    <Route path={'/products'} exact component={''} />
                    <Route path={'/orders_products'} exact component={''} />
                    <Route path={'/reviews'} exact component={''} />

                    <Redirect to={'/'} />
                </Switch>
            </div>
        );
    }
}
