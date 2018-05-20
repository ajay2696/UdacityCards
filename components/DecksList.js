import React,{Component} from 'react';
import {View,ScrollView} from 'react-native';
import DeckCardView from './DeckCardView';
import {connect} from 'react-redux';
import {fetchDecksList} from '../actions/index';

class DecksList extends Component{
    state={
        title:''
    }
    componentDidMount(){
        this.props.fetchDecksList();
        console.log('component will mount');
    }
    render(){
        console.log('render');
        console.log(this.props.navigation);
        console.log('---Navigation Object ends--');
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
                                count={deck.count} />
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
export default connect(mapStatetoProps,mapDispatchToProps)(DecksList);
