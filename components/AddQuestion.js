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
      answer:''
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
      this.props.addQuestion({
          question:this.state.question,
          answer:this.state.answer
      });

  }
  render(){
      return(
          <View style={styles.container}>
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
