import React from 'react'
import ShowIngredients from './ShowIngredients'
import axios from 'axios'

class ShowIngredientList extends React.Component {
	constructor (props) {
		super(props)
		this.state = {
			numberOfIngredients : this.randomIngredientNumber(),
			products : []
		}
	}
	componentDidMount () {
		this.getIngredient()
	}
	randomIngredientNumber() {
		let numbers = [3, 4, 5, 6, 7]
		let idNumbers = Math.floor(Math.random() * 5)
		return numbers[idNumbers]
	}	
	deleteCard(image_front_url) {
		const newCards=this.state.products.filter(product=>
			product.image_front_url!==image_front_url)
			this.setState({products:newCards})
  	}
	getIngredient () {
		let ingredientNumber = this.state.numberOfIngredients		
		for (let i = 0 ; i < ingredientNumber ; i++) {
			const randomNumber = Math.floor(Math.random() * 20)
			const randomPage = Math.floor(Math.random() * 1001)
			const url =	`https://world.openfoodfacts.org/cgi/search.pl?page=${randomPage}&page_size=20&action=process&tagtype_0=categories&tag_contains_0=contains&tag_0=beverages&sort_by=unique_scans_n&page=1&page_size=20&axis_x=energy&axis_y=products_n&action=display&json=1`
			axios
				.get (url)
				.then (response => response.data)
				.then (data => {
					this.setState ((state) => {
						const ingredient = 
							{
								display: true,
								image_front_url: data.products[randomNumber].image_front_url,
								generic_name_fr: data.products[randomNumber].product_name_fr,
								manufacturing_places: data.products[randomNumber].manufacturing_places,
								code: data.products[randomNumber].code,
								ingredients_text: data.products[randomNumber].ingredients_text,
							}
						let products = state.products.concat(ingredient)
						return {
							products
						}
					})
				})
		}		
	}
	

	render() {
		return (
			<div>			
        {this.state.products
					.filter((product, index) => index < this.state.numberOfIngredients)
					.map ((product, i) => <ShowIngredients 
						image_front_url={this.state.products[i].image_front_url}
						generic_name_fr={this.state.products[i].generic_name_fr}
						manufacturing_places={this.state.products[i].manufacturing_places}
						code={this.state.products[i].code}
						ingredients_text={this.state.products[i].ingredients_text}
            			deleteClickHandler = {this.deleteCard.bind(this,product.image_front_url)}
						/>						
					)}
			</div>
    	)
	}            
}

export default ShowIngredientList
