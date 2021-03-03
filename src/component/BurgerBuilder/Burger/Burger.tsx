import classes from './Burger.module.css';
import { BurgerIngredient } from './BurgerIngredient/BurgerIngredient';


export const Burger: React.FC<{}> = () => {

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      <BurgerIngredient type="salad" />
      <BurgerIngredient type="meat" />
      <BurgerIngredient type="bacon" />
      <BurgerIngredient type="cheese" />
      <BurgerIngredient type="bread-bottom" />
    </div>
  )
}