import {StyleSheet} from 'react-native';
import {white,purple,grey,red,green} from '../util/colors';

export const styles = StyleSheet.create({
    container: {
        paddingTop: 23
    },
    headerText: {
        margin: 15,
        textAlign:'left',
        fontSize:20
    },
    button: {
        backgroundColor: purple,
        borderWidth: 1,
        marginTop: 5,
        marginLeft:80,
        marginRight:80,
        height: 40,
        justifyContent:'center'
    },
    buttonText:{
        fontSize:20,
        color: white,
        textAlign:'center',
    },
    input: {
        margin: 15,
        height: 80,
        borderColor: grey,
        borderWidth: 1
    },
    cardSize: {
        height:60,
        justifyContent: 'center',
        alignItems: 'center',
        borderStyle:'solid',
        borderColor:grey,
        borderWidth: 0.25
    },
    cardTitle: {
        fontSize:18,
        textAlign:'center'
    },
    cardDetail:{
    },
    redColorButton:{
        backgroundColor: red,
        borderWidth: 1,
        marginTop: 5,
        marginLeft:80,
        marginRight:80,
        height: 40,
        justifyContent:'center'
    },
    greenColorButton:{
        backgroundColor: green,
        borderWidth: 1,
        marginTop: 5,
        marginLeft:80,
        marginRight:80,
        height: 40,
        justifyContent:'center'
    }
});
