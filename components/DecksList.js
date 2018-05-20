import React,{Component} from 'react';
import {View,Text,StyleSheet,StatusBar,ScrollView,TouchableOpacity} from 'react-native';
import {purple,white} from '../util/colors';
import DeckCardView from './DeckCardView';
import {getDecksList} from '../util/api';

class DecksList extends Component{
    state={
      decksLst:[]
    }
    componentDidMount(){

      console.log('compoenent did mount');
        getDecksList().then((results)=>{
          let decksLst = Object.keys(results).map((key) => {
              return results[key];
          });
          this.setState({decksLst})
        });
    }
    render(){
       console.log(this.state.decksLst);
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


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffe',
    alignItems: 'center',
    justifyContent: 'center',

  },
  decksListHeader: {

  },
  addDeckButton:{
      borderWidth:1,
      borderColor:'rgba(0,0,0,0.2)',
      alignItems:'center',
      justifyContent:'center',
      width:70,
      position: 'absolute',
      bottom: 10,
      right: 10,
      height:70,
      backgroundColor:'#fff',
      borderRadius:100,
    }
});
export default DecksList;
