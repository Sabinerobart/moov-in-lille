import React from 'react';
import ItineraryPanel from './ItineraryPanel';
import FavoritesPanel from './FavoritesPanel';
import '../App.scss';

class RightPanel extends React.Component {

    close = () => {
        return (this.stateRightPanel = 'right-panel-close');
    }
    
    render() {
        let stateRightPanel = this.props.clickItinerary || this.props.clickFavorites ? 'right-panel-open' : 'right-panel-close' ;
        return(
            <React.Fragment>
                {
                    this.props.clickItinerary ? 
                        <div className={stateRightPanel}>
                            <ItineraryPanel className="itinerary-panel" close = {this.close} />
                        </div>   
                        :
                        this.props.clickFavorites ? 
                        <div className={stateRightPanel}>
                            <FavoritesPanel className="favorites-panel" close = {this.close} user = {this.props.user} users = {this.props.users}/>
                        </div> 
                        : 
                        ''
                }
            </React.Fragment>
               
        );
    };
}

export default RightPanel;