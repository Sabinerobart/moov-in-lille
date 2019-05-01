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
import favoris from "../pictures/icone-favoris.png";

class NavbarFull extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      isRightPanelOpen: false,
      identity: "visiteur",
      myId: "S'identifier"
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
    this.setState({
      myId: this.state.identity
    });
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
        <Navbar color="light" light expand="sm" className="pr-md-5">
          <NavbarBrand href="/">
            <img className="logo" src={logo} alt="logo" />
            <h1 className="accroche"> Trouvez votre V'Lille en 1 clic !</h1>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem className="iconNav m-2 my-md-0 p-3">
                <form onSubmit={this.submitForm}>
                  <div className="form-data">
                    <input
                      type="text"
                      id="identity"
                      name="identity"
                      onChange={this.onChange}
                      value={this.state.identity}
                      className="col-4 col-sm-9"
                    />
                    <button
                      type="submit"
                      value="OK"
                      className="col-1 col-sm-2 mx-2 okbutton p-0"
                    >
                      OK
                    </button>
                    <br />
                    <label htmlFor="lastname" className="lastname">
                      {this.state.myId === "S'identifier"
                        ? this.state.myId
                        : `Bonjour, ${this.state.myId}`}
                    </label>
                  </div>
                </form>
              </NavItem>
              <NavItem className="iconNav m-2 my-md-0 p-3">
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
