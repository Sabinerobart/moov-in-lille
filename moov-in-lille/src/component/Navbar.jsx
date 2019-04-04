import React, { Component } from 'react';
import '../style/navbar.css';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem} from 'reactstrap';
import { Button } from 'reactstrap';
import logo from '../img/logo.png';

class NavbarFull extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
      }
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
          });
      }
      render() {
        return (
            <div>
                <Navbar className="navbarFull" color="light" light expand="xs">
                    <NavbarBrand href="/"><img src={logo} className="logo" alt="logo moov'in lille"/></NavbarBrand>
                    <NavbarToggler on onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem className="boutton1">
                                <Button outline color="danger"><i className="fas fa-map-marked-alt"><br />Itinerary</i></Button>
                            </NavItem>
                            <NavItem className="boutton2">
                                <Button outline color="danger"><i className="fas fa-heart"><br />Favorites</i></Button>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>   
        );
      }
}

export default NavbarFull;