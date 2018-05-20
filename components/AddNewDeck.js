import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import {addDeck} from '../util/api'
import {getDecksList} from '../util/api';
import {grey,purple,white} from '../util/colors'
class AddNewDeck extends Component {
   state={
          deckTitle: ''
       }

   onChangeDeckTitle = (text) => {
      this.setState({ deckTitle: text })
   }
   onSubmit = () =>{
      if(this.state.deckTitle!==''){
        addDeck(this.state.deckTitle);
        this.props.navigation.navigate('DecksList');
      };
   }
   render(){
      return (
         <View style = {styles.container}>
            <Text> What is the Title of your new Deck? </Text>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Deck Title"
               multiline="true"
               value={this.state.deckTitle}
               onChangeText = {this.onChangeDeckTitle}/>

            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {this.onSubmit}>
               <Text style = {styles.submitButtonText}> Submit </Text>
            </TouchableOpacity>
         </View>
      )
   }
}

const styles = StyleSheet.create({
   container: {
      paddingTop: 23
   },
   input: {
      margin: 15,
      height: 80,
      borderColor: grey,
      borderWidth: 1
   },
   submitButton: {
      backgroundColor: purple,
      borderWidth: 1,
      padding: 10,
      margin: 15,
      height: 40,
   },
   submitButtonText:{
      color: white,
      textAlign:'center'
   }
})

export default AddNewDeck;
