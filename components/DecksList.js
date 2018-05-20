import React,{Component} from 'react';
import {View,ScrollView} from 'react-native';
import DeckCardView from './DeckCardView';
import {getDecksList} from '../util/api';

class DecksList extends Component{
    state={
        decksLst:[]
    }
    componentDidMount(){
        getDecksList().then((results)=>{
            let decksLst = Object.keys(results).map((key) => {
                return results[key];
            });
            this.setState({decksLst})
        });
    }
    render(){
        return (
            <View>
                <ScrollView>
                    {this.state.decksLst.map((deck)=>{
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
export default DecksList;
