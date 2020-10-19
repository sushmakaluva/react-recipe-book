import React from 'react';
import style from './recipe.module.css'

function Recipe(props) {
    return (
        <div className={style.recipe}>
            <h1>{props.title}</h1>
            <img alt="pic" src={props.image}></img>
            <p><b>Calories:</b> {props.calories}</p>
            <ul><b>Ingredients :</b>
            {props.ingredients.map(item=>
                (
                    <li>{item.text}</li>
                ))}
            </ul>
            
        </div>
    )
}


export default Recipe;