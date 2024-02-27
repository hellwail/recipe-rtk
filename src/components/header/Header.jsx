import React from 'react'
import {BsFillBookmarkHeartFill} from 'react-icons/bs'

import css from './Header.module.css'
import { useFavorites } from '../../hooks/useFavorites'

function Header() {
    const {favorites} = useFavorites()

  return (
    <header className={css.header}>
        <BsFillBookmarkHeartFill
        fontSize={22} />
        <span>{favorites.length}</span>
    </header>
  )
}

export default Header