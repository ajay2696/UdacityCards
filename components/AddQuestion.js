import React,{Component} from 'react';
import {Text,View,TextInput,TouchableOpacity} from 'react-native';
import {styles} from '../util/stylesheet';
import {connect} from 'react-redux';
import {addQuestion} from '../actions/index';

class AddQuestion extends Component {
  static navigationOptions ={
      title:'Add Question'
  };
  state ={
      question:'',
      answer:'',
      errorMessage:''
  }
  onChangeQuestion=(text)=>{
      this.setState((prevState)=>({
          ...prevState,
          question:text
      }));
  }
  onChangeAnswer=(text)=>{
      this.setState((prevState)=>({
          ...prevState,
          answer:text
      }));
  }
  onSubmit=()=>{
      if(this.state.question==='' && this.state.answer===''){
          this.setState((prevState)=>({
              ...prevState,
              errorMessage:'Question and Answer fields should not be blank'
          }));
      }else if(this.state.question==='' ){
          this.setState((prevState)=>({
              ...prevState,
              errorMessage:'Question field should not be blank'
          }));
      }else if(this.state.answer===''){
          this.setState((prevState)=>({
              ...prevState,
              errorMessage:'Answer field should not be blank'
          }));
      } else {
          this.props.addQuestion(
              'Ajay',
              {
                  question:this.state.question,
                  answer:this.state.answer
              });
          this.props.navigation.navigate('DeckQuizHomeView');
          this.setState({
              question:'',
              answer:'',
              errorMessage:''
          });
      }

  }
  render(){
      return(
          <View style={styles.container}>
              <Text style={styles.errorMessageText}>{this.state.errorMessage} </Text>
              <TextInput style = {styles.input}
                  underlineColorAndroid = "transparent"
                  placeholder = "Question"
                  multiline={true}
                  value={this.state.question}
                  onChangeText = {this.onChangeQuestion}/>
              <TextInput style = {styles.input}
                  underlineColorAndroid = "transparent"
                  placeholder = "Answer"
                  multiline={true}
                  value={this.state.answer}
                  onChangeText = {this.onChangeAnswer}/>

              <TouchableOpacity
                  style = {styles.button}
                  onPress = {this.onSubmit}>
                  <Text style = {styles.buttonText}>Submit</Text>
              </TouchableOpacity>
          </View>
      );
  }
}

function mapDispatchToProps(dispatch){
    return {
        addQuestion:(title,question) => dispatch(addQuestion(title,question))
    };
}

export default connect(null,mapDispatchToProps)(AddQuestion);
