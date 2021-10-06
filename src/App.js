import './App.css';
import React, { Component } from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Content from './components/content';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import {
  BrowserRouter as Router, Switch, Route 
} from "react-router-dom";

class App extends Component {

  render() {
    return (
      <Router>
      <div className="App">
        <Navbar bg="primary" variant="dark">
  <Container>
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="/App">Home</Nav.Link>
        <Nav.Link href="/header">Header</Nav.Link>
        <Nav.Link href="/footer">Footer</Nav.Link>
        {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="/app">Action</NavDropdown.Item>
          <NavDropdown.Item href="/footer">Another action</NavDropdown.Item>
          <NavDropdown.Item href="/header">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="/content">Separated link</NavDropdown.Item>
        </NavDropdown> */}
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
<Switch>
          <Route path="/footer">
            <Footer />
          </Route>
          <Route path="/header">
            <Header />
          </Route>
          <Route path="/" exact>
            <Content />
          </Route>
        </Switch>
      </div>
      </Router>

    );
  }
}

export default App;
