import React from 'react'

export default function RecipeIngredientEdit(props) {
 const {
  ingredient, 
  handleIngredientChange
 } = props

 function handleChange(changes) {
  handleIngredientChange(ingredient.id, { ...ingredient, ...changes })
 }
 
  return (
  <>
   <p>Name +</p>
   <input
   onInput={(e) => handleChange({name: e.target.value})}
   value={ingredient.name}
    className="inputedit" type="text" />
   <p>Amount.</p>
   <input
   onInput={(e) => handleChange({amount: e.target.value})}
   value={ingredient.amount}
    className="inputedit" type="text" />
<button className="btn-danger">&times;</button>
  </>
 )
}
