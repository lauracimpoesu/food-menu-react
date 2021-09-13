import React, { useContext } from 'react'
import IngredientList from './IngredientList'
import { RecipeContext } from './App'

export default function Recipe(props) {
  const { handleRecipeDelete, handleRecipeSelect } = useContext(RecipeContext)
 const {
   id, 
  name, 
  cookTime, 
  servings, 
  instructions,
  ingredients
 } = props 
 
 return ( 
 <div>
  
  <div>
   <h3> {name} </h3>
  </div>

  <div className="row">
   <span className="label">Cook Time: </span>
   <span className="value"> {cookTime} </span>
  </div>
   
  <div>
   <span className="label">Servings: </span>
   <span className="value">{servings}</span>
  </div>

  <div>
   <span className="label">Instructions:</span>
   <div className="value indented instructions">
   {instructions}
   </div>
  </div>

  <div>
   <span className="label">Ingredients:</span>
   <div className="value indented">
   <IngredientList ingredients={ingredients} />
   </div>
  </div>

  <div>
   <button
   onClick={() => handleRecipeSelect(id)}
   ><b><i> e d i t </i></b> </button>
   <button
   onClick={() => handleRecipeDelete(id)}
   ><b><i> delete </i></b></button>
  </div>

  </div> 
  )
}
