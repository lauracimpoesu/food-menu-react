import React, { useContext } from 'react'
import RecipeIngredientEdit from './RecipeIngredientEdit'
import { RecipeContext } from './App'

export default function RecipeEdit({recipe}) {
  const { handleRecipeChange } = useContext(RecipeContext)

  function handleChange(changes) {
   handleRecipeChange(recipe.id, { ...recipe, ...changes })
  }

  function handleIngredientChange(id, ingredient) {
    const newIngredients = [...recipe.ingredients]
    const index = newIngredients.findIndex(i => i.id === id) 
    newIngredients[index] = recipe 
    handleChange({ingredients: newIngredients}) 
  }

 return ( 
 <div className="wholegrid">
  <div className="recipe-edit"> 
  <div className="remove">
  <button 
   className="removebtn">&times;</button>
  </div>
  <div className="changes">
  <br /><br />
   <label id="namee" htmlFor="name" className="titles">Name</label> <br />
   <input
    onInput={e => handleChange({name: e.target.value})}
    value={recipe.name}
    className="inputs" type="text" name="name" id="name" /> 
   <br /> 
   <br />
   <label className="titles" htmlFor="cookTime">Cook Time</label> <br />
   <input 
    onInput={e => handleChange({cookTime: e.target.value})}
    value={recipe.cookTime}
   className="inputs" type="text" name="cookTime" id="name" /> 
   <br /><br />
   <label className="titles" htmlFor="servings">Servings</label><br />
   <input
    onInput={e => handleChange({servings: parseInt(e.target.value) || ''})}
    value={recipe.servings}
    className="inputs" type="number" min="1" name="servings" id="name" />
   <br /><br />
   <label className="titles" htmlFor="instructions">Instructions</label><br />
   <textarea 
   onInput={e => handleChange({instructions: e.target.value})}
    name="instructions" id="instructions">
    {recipe.instructions}
    </textarea>
   
   </div>
   <br />
   <div className="grid">
   <br />
   <label className="tingr">Ingredients</label>
   </div>
   <div></div>

{recipe.ingredients.map(ingredient => (
  <RecipeIngredientEdit key={ingredient.id}
  handleIngredientChange={handleIngredientChange}
  ingredient={ingredient}
   /> 
))}

<div>
  <button className="btn-add"><b>Add Ingredient</b></button>
  </div>
  </div>
  </div>
 )
}
 