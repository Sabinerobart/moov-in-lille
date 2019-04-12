import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink, } from 'reactstrap';
import '../App.css';
import logo from '../img/logo.png';

class NavbarFull extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false,
          isRightPanelOpen: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    };


    render() {
        return (
            <React.Fragment>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/"><img className="logo" src={logo} alt="logo"></img></NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="#">Itinéraire</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">Favoris</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </React.Fragment>
        );
    }
};

export default NavbarFull;