import React, { Component } from "react";
import SearchRecipes from "./SearchRecipes";
import "../styles/index.css";
import RecipeList from "./RecipeList";

class App extends Component {
  render() {
    return (
      <div>
        <div style={{ fontStyle: "italic", fontSize: "50px" }}>
          Recipe Finder
        </div>
        <SearchRecipes></SearchRecipes>
        <RecipeList></RecipeList>
      </div>
    );
  }
}

export default App;
