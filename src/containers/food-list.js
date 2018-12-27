import React , {Component} from 'react'; 
import {connect} from 'react-redux';
import {bindActionCreaters} from 'react-redux';
import {selectFood} from '../actions/index';
class FoodList extends Component {

    render () {
        let foods = this.props.foods.map(
            (food) => {
                return (
                    <li key={food.id} onClick={
                        () => {
                            this.props.selectFood(food);
                        }
                    }>Food nane: {food.name} Food Des: {food.des} Price: {food.price}</li>
                );
            }
        );
        return (
            <ul>
                {foods}
            </ul>
        );
    }
}

function mapStateToProps(state) {
    return {
        foods: state.foods
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreaters({
        selectFood:selectFood
    }, dispatch);
}

let FoodContainer = connect(mapStateToProps,mapDispatchToProps)(FoodList);

export default FoodContainer;