import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink} from 'reactstrap';

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
            <Navbar color="light" light expand="xs">
              <NavbarBrand href="/">Moov'in Lille</NavbarBrand>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <NavLink href="/">Itinerary</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/">Favorites</NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </Navbar>
          </div>
        );
      }
}

export default NavbarFull;