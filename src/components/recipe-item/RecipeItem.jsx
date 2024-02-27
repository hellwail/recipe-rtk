import React from 'react'
import css from './RecipeItem.module.css'
import { useSelector } from 'react-redux'

import { useActions } from '../../hooks/useActions'
import { useFavorites } from '../../hooks/useFavorites'

function RecipeItem({ recipe }) {
  const { favorites } = useFavorites()
  const { toggleFavorites } = useActions()

  const isExists = favorites.some(r => r.id === recipe.id)

  return (
    <div className={css.item}>
      <img className={css.img} src={recipe.image} alt={recipe.name} />
      <h3>{recipe.name}</h3>
      <button onClick={() => toggleFavorites(recipe)}> {isExists ? 'Remove from' : 'Add to'} favorites</button>
    </div>
  )
}

export default RecipeItem