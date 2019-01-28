import React, { Component } from "react";
export const data = require("../components/data/tmdb_5000_movies");
var uniqueNames = [];

class Search extends Component {
  constructor() {
    super();
    this.state = {
      search: ""
    };
  }

  updateSearch(event) {
    this.setState({ search: event.target.value });
  }

  Getname() {
    {
      data.map(movie => {
        return JSON.parse(movie.production_companies).map(single => {
          if (uniqueNames.indexOf(single.name) === -1) {
            uniqueNames.push(single.name);
          }
        });
      });
    }
  }
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.search}
          onChange={this.updateSearch.bind(this)}
        />
        <li>{data.length}</li>
        {this.Getname()}
        <li>{uniqueNames}</li>
      </div>
    );
  }
}
export default Search;
