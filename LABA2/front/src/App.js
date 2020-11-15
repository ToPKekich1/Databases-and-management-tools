import React from 'react';
import Clients from './containers/Clients';
import Passport from './containers/Passports';
import Tab from 'react-bootstrap/Tab';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Orders from './containers/Orders';
import Products from './containers/Products';
import OrdersProducts from './containers/OrdersProducts';
import Reviews from './containers/Reviews';

const App = () => (
    <Tab.Container id="left-tabs-example" defaultActiveKey="passport">
        <Row>
            <Col sm={2}>
                <Nav variant="pills" className="flex-column">
                    <Nav.Item>
                        <Nav.Link eventKey="passport">Passport</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="clients">Clients</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="orders">Orders</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="products">Products</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="orders-products">
                            Orders-Products
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="reviews">Reviews</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Col>
            <Col sm={9}>
                <Tab.Content>
                    <Tab.Pane eventKey="passport">
                        <Passport />
                    </Tab.Pane>
                    <Tab.Pane eventKey="clients">
                        <Clients />
                    </Tab.Pane>
                    <Tab.Pane eventKey="orders">
                        <Orders />
                    </Tab.Pane>
                    <Tab.Pane eventKey="products">
                        <Products />
                    </Tab.Pane>
                    <Tab.Pane eventKey="orders-products">
                        <OrdersProducts />
                    </Tab.Pane>
                    <Tab.Pane eventKey="reviews">
                        <Reviews />
                    </Tab.Pane>
                </Tab.Content>
            </Col>
        </Row>
    </Tab.Container>
);

export default App;
