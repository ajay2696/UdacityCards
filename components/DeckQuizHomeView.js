import React,{Component} from 'react';
import {Text,View,TouchableOpacity} from 'react-native';

class DeckQuizHomeView extends Component{
    render(){
        return (
            <View>
              <Text>Deck Quiz View</Text>
               <Text> </Text>
              <TouchableOpacity onPress={()=>this.props.navigation.navigate('QuizQuesionView')}>
                  <Text>Start Quiz</Text>
              </TouchableOpacity>
               <Text> </Text>
              <TouchableOpacity onPress={()=>this.props.navigation.navigate('AddQuestion')}>
                  <Text>Add Question</Text>
              </TouchableOpacity>
            </View>
        );
    }
}

export default DeckQuizHomeView;
