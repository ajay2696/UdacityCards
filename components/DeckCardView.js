import React,{Component} from 'react';
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native';
import {grey} from '../util/colors';

class DeckCardView extends Component{
    render(){
        return (
            <TouchableOpacity  onPress={()=>this.props.navigation.navigate(
                'DeckQuizHomeView'
            )
            }
            style={styles.cardSize}>
                <Text style={styles.cardTitle}>{this.props.title}</Text>
                <Text style={styles.cardDetail}>{this.props.count}</Text>
            </TouchableOpacity >
        );
    }
}

const styles=StyleSheet.create({
    cardSize: {
        height:60,
        justifyContent: 'center',
        alignItems: 'center',
        borderStyle:'solid',
        borderColor:grey,
        borderWidth: 0.25
    },
    cardTitle: {
        fontSize:16,
        textAlign:'center'
    },
    cardDetail:{
    }
});

export default DeckCardView;
