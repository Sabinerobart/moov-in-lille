import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import '../App.scss';

class ItineraryPanel extends React.Component {
    render() {
        return(
            <React.Fragment>
                <h1>Itinéraire</h1>
                <Form>
                    <FormGroup>
                        <Label for="itineraryFrom">De:</Label>
                        <Input type="input" name="itinerary" id="itineraryFrom" placeholder="Depart" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="itineraryTo">A:</Label>
                        <Input type="input" name="itinerary" id="itineraryTo" placeholder="Destination" />
                    </FormGroup>
                    <Button>Calculer</Button>
                </Form>    
            </React.Fragment>
        )
    }
}

export default ItineraryPanel;