import React, { Component } from "react";

class Search extends Component {
  state = {
    prodComp: [],
    selectedComp: "",
    validationError: ""
  };

  componentDidMount() {
    fetch(
      "https://s3.eu-west-2.amazonaws.com/rradar-test/tmdb_5000_movies.json"
    )
      .then(response => {
        return response.json();
      })
      .then(data => {
        let prodFromData = data.map(movie => {
          return {
            value: movie.production_companies,
            display: movie.production_companies
          };
        });
        this.setState({
          prodComp: [
            { value: "", display: "Select a production company" }
          ].concat(prodFromData)
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <select
          style={selectStyle}
          value={this.state.selectedComp}
          onChange={e =>
            this.setState({
              selectedComp: e.target.value,
              validationError:
                e.target.value === ""
                  ? "You must select a production company"
                  : ""
            })
          }
        >
          {this.state.prodComp.map(movie => (
            <option key={movie.value} value={movie.value}>
              {movie.display}
            </option>
          ))}
        </select>
      </div>
    );
  }
}
const selectStyle = {
  padding: "0",
  margin: "50px",
  height: "50px",
  width: "80%"
};
export default Search;
