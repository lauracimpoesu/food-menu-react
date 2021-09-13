import React, { useContext } from 'react'
import Recipe from './Recipe'
import { RecipeContext } from './App'

export default function RecipeList({recipes}) {
  const {handleRecipeAdd} = useContext(RecipeContext)

 return (
  <>
  <div>
{recipes.map(recipe => {
    return ( 
  <Recipe key={recipe.id} {...recipe} />
 )
})}
</div>
<button 
id="btn-add"
onClick={handleRecipeAdd}
><b>Add Recipe</b></button>
</>
 )
}
