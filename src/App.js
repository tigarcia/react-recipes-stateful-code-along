import React, { Component } from 'react';
import RecipeList from './RecipeList';
import RecipeInput from './RecipeInput';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [
        {
          id: 0,
          title: "Spaghetti",
          instructions: "Open jar of Spaghetti sauce.  Bring to simmer.  Boil water.  Cook pasta until done.  Combine pasta and sauce",
          ingredients: ["pasta", "8 cups water", "1 box spaghetti"],
          img: "spaghetti.jpg",
        },
        {
          id: 1,
          title: "Milkshake",
          instructions: "Combine ice cream and milk.  Blend until creamy",
          ingredients: ["2 Scoops Ice cream", "8 ounces milk"],
          img: "http://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/5/1/0/FNM_060113-Almost-Famous-Milkshakes-Recipe_s4x3.jpg.rend.hgtvcom.616.462.suffix/1371616331513.jpeg"
        },
        {
          id: 2,
          title: "Avocado Toast",
          instructions: "Toast bread.  Slice avocado and spread on bread.  Add salt, oil, and pepper to taste.",
          ingredients: ["2 slices of bread", "1 avocado", "1 tablespoon olive oil", "1 pinch of salt", "pepper"],
          img: "avocado_toast.jpg"
        },
      ],
      nextRecipeId: 3
    };

    this.handleSave = this.handleSave.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleSave(recipe) {
    this.setState((prevState, props) => {
      const newRecipe = {id: this.state.nextRecipeId, ...recipe};
      return {
        nextRecipeId: prevState.nextRecipeId + 1,
        recipes: [...this.state.recipes, newRecipe]
      };
    });
  }

  handleDelete(id) {
    const recipes = this.state.recipes.filter(r => r.id !== id);
    this.setState({recipes});
  }

  render() {
    const {recipes} = this.state;
    return (
      <div>
        <header>
          <h2><a href="#">Recipe App</a></h2>
          <nav>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact Us</a></li>
          </nav>
        </header>
        <RecipeList
          onDelete={this.handleDelete}
          recipes={recipes}/>
        <RecipeInput onSave={this.handleSave} />
      </div>
    )
  }
}

export default App;
