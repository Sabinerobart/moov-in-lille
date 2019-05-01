import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import "../App.scss";

class ItineraryPanel extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1 className="itinary-title">Itinéraire</h1>
        <Form>
          <FormGroup>
            <Label for="itineraryFrom" className="fromto">
              De :
            </Label>
            <Input
              type="input"
              name="itinerary"
              id="itineraryFrom"
              placeholder="Départ"
              className="itinaryInput"
            />
          </FormGroup>
          <FormGroup>
            <Label for="itineraryTo" className="fromto">
              À :
            </Label>
            <Input
              type="input"
              name="itinerary"
              id="itineraryTo"
              placeholder="Destination"
              className="itinaryInput"
            />
          </FormGroup>
          <Button className="buttoncalcul">Calculer</Button>
        </Form>
      </React.Fragment>
    );
  }
}

export default ItineraryPanel;
