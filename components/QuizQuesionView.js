import React,{Component} from 'react';
import {View,Text,TouchableOpacity,Animated} from 'react-native';
import {connect} from 'react-redux';
import {styles} from '../util/stylesheet';
import PropTypes from 'prop-types';

class QuizQuesionView extends Component {
    state={
        questionNo:1,
        animatedValue:new Animated.Value(0),
        showQuestion:true
    }

    ViewQuestonOrAnswer=()=>{
       console.log(this.state.animatedValue._value);
        if (this.state.animatedValue._value >= 90) {
            Animated.spring(this.state.animatedValue,{
                toValue: 0,
                friction: 8,
                tension: 10
            }).start();

            this.setState((prevState)=>({
                ...prevState,
                showQuestion:true
            }));
        } else {
            Animated.spring(this.state.animatedValue,{
                toValue: 180,
                friction: 8,
                tension: 10
            }).start();

            this.setState((prevState)=>({
                ...prevState,
                showQuestion:false
            }));
        }
    }

    render(){

        const frontInterpolate = this.state.animatedValue.interpolate({
            inputRange: [0, 180],
            outputRange: ['0deg', '180deg'],
        });
        const backInterpolate = this.state.animatedValue.interpolate({
            inputRange: [0, 180],
            outputRange: ['180deg', '360deg']
        })
        const frontOpacity = this.state.animatedValue.interpolate({
            inputRange: [89, 90],
            outputRange: [1, 0]
        })
        const backOpacity = this.state.animatedValue.interpolate({
            inputRange: [89, 90],
            outputRange: [0, 1]
        });
        
        let question =this.props.questions[this.state.questionNo];
        let totalQuestions= this.props.questions.length;
        return (
            <View style={styles.quizcontainer}>
                <View>
                    <Text style={styles.headerText}>Questions {this.state.questionNo} of {totalQuestions}</Text>
                </View>
                <View>
                    <Animated.View style={[styles.flipCard,
                        {transform:[{ rotateY: frontInterpolate }]},
                        {opacity: frontOpacity} ]}>
                        <Text style={styles.headerText}>{question.question}</Text>
                    </Animated.View>
                    <Animated.View style={[styles.flipCard,styles.flipCardBack,
                        {transform: [{ rotateY: backInterpolate }]},
                        {opacity: backOpacity}]}>
                        <Text style={styles.headerText}>{question.answer}</Text>
                        <Text></Text>
                    </Animated.View>
                </View>
                {this.state.showQuestion&&
                    (<View>
                        <Text> </Text>
                        <TouchableOpacity style={styles.greenColorButton}>
                            <Text style={styles.buttonText} > Correct </Text>
                        </TouchableOpacity>
                        <Text> </Text>
                        <TouchableOpacity style={styles.redColorButton}>
                            <Text style={styles.buttonText} > Incorrect</Text>
                        </TouchableOpacity>
                        <Text> </Text>
                        <TouchableOpacity style={styles.button} onPress={this.ViewQuestonOrAnswer}>
                            <Text style={styles.buttonText}> View Answer </Text>
                        </TouchableOpacity>
                    </View>)
                }
                {!this.state.showQuestion&&
                    (<View>
                        <Text> </Text>
                        <TouchableOpacity style={styles.button} onPress={this.ViewQuestonOrAnswer}>
                            <Text style={styles.buttonText}> View Queston </Text>
                        </TouchableOpacity>
                    </View>)
                }
            </View>
        );
    }
}

function mapStateToProps(state,ownProps){
    let titleName =ownProps.navigation.getParam('title');
    return {
        questions:state[titleName].questions
    };
}

function mapDispatchToProps(dispatch){
    return {

    };
}
QuizQuesionView.propTypes={

}
export default connect(mapStateToProps,mapDispatchToProps)(QuizQuesionView);
