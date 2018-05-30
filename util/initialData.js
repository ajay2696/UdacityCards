import {AsyncStorage} from 'react-native';

export const UDACITY_DECKS ='UDACITY_DECK:DeckListNew'

export function setInitialData(){
    let udacityDeck={};
    AsyncStorage.setItem(UDACITY_DECKS,JSON.stringify(udacityDeck));
    return udacityDeck;
}
export  function getDecksListHelper(results){
    return results===null? setInitialData:results
}
