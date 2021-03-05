import { IngredientsName } from '../../BurgerBuilder'
import classes from './BuildControl.module.css'

type BuildControlPropsType = {
    addIngredient: () => void
    label: string
}

export const BuildControl:React.FC<BuildControlPropsType> = (props) => {


    return(
        <div className={classes.BuildControl}>
            <div className={classes.Label}>{props.label}</div>
            <button className={classes.Less}>Less</button>
            <button onClick={props.addIngredient} className={classes.More}>More</button>
        </div>
    )
}