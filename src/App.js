import React, { Component } from "react";
import "./App.css";
import { CardList } from "./components/CardList/CardList";
import { SearchField } from "./components/SearchField/SearchField";
class App extends Component {
  state = {
    monsters: [],
    searchField: "",
  };
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
      })
      .then((users) => this.setState({ monsters: users }));
  }
  searchHandler = (event) => {
    const { value } = event?.target;
    this.setState({ searchField: value });
  };
  render() {
    const { searchField, monsters } = this.state;
    const filterMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchField
          searchHandler={this.searchHandler}
          searchValue={searchField}
        />
        <CardList monsters={filterMonsters} />
      </div>
    );
  }
}

export default App;
