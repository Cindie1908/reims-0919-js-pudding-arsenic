import React from "react"
import "./ShowIngredients/ShowIngredients.css"
import Title from './Title'
import ImageBand from './ImageBand'
import ShowPateList from "./ShowIngredients/ShowPateList"
import ShowCheeseList from "./ShowIngredients/ShowCheeseList"
import ShowIngredientListPizza from "./ShowIngredients/ShowIngredientListPizza"
import './PresOfFood.css'
import {useHistory} from 'react-router-dom';


export default PresOfFood
function refreshpage(){
    window.location.reload()
}

function PresOfFood (){
    let history=useHistory()
    return(
        <div className="PresOfFood">
            <Title />
			<ImageBand />
            <h2>Votre recette de la mort :</h2>
            <ShowPateList />
            <ShowCheeseList />
            <ShowIngredientListPizza />
            <div className="orga">
                <button className="buttonBack" type="button" onClick={event=>history.push("/")}>
                    <figure>
                        <img className="goBack" src="data:image/jpeg;base64,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" alt="Flèche"></img>
                    </figure>
                </button>
                <button className="buttonRefresh" type="button" onClick={refreshpage}>
                    <figure>
                        <img className="goRefresh" src="data:image/jpeg;base64,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" alt="Retour"></img>
                    </figure>
                </button>
            </div>
        </div>
    )
}