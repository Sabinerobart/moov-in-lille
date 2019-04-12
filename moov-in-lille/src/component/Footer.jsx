import React, {Component} from "react";
import { Button, ButtonGroup } from 'reactstrap';
import "../style/footer.css";

class Footer extends Component {
    render() {
      return ( 

        <div>

          <ButtonGroup className="footer">

            <Button>
              Mentions légales 
            </Button>


            <Button>
              Carte du site
            </Button>

          </ButtonGroup>

        </div>
  );}
}

export default Footer ;