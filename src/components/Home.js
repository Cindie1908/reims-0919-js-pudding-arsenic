import React from "react"
import Navbar from "./Navbar"
import CocktailFilters from "./CocktailFilters"
import "./Home.css"

function Home() {
	return (
		<div className="Home">
			<Navbar />
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi porta
				orci ornare ex porta, eu mattis erat porttitor. Vestibulum facilisis
				blandit lorem et condimentum. Aenean non facilisis quam. Vestibulum eget
				eros eu velit semper euismod quis sed odio. Aliquam ac arcu id magna
				euismod placerat ac quis nulla. Aenean sit amet dolor mollis, venenatis
				risus suscipit, varius libero. Nam orci ligula, varius molestie nulla
				lobortis, eleifend varius tellus. Mauris aliquam id ante in consectetur.
				Fusce dignissim luctus justo et fringilla.
			</p>
			<h2>Sélectionner votre poison :</h2>
			<div className="HomeButton">
				<div className="cocktailButton">
					<figure>
						<img
							className="imageCocktail"
							src="https://zupimages.net/up/19/43/4p0w.jpg"
							alt="cocktail"
						></img>
					</figure>

					<button type="button" onClick={CocktailFilters}>
						Get a cocktail
					</button>
				</div>
				<div className="pizzaButton">
					<button type="button" /*onClick={}*/>Get a pizza</button>
					<figure>
						<img
							className="imagePizza"
							src="https://zupimages.net/up/19/43/o5nt.jpg"
							alt="pizza"
						></img>
					</figure>
				</div>
			</div>
			<button type="button" /*onClick={}*/>Get all</button>
		</div>
	)
}

export default Home
