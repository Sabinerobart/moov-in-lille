import React from "react";

class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = {
      search: ""
    };
  }

  updateSearch(event) {
    this.setState({ search: event.target.value.substr(0, 20) });
  }

  handleClick(coord) {
    this.props.getCenter(coord);
  }

  render() {
    let filteredStations = this.props.stations.filter(station => {
      return (
        station.fields.nom
          .toLowerCase()
          .indexOf(this.state.search.toLowerCase()) !== -1
      );
    });

    return (
      <div className="wrapper-search">
        <div className="search-box mb-2">
          <input
            type="text"
            placeholder="Rechercher"
            value={this.state.search}
            onChange={this.updateSearch.bind(this)}
          />
          <div class="search" />
        </div>
        {this.state.search !== "" ? (
          <ul className="res">
            {filteredStations.length < 80 ? (
              filteredStations.map((station, index) => {
                return (
                  <li
                    key={index}
                    onClick={() => this.handleClick(station.fields.geo)}
                    className="res"
                  >
                    {station.fields.nom}
                  </li>
                );
              })
            ) : (
              <li className="res">Pas de résultat</li>
            )}
          </ul>
        ) : (
          <p />
        )}
      </div>
    );
  }
}

export default SearchBar;
