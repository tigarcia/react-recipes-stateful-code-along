import React, {Component} from 'react';
import './RecipeInput.css';

class RecipeInput extends Component {
  static defaultProps = {
    onSave() {}
  }

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      instructions: "",
      ingredients: [''],
      img: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleChangeIng = this.handleChangeIng.bind(this);
    this.handleNewIngredient = this.handleNewIngredient.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeIng(e) {
    const index = Number(e.target.name.split('-')[1]);
    const ingredients = this.state.ingredients.map((ing, i) => (
      i === index ? e.target.value : ing
    ));
    this.setState({ingredients});
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  handleNewIngredient(e) {
    const {ingredients} = this.state;
    this.setState({ingredients: [...ingredients, '']});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onSave({...this.state});
    this.resetInput();
  }

  resetInput() {
    this.setState({
      title: '',
      instructions: "",
      ingredients: [''],
      img: ''
    });
  }

  render() {
    const {title, instructions, img, ingredients} = this.state;
    let inputs = ingredients.map((ing, i) => (
      <label key={`ingredient-${i}`}>{`${i+1}.`}
        <input
          type="text"
          name={`ingredient-${i}`}
          value={ing}
          placeholder=" Ingredient"
          onChange={this.handleChangeIng}/>
      </label>
    ));
    return (
      <form className='recipe-form' onSubmit={this.handleSubmit}>
        <label htmlFor='recipe-title-input'>Title</label>
        <input
          id='recipe-title-input'
          key='title'
          name='title'
          type='text'
          placeholder='title'
          value={title}
          onChange={this.handleChange}/>
        <label htmlFor='recipe-instructions-input'>Instructions</label>
        <textarea
          key='instructions'
          id='recipe-instructions-input'
          type='Instructions'
          placeholder='test'
          name='instructions'
          value={instructions}
          onChange={this.handleChange}/>
        {inputs}
        <button type="button" onClick={this.handleNewIngredient}>Add</button>
        <label htmlFor='recipe-img-input'>Image Url</label>
        <input
          id='recipe-img-input'
          type='text'
          placeholder='image url'
          name='img'
          value={img}
          onChange={this.handleChange} />
        <button type="submit">SAVE</button>
      </form>
    )
  }
}

export default RecipeInput;
