import {AsyncStorage} from 'react-native';
import {UDACITY_DECKS,getDecksListHelper,getDeckHelper} from './initialData';

export function addDeck(title){
    return AsyncStorage.getItem(UDACITY_DECKS).then((results)=>{
        const data=JSON.parse(results);
        data[title] ={title:title,questions:[]};
        AsyncStorage.mergeItem(UDACITY_DECKS,JSON.stringify(data));
    });
}

export function getDecksList(){
    return AsyncStorage.getItem(UDACITY_DECKS).then((data)=>getDecksListHelper(JSON.parse(data)));
}

export function addQuestion(title,question){
    return AsyncStorage.getItem(UDACITY_DECKS).then((results)=>{
        const data=JSON.parse(results);
        data[title]['questions'].push(question);
        AsyncStorage.mergeItem(UDACITY_DECKS,JSON.stringify(data));
    });
}

export function submitQuiz(title,score){
    return AsyncStorage.getItem(UDACITY_DECKS).then((results)=>{
        const data=JSON.parse(results);
        data[title]['score'] =score;
        AsyncStorage.mergeItem(UDACITY_DECKS,JSON.stringify(data));
    });
}

export function getDeck(title){
    return AsyncStorage.getItem(UDACITY_DECKS).then((data)=>getDeckHelper(JSON.parse(data),title));
}
