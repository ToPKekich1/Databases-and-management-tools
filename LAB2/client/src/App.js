import React from 'react';
import Clients from './containers/Clients';
import Passport from './containers/Passport';
import Tab from 'react-bootstrap/Tab';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';

const App = () => (
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
            <Col sm={2}>
                <Nav variant="pills" className="flex-column">
                    <Nav.Item>
                        <Nav.Link eventKey="first">Passport</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="second">Clients</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Col>
            <Col sm={9}>
                <Tab.Content>
                    <Tab.Pane eventKey="first">
                        <Passport />
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                        <Clients />
                    </Tab.Pane>
                </Tab.Content>
            </Col>
        </Row>
    </Tab.Container>
);

export default App;
