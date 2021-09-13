import appCSS from './CSS/app.css'
import React, { useState, useEffect } from 'react';
import RecipeList from './RecipeList'
import RecipeEdit from './RecipeEdit';

export const RecipeContext = React.createContext()

function App() {
  const [selectedRecipeId, setSelectedRecipeId] = useState()
  const [recipes, setRecipes] = useState(sampleRecipes)
  const selectedRecipe = recipes.find(recipe => recipe.id === selectedRecipeId)

const recipeContextValue = {
  handleRecipeAdd,
  handleRecipeDelete,
  handleRecipeSelect,
  handleRecipeChange
}

function handleRecipeSelect(id) {
  setSelectedRecipeId(id) 
}

  function handleRecipeAdd() {
    const newRecipe = {
      id: Date.now().toString(),
      name: 'New',
      servings: 1,
      cookTime: '1:00',
      instructions: 'Instr.',
      ingredients: [
        {id: Date.now().toString(), name: 'Name', amount: '1 Tbs'}
      ]
    }
  
    setRecipes([...recipes, newRecipe])
  }

  function handleRecipeChange(id, recipe) {
    const newRecipes = [...recipes] 
    const index = newRecipes.findIndex(r => r.id === id) 
    newRecipes[index] = recipe 
    setRecipes(newRecipes)
  }

  function handleRecipeDelete(id) {
    setRecipes(recipes.filter(recipe => recipe.id !== id))
  }


  return (
    <RecipeContext.Provider value={recipeContextValue}> 
    <div>
      <h1>Recipe List Menu </h1>

      <RecipeList recipes={recipes} />

      {selectedRecipe && <RecipeEdit recipe={selectedRecipe} />}

    </div>
    </RecipeContext.Provider>
  ) 

}



const sampleRecipes = [
  {
    id: 1,
    name: 'Plain Chicken',
    servings: 3,
    cookTime: '1:45',
    instructions: "1. Put salt on chicken\n2. Put chicken in oven\n3. Eat chicken",
    ingredients: [
      {
        id: 1, 
        name: 'Chicken',
        amount: '2 pounds'
      },
      {
        id: 2,
        name: 'Salt',
        amount: '1 Tbs'
      }
    ]
  },
  {
    id: 2,
    name: 'Plain Pork', 
    servings: 5,
    cookTime: '0:45',
    instructions: "1. Put paprika on pork\n2. Put pork in oven\n3. Eat pork",
    ingredients: [
      {
        id: 1,
        name: 'Pork', 
        amount: '3 pounds'
      }, 
      {
        id: 2,
        name: 'Paprika',
        amount: '2 Tbs'
      }
    ]
    
  }

]















export default App;



// Local Storage w/ Use Effect Hook 
//const LOCAL_STORAGE_KEY = 'cookingWithReact.recipes'
// useEffect(() => {
//   const recipeJSON = localStorage.getItem(LOCAL_STORAGE_KEY)
//   if (recipeJSON != null) setRecipes(JSON.parse(recipeJSON))
// }, [])
// useEffect(() => {
//   localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(recipes))
// }, [recipes]) 