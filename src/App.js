import React, { Component } from 'react';
import RecipeList from './RecipeList';
import RecipeInput from './RecipeInput';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: false,
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
          img: "milkshake.jpg"
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
        showForm: false,
        recipes: [...this.state.recipes, newRecipe]
      };
    });
  }

  handleDelete(id) {
    const recipes = this.state.recipes.filter(r => r.id !== id);
    this.setState({recipes});
  }

  render() {
    const {recipes, showForm} = this.state;
    return (
      <div>
        <header>
          <h2><a>Recipe App</a></h2>
          <nav>
            <li>
              <a onClick={() => this.setState({showForm: true})}>
                New Recipe
              </a>
            </li>
            <li><a>Home</a></li>
            <li><a>About</a></li>
            <li><a>Contact Us</a></li>
          </nav>
        </header>
        {showForm ?
          <RecipeInput
            onSave={this.handleSave}
            onClose={() => this.setState({showForm: false})}
          /> :
          undefined}
        <RecipeList
          onDelete={this.handleDelete}
          recipes={recipes}/>
      </div>
    )
  }
}

export default App;
