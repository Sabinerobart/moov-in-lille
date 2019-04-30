import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from "reactstrap";
import "../App.scss";
import { NavLink } from "react-router-dom";
import logo from "../img/logo.png";
import itineraire from "../pictures/icone-itineraire.png";
import favoris from "../pictures/icone-favoris.png";

class NavbarFull extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      isRightPanelOpen: false,
      identity: ""
    };
    this.onChange = this.onChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  submitForm(e) {
    e.preventDefault();
    this.props.user(this.state.identity);
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
            <h1 className="accroche"> Trouvez votre V'Lille en 1 clic !</h1>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem className="iconNav">
                <form onSubmit={this.submitForm}>
                  <div className="form-data">
                    <input
                      type="text"
                      id="identity"
                      name="identity"
                      onChange={this.onChange}
                      value={this.state.identity}
                    />
                    <button type="submit" value="OK" className="okbutton">
                      OK
                    </button>
                    <br />
                    <label htmlFor="lastname" className="lastname">
                      S'identifier
                    </label>
                  </div>
                </form>
              </NavItem>
              <NavItem className="iconNav">
                <NavLink to="/itineraire" onClick={this.props.clickItinerary}>
                  <img src={itineraire} alt="Itinéraire" className="iconeiti" />
                  <br />
                  Itinéraire
                </NavLink>
              </NavItem>
              <NavItem className="iconNav">
                <NavLink to="/favoris" onClick={this.props.clickFavorites}>
                  <img src={favoris} alt="Favoris" className="iconefav" />
                  <br />
                  Favoris
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default NavbarFull;
