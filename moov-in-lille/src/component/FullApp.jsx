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
        this.takeUser = this.takeUser.bind(this);
        this.state =  {
            clickItinerary: false,
            clickFavorites: false,
            user: 'visiteur'
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

    takeUser(usr) {
        this.setState({
            user: usr.toLowerCase(),
        })
    }
    
    render() {
        return (
            <div className="App">
                <NavbarFull clickItinerary = {this.clickItinerary} clickFavorites = {this.clickFavorites} user = {this.takeUser}/>
                <DataContainer clickItinerary = {this.state.clickItinerary} clickFavorites = {this.state.clickFavorites} identity={this.state.user}/>
                <Footer />
            </div>
        );
    }
}

export default FullApp;