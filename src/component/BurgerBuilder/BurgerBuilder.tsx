import React, { Component } from "react";
import { Burger } from "./Burger/Burger";

export type IngredientsType = {
  salad?: number
  meat?: number
  cheese?: number
  bacon?: number
}

type BurgerBuilderStateType = {
  ingredients: IngredientsType
}

export class BurgerBuilder extends Component<{}, BurgerBuilderStateType> {

  state: BurgerBuilderStateType = {
    ingredients: {
      salad: 0,
      meat: 0,
      cheese: 0,
      bacon: 0
    }
  }

  render() {
    return (
      <>
        <Burger ingredients={this.state.ingredients} />
        <div>Build controls</div>
      </>
    )
  }
}