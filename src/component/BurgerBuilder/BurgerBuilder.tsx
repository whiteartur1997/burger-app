import React, { Component } from "react";
import { Burger } from "./Burger/Burger";

export class BurgerBuilder extends Component {
  render() {
    return (
      <>
        <Burger />
        <div>Build controls</div>
      </>
    )
  }
}