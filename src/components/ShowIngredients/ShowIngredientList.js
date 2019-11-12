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
		this.getPateAPizza()
	}
	randomIngredientNumber() {
		let numbers = [3, 4, 5, 6, 7]
		let idNumbers = Math.floor(Math.random() * 5)
		return numbers[idNumbers]
	}
	
	deleteCard(image_front_url) {
		console.log(image_front_url)
		const newCards=this.state.products.filter(product=>
			product.image_front_url!==image_front_url)
			this.setState({products:newCards})
  }
	getIngredient () {		
		for (let i = 0 ; i < 7 ; i++) {
			const randomNumber = Math.floor(Math.random() * 20)
			const randomPage = Math.floor(Math.random() * 1001)
			const url = `https://world.openfoodfacts.org/cgi/search.pl?page=${randomPage}&page_size=20&action=process&json=1`
			axios
				.get (url)
				.then (response => response.data)
				.then (data => {
					this.setState ((state) => {
						const ingredient = 
							{
								display: true,
								image_front_url: data.products[randomNumber].image_front_url,
								generic_name_fr: data.products[randomNumber].generic_name_fr,
								manufacturing_places: data.products[randomNumber].manufacturing_places}
						let products = state.products.concat(ingredient)
						return {
							products
						}
					})
				})
		}		
	}
	getPateAPizza () {		
		for (let i = 0 ; i < 7 ; i++) {
			const randomNumber = Math.floor(Math.random() * 20)
			const url = `https://fr.openfoodfacts.org/cgi/search.pl?search_terms=p%C3%A2te+%C3%A0+d%C3%A9rouler&search_simple=1&action=process`
			axios
				.get (url)
				.then (response => response.data)
				.then (data => {
					this.setState ((state) => {
						const ingredient = 
							{
								display: true,
								image_front_url: data.products[randomNumber].image_front_url,
								generic_name_fr: data.products[randomNumber].generic_name_fr,
								manufacturing_places: data.products[randomNumber].manufacturing_places}
						let pates = state.pates.concat(ingredient)
						return {
							pates
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
            deleteClickHandler = {this.deleteCard.bind(this,product.image_front_url)}
						/>						
					)}
			</div>
    	)
	}            
}

export default ShowIngredientList
