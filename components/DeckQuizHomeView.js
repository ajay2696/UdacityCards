import React,{Component} from 'react';
import {Text,View,TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import {styles} from '../util/stylesheet';


class DeckQuizHomeView extends Component{
    static navigationOptions =({navigation})=> {
        const titleName=navigation.getParam('title');
        return {
            title:titleName
        }
    };

    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.headerText}>Number Of Questions:</Text>
                <TouchableOpacity
                    style={styles.button}
                    onPress={()=>this.props.navigation.navigate('QuizQuesionView')}>
                    <Text style={styles.buttonText} > Start Quiz</Text>
                </TouchableOpacity>
                <Text> </Text>
                <TouchableOpacity
                    style={styles.button}
                    onPress={()=>this.props.navigation.navigate('AddQuestion')}>
                    <Text style={styles.buttonText}>Add Question</Text>
                </TouchableOpacity>
                <Text> </Text>
                <TouchableOpacity
                    style={styles.redColorButton}
                    onPress={()=>this.deleteDeck}>
                    <Text style={styles.buttonText}>Delete Deck</Text>
                </TouchableOpacity>
            </View>
        );
    }

    deleteDeck=()=>{
        console.log('delete Deck');
    }
}

DeckQuizHomeView.propTypes={
    navigation:PropTypes.object
}

export default DeckQuizHomeView;
