import React,{Component} from 'react';
import {Text,TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import {styles} from '../util/stylesheet'

class DeckCardView extends Component{

    render(){
        return (
            <TouchableOpacity  onPress={()=>this.props.navigation.navigate(
                'DeckQuizHomeView',{
                    title:this.props.title
                }
            )
            }
            style={styles.cardSize}>
                <Text style={styles.cardTitle}>{this.props.title}</Text>
                <Text style={styles.cardDetail}>{this.props.count}</Text>
            </TouchableOpacity >
        );
    }
}

DeckCardView.propTypes={
    navigation:PropTypes.object,
    title:PropTypes.string
}

export default DeckCardView;
