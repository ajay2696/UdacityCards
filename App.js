import React from 'react';
import { StyleSheet, Text, View,Platform,TextInput} from 'react-native';
import DecksList from './components/DecksList';
import AddNewDeck from './components/AddNewDeck';
import DeckQuizHomeView from './components/DeckQuizHomeView';
import AddQuestion from './components/AddQuestion';
import QuizQuesionView from './components/QuizQuesionView';
import {createBottomTabNavigator,createStackNavigator} from 'react-navigation';
import {Entypo} from '@expo/vector-icons';
import {purple,white} from './util/colors'

const MainScreenNavigator =createStackNavigator({
   DecksList:{
      screen:DecksList
   },
   AddQuestion:{
      screen:AddQuestion
   },
   DeckQuizHomeView:{
      screen:DeckQuizHomeView
   },
   QuizQuesionView:{
      screen:QuizQuesionView
   }
})

const AddDeckNavigator =createStackNavigator({
  AddNewDeck:{
     screen:AddNewDeck
  },
  AddQuestion:{
     screen:AddQuestion
  },
});

const HomeScreenTabNavigator =createBottomTabNavigator({
    TabItem1:{
      screen:MainScreenNavigator,
      navigationOptions:{
            tabBarLabel:'Decks List',
            tabBarIcon:({tintColor})=> <Entypo name='list' size={30} color={tintColor}/>
        }
    },
    TabItem2:{
      screen:AddDeckNavigator,
      navigationOptions:{
            tabBarLabel:'Add Deck',
            tabBarIcon:({tintColor})=> <Entypo name='add-to-list' size={30} color={tintColor}/>
        }
    }
}
,{
    tabBarOptions:{
        activeTintColor:Platform.OS === 'ios' ? purple : white ,
        style: {
            height:56,
            backgroundColor:Platform.OS==='ios' ? white : purple,
            shadowColor: 'rgba(0,0,0,0.24)',
            shadowOffset: {
                width: 0,
                height: 3
            },
            shadowRadius: 6,
            shadowOpacity: 1
        }
    }
});


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <HomeScreenTabNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent:'space-between'
  }
});
