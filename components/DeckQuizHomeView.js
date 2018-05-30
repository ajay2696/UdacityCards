import React,{Component} from 'react';
import {Text,View,TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import {styles} from '../util/stylesheet';
import {connect} from 'react-redux';
import {getDeck} from '../actions/index';

class DeckQuizHomeView extends Component{
    static navigationOptions =({navigation})=> {
        const titleName=navigation.getParam('title');
        return {
            title:titleName,
        }
    };
    render(){
        let {navigation} =this.props;
        let deck=this.props.deck;
        return (
            <View>
                {deck && (
                    <View style={styles.container}>
                        <Text style={styles.headerText}>Number Of Questions:{this.props.deck.questions.length}</Text>
                        {this.props.deck.questions.length>0 && <TouchableOpacity
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
                    </View>)
                }
            </View>
        );
    }

}

function mapStateToProps(state,ownProps){
    let titleName =ownProps.navigation.getParam('title');
    return {
        deck:state[titleName]
    }
}

function mapDispatchToProps(dispatch){
    return {
        getDeck:(title)=>dispatch(getDeck(title))
    }
}
DeckQuizHomeView.propTypes={
    navigation:PropTypes.object,
    deck:PropTypes.object,
    getDeck:PropTypes.func.isRequired
}

export default connect(mapStateToProps,mapDispatchToProps)(DeckQuizHomeView);
