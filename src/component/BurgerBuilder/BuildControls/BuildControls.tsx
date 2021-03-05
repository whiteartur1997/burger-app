import React from 'react';
import { IngredientsName } from '../BurgerBuilder';
import { BuildControl } from './BuildControl/BuildControl';
import classes from './BuildControls.module.css';

type BuildControlsPropsType = {
    addIngredient: (type: IngredientsName) => void
}

export const controls = [
    { label: "Salad", type: "salad" },
    { label: "Meat", type: "meat" },
    { label: "Bacon", type: "bacon" },
    { label: "Cheese", type: "cheese" },
]

export const BuildControls:React.FC<BuildControlsPropsType> = (props) => <div className={classes.BuildControls}>
    {controls.map(c => {
        return <BuildControl 
            key={c.label} 
            label={c.label}
            addIngredient={() => props.addIngredient(c.type as IngredientsName)} />
    }
    )}
</div>