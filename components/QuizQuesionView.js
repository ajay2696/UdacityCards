import React,{Component} from 'react';
import {View,Text,TouchableOpacity} from 'react-native';
import QuizAnswerView from './QuizAnswerView';

class QuizQuesionView extends Component {
    render(){
      return (
          <View>
             <Text>React Native Works for IOS and Android</Text>
             <Text></Text>
             <TouchableOpacity>
                <Text> Yes </Text>
             </TouchableOpacity>
             <Text> </Text>
             <TouchableOpacity>
                <Text> No </Text>
             </TouchableOpacity>
             <Text> </Text>
             <TouchableOpacity>
                <Text> View Answer </Text>
             </TouchableOpacity>
             <Text> </Text>
             <TouchableOpacity>
                <Text>Next</Text>
             </TouchableOpacity>
             <Text> </Text>
             <TouchableOpacity>
                <Text> Previous </Text>
             </TouchableOpacity>

             <QuizAnswerView />
          </View>
      );
    }
}
export default QuizQuesionView;
