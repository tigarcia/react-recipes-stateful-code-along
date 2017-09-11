import React, {Component} from 'react';
import Recipe from './Recipe';
import './RecipeList.css';

class RecipeList extends Component {
  static defaultProps = {
    recipes: [],
    onDelete() {}
  }

  render() {
    const recipes = this.props.recipes.map(r => (
      <Recipe
        key={r.id}
        id={r.id}
        title={r.title}
        instructions={r.instructions}
        ingredients={r.ingredients}
        img={r.img}
        onDelete={this.props.onDelete}
        />
    ));
    return (
      <div className="recipe-list">
        {recipes}
      </div>
    );
  }
}

export default RecipeList;
