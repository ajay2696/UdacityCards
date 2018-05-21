import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import {connect} from 'react-redux';
import {addNewDeck} from '../actions/index';
import PropTypes from 'prop-types';
import {styles} from '../util/stylesheet';

class AddNewDeck extends Component {
    static navigationOptions = {
        title: 'Add New Deck',
    };
   state = {
       deckTitle: ''
   }

   onChangeDeckTitle = (text) => {
       this.setState({ deckTitle: text })
   }

   onSubmit = () =>{
       if(this.state.deckTitle!==''){
           this.props.addNewDeck(this.state.deckTitle);
           this.props.navigation.navigate('DecksList',{
               title:this.state.deckTitle
           });
           this.setState({ deckTitle:''})
       }
   }

   render(){
       return (
           <View style = {styles.container}>
               <Text style={styles.headerText}> What is the Title of your new Deck? </Text>
               <TextInput style = {styles.input}
                   underlineColorAndroid = "transparent"
                   placeholder = "Deck Title"
                   multiline={true}
                   value={this.state.deckTitle}
                   onChangeText = {this.onChangeDeckTitle}/>

               <TouchableOpacity
                   style = {styles.button}
                   onPress = {this.onSubmit}>
                   <Text style = {styles.buttonText}> Submit </Text>
               </TouchableOpacity>
           </View>
       )
   }
}

function mapDispatchToProps(dispatch){
    return {
        addNewDeck:(title)=>dispatch(addNewDeck(title))
    }
}

AddNewDeck.propTypes ={
    addNewDeck:PropTypes.func,
    navigation:PropTypes.object
}
export default connect(null,mapDispatchToProps)(AddNewDeck);
