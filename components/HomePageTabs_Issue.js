import React,{Component} from 'react';
import {Platform,Text,View} from 'react-native';
import AddNewDeck from './AddNewDeck';
import {TabNavigator,createBottomTabNavigator} from 'react-navigation';
import {purple,white} from '../util/colors';
import {Entypo,Ionicons} from '@expo/vector-icons';

export const HomePageTabs=createBottomTabNavigator( {
    DecksList:{
      screen:DecksList,
      navigationOptions:{
          tabBarLabel:'List of Decks'
      }
    },
    AddNewDeck:{
      screen:AddNewDeck,
      navigationOptions:{
          tabBarLabel:'Add New Deck'
      }
    }

  },{
      tabBarOption:{
          activeTintColor:Platform.OS='ios'?purple:white,
          style:{
              height:56,
              backgroundColor:Platform.OS='ios' ? white:purple,
              shadowColor:'rgba(0,0,0,0.24)',
              shadowOffset:{
                  width:0,
                  height:3
              },
              shadowRadius:6,
              shadowOpacity:1
          }
      }
    }
);
