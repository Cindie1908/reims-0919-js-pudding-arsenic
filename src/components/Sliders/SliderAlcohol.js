import React from 'react';
import InputRange from 'react-input-range';
import './slider.css' ;
import '../../../node_modules/react-input-range/lib/css/index.css'

 
class SliderAlcohol extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Taux: {
        min: 0,
        max: 0,
        
      },
      choiseAlcohol: true,
        choiseNo: true,
    };
  }

  showSliders=()=>{
      this.setState({
        
        choiseAlcohol : true,
          choiseNo : false
      })
    }
    showNoAlcohol=()=>{
        this.setState({
          choiseAlcohol : false,
          choiseNo : true
        })
      }

  render() {
    return (
      <div className = "formSlider">
          <h3 className = "titlechoiseAlcohol">Choisissez votre Cocktail.</h3>
        <div className = "btnSelectAlcohol">
          <button className = "btnS" onClick={this.showNoAlcohol}>Sans Alcool</button>
          <button className = "btnA" onClick={this.showSliders}>Diabol hique</button>
        </div>
        <div>
          <h1 className = "showTitleNo" style={ {display: this.state.choiseAlcohol ? 'none' : 'block'} }>Petit joueur !</h1>
        </div>
        <div className = "showSlider" style={ {display: this.state.choiseNo ? 'none' : 'block'} }>
          <form className="form">
            <InputRange
              draggableTrack
              maxValue={100}
              minValue={0}
              onChange={value => this.setState({ Taux: value })}
              value={this.state.Taux} />
          </form>
          <h3>Le taux d'alcool de votre brevage sera compris entre {this.state.Taux.min} et {this.state.Taux.max}°</h3>
        </div>
      </div>
    );
  }
}
  
  export default SliderAlcohol;