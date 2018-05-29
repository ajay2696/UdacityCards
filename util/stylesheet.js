import {StyleSheet} from 'react-native';
import {white,purple,grey,red,green} from '../util/colors';

export const styles = StyleSheet.create({
    container: {
        justifyContent:'center',
        alignItems: 'center',
    },
    headerText: {
        margin: 5,
        textAlign:'center',
        fontSize:20
    },
    button: {
        backgroundColor: purple,
        borderWidth: 1,
        marginTop: 5,
        width:160,
        height: 40,
        justifyContent:'center'
    },
    buttonText:{
        fontSize:20,
        color: white,
        textAlign:'center',
    },
    input: {
        margin: 5,
        height: 80,
        width:300,
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
        width:160,
        height: 40,
        justifyContent:'center'
    },
    greenColorButton:{
        backgroundColor: green,
        borderWidth: 1,
        marginTop: 5,
        width:160,
        height: 40,
        justifyContent:'center'
    },
    errorMessageText:{
        fontSize:16,
        color: red,
        textAlign:'center',
    },
    quizcontainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    flipCard: {
        height: 200,
        width: 300,
        alignItems: 'center',
        justifyContent: 'center',
        backfaceVisibility: 'hidden',
        borderRadius: 4,
        borderWidth: 1,
        borderColor: red,
    },
    flipCardBack: {
        borderColor: green,
        position: "absolute",
        top: 0,
    },
    flipText: {
        width: 90,
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
    }
});
