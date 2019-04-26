import React, { Component } from "react";
import "../App.scss";
import NavbarFull from "./NavbarFull";
import DataContainer from "./DataContainer";
import Footer from './Footer';

class FullApp extends Component {
    constructor(props) {
        super(props);
    
        this.clickItinerary = this.clickItinerary.bind(this)
        this.clickFavorites = this.clickFavorites.bind(this)
        this.state =  {
            clickItinerary: false,
            clickFavorites: false
        }
    }
    
    clickItinerary() {
        this.setState({
            clickItinerary: !this.state.clickItinerary,
            clickFavorites: false
        })
    }
    
    clickFavorites() {
        this.setState({
            clickFavorites: !this.state.clickFavorites,
            clickItinerary: false
        })
    }
    
    render() {
        return (
            <div className="App">
                <NavbarFull clickItinerary = {this.clickItinerary} clickFavorites = {this.clickFavorites}/>
                <DataContainer clickItinerary = {this.state.clickItinerary} clickFavorites = {this.state.clickFavorites}/>
                <Footer />
            </div>
        );
    }
}

export default FullApp;