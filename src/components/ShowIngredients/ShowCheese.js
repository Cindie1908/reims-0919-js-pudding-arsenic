import React from "react"
import "./ShowIngredients.css"
import Modal from "../Modal"

class ShowCheese extends React.Component{
	constructor(props){
		super(props)
		this.state={
			revele: false,
			cache:true
		}
	this.toggleModal=this.toggleModal.bind(this)
	}


onDeleteClick=()=>{
	this.props.deleteClickHandler()
}

toggleModal() {
	this.setState({
		revele: !this.state.revele,
		cache:!this.state.cache
	})
}

render(){
	return (
		<div className="ingredientCard">				
			<img
				className="productImage"
				src={this.props.image_front_url}
				alt={this.props.generic_name_fr}
			/>
			<div className="productInfos">
				<p className="productName">{this.props.generic_name_fr}</p>
				<p className="productOrigin">{this.props.manufacturing_places}</p>
				<button type="button" className="openModal" onClick={this.toggleModal}>
				Plus d'infos ...
				</button>
			</div>
			<button 
				type="button" 
				className="close" 
				style={{height:'30px', width:'30px'}}
				onClick={this.onDeleteClick}>
				<span>&times;</span>
			</button>

				<Modal
					revele={this.state.revele}
					cache={this.toggleModal}
					image={this.props.image_front_url}
					nom={this.props.generic_name_fr}
					code={this.props.code_ID}
					ingredients_text={this.props.ingredients_text}
				/>	

		</div>
	)			
}}


export default ShowCheese
