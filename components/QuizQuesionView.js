import React,{Component} from 'react';
import {View,Text,TouchableOpacity,Animated} from 'react-native';
import {connect} from 'react-redux';
import {styles} from '../util/stylesheet';
import PropTypes from 'prop-types';
import {clearLocalNotification,setLocalNotification} from '../util/notification';

class QuizQuesionView extends Component {
    state={
        questionNo:1,
        animatedValue:new Animated.Value(0),
        showQuestion:true,
        correctAnswerCount:0
    }

    ViewQuestonOrAnswer=()=>{
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
    correctAnswer=()=>{
        this.setState((prevState)=>({
            ...prevState,
            questionNo:prevState.questionNo+1,
            correctAnswerCount:prevState.correctAnswerCount+1
        }));

        if(this.state.questionNo>this.props.questions.length){
            clearLocalNotification().then(setLocalNotification);
        }
    }
    incorrectAnswer=()=>{
        this.setState((prevState)=>({
            ...prevState,
            questionNo:prevState.questionNo+1
        }));
        
        if(this.state.questionNo>this.props.questions.length){
            clearLocalNotification().then(setLocalNotification);
        }
    }
    restartQuiz=()=>{
        this.setState((prevState)=>({
            ...prevState,
            questionNo:1,
            correctAnswerCount:0
        }));
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

        let totalQuestions= this.props.questions.length;
        let question =this.state.questionNo<=totalQuestions?this.props.questions[this.state.questionNo-1]:null;

        return (
            <View style={styles.quizcontainer}>
                {this.state.questionNo<=totalQuestions&&
                    (<View>
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
                                <TouchableOpacity style={styles.greenColorButton} onPress={this.correctAnswer}>
                                    <Text style={styles.buttonText} > Correct </Text>
                                </TouchableOpacity>
                                <Text> </Text>
                                <TouchableOpacity style={styles.redColorButton} onPress={this.incorrectAnswer}>
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
                    </View>)
                }
                {this.state.questionNo>totalQuestions&&
                    (<View>
                        <Text style={styles.headerText}> Your score:{(this.state.correctAnswerCount/totalQuestions)*100}%</Text>
                        <TouchableOpacity style={styles.button} onPress={this.restartQuiz}>
                            <Text style={styles.buttonText}> Restart Quiz </Text>
                        </TouchableOpacity>
                    </View>
                    )
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

QuizQuesionView.propTypes={
    questions:PropTypes.object
}
export default connect(mapStateToProps,null)(QuizQuesionView);
