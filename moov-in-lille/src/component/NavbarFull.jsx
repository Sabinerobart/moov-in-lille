import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import logo from "../img/logo.png";
<<<<<<< HEAD
import itineraire from "../pictures/icone-itineraire.png";
import favoris from "../pictures/icone-favoris.png";
=======
>>>>>>> 5ab75bda465407c98ff0c3f11ee7856390f71916

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
  }

  render() {
    return (
      <React.Fragment>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">
            <img className="logo" src={logo} alt="logo" />
            <h1 className='accroche'> Trouvez votre V'Lille en 1 clic !</h1>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
<<<<<<< HEAD
              <NavItem className="iconNav">
                <NavLink href="#"><img src={itineraire} alt="Itinéraire" className="iconeiti"/><br/>
                  Itinéraire
                </NavLink>
              </NavItem>
              
              <NavItem  className="iconNav">
                <NavLink href="#"><img src={favoris} alt="Favoris" className="iconefav"/><br/>
                Favoris</NavLink>
=======
              <NavItem>
                <NavLink href="#">Itinéraire</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Favoris</NavLink>
>>>>>>> 5ab75bda465407c98ff0c3f11ee7856390f71916
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default NavbarFull;
