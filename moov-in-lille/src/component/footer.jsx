import React, {Component} from "react";
import { Button, ButtonGroup } from 'reactstrap';
import "../style/footer.css";

class Footer extends Component {
    render() {
  return ( 

<div>

<ButtonGroup className="footerBarre">

  <Button
    className="persoBtn"
  >
  Mentions légales 
  </Button>

  
  <Button
    className="persoBtn"
  >
  Réseaux sociaux
  </Button>

  <Button
    className="persoBtn"
  >
  Contact
  </Button>

</ButtonGroup>

</div>
  );}
}

export default Footer ;