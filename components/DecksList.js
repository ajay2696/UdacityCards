import React,{Component} from 'react';
import {View,ScrollView} from 'react-native';
import DeckCardView from './DeckCardView';
import {connect} from 'react-redux';
import {fetchDecksList} from '../actions/index';
import PropTypes from 'prop-types';

class DecksList extends Component{
    static navigationOptions = {
        title: 'Decks List',
    };
    state={
        title:''
    }
    componentDidMount(){
        this.props.fetchDecksList();
    }
    render(){
        let decksList = Object.keys(this.props.decksList).map((key) => this.props.decksList[key]);
        return (
            <View>
                <ScrollView>
                    {decksList.map((deck)=>{
                        return (
                            <DeckCardView
                                key={deck.title}
                                navigation={this.props.navigation}
                                title={deck.title}
                                count={deck.questions.length} />
                        );
                    })}
                </ScrollView>
            </View>
        );
    }
}
function mapStatetoProps(state){
    return {
        decksList:state
    }
}
function mapDispatchToProps(dispatch){
    return {
        fetchDecksList:()=>dispatch(fetchDecksList())
    }
}
DecksList.propTypes={
    fetchDecksList:PropTypes.func,
    navigation:PropTypes.object,
    decksList:PropTypes.object
}
export default connect(mapStatetoProps,mapDispatchToProps)(DecksList);
