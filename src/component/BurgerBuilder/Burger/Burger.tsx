import { IngredientsType } from '../BurgerBuilder';
import classes from './Burger.module.css';
import { hasKey } from './../../../utils/utils-for-ts';
import { BurgerIngredient } from './BurgerIngredient/BurgerIngredient';
import React, { ReactNode } from 'react';

type BurgerPropsType = {
  ingredients: IngredientsType
}

export const Burger: React.FC<BurgerPropsType> = (props) => {

  const ingredients = Object.keys(props.ingredients)
    .map((ing) => {
      if (hasKey(props.ingredients, ing)) {
        return [...Array(props.ingredients[ing])]
          .map((_, index) => {
            return <BurgerIngredient key={ing + index} type={ing} />
          })
      }
    })
    .reduce((arr: ReactNode[], el) => {
      return arr.concat(el)
    }, [])

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      { ingredients.length ? ingredients : <p>Please, add some ingredients</p>}
      <BurgerIngredient type="bread-bottom" />
    </div>
  )
}