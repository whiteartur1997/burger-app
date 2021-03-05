import React, { Component } from "react";
import { BuildControls } from "./BuildControls/BuildControls";
import { Burger } from "./Burger/Burger";

export enum IngredientPrice {
  salad = 0.5,
  cheese = 0.8,
  bacon = 1,
  meat = 1.5
}


export type IngredientsName = "meat" | "cheese" | "salad" | "bacon"; 

export type IngredientsType = {
  salad?: number
  meat?: number
  cheese?: number
  bacon?: number
}

type BurgerBuilderStateType = {
  ingredients: IngredientsType
  totalPrice: number
}

export class BurgerBuilder extends Component<{}, BurgerBuilderStateType> {

  state: BurgerBuilderStateType = {
    ingredients: {
      salad: 0,
      meat: 0,
      cheese: 0,
      bacon: 0
    },
    totalPrice: 4
  }

  addIngredientHandler = (type: IngredientsName) => {
    debugger
    const oldValue =  this.state.ingredients[type];
    const newValue = oldValue + 1;
    const updatedIngredients = {
      ...this.state.ingredients,
      [type]: newValue
    };
    const updatedPrice = this.state.totalPrice + IngredientPrice[type];
    this.setState({
      ingredients: updatedIngredients,
      totalPrice: updatedPrice
    })
  }

  removeIngredientHandler = (type: IngredientsName) => {
   
  }

  render() {
    return (
      <>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls addIngredient={this.addIngredientHandler} />
      </>
    )
  }
}