import React from "react"
import "./CocktailFilters.css"
import AlcoholFilter from "./AlcoholFilter"
import Navbar from "./Navbar"

function CocktailFilters() {
	return (
		<div id="CocktailFilters">
			<h2 className="CocktF">page de filtres pour cocktail</h2>
			<div>
			<AlcoholFilter />
			<Navbar />
			</div>
		</div>
	)
}

export default CocktailFilters
