import React,{Component} from 'react';
import {Text,View,TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import {styles} from '../util/stylesheet';
import {connect} from 'react-redux';

class DeckQuizHomeView extends Component{
    static navigationOptions =({navigation})=> {
        const titleName=navigation.getParam('title');
        return {
            title:titleName
        }
    };

    render(){
        let noOfQuestions =this.props.deck.questions.length;
        let {navigation} =this.props;
        return (
            <View style={styles.container}>
                <Text style={styles.headerText}>Number Of Questions:{noOfQuestions}</Text>
                {noOfQuestions>0 && <TouchableOpacity
                    style={styles.button}
                    onPress={()=>navigation.navigate('QuizQuesionView',{
                        title:navigation.getParam('title')
                    })}>
                    <Text style={styles.buttonText} > Start Quiz</Text>
                </TouchableOpacity>}
                <Text> </Text>
                <TouchableOpacity
                    style={styles.button}
                    onPress={()=>navigation.navigate('AddQuestion',{
                        title:navigation.getParam('title')
                    })}>
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

function mapStateToProps(state,ownProps){
    let titleName =ownProps.navigation.getParam('title');
    return {
        deck:state[titleName]
    }
}
DeckQuizHomeView.propTypes={
    navigation:PropTypes.object,
    deck:PropTypes.object
}

export default connect(mapStateToProps,null)(DeckQuizHomeView);
