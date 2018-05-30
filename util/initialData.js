import {AsyncStorage} from 'react-native';

export const UDACITY_DECKS ='UDACITY_DECK_NEW1:DeckListLatest1'

export function setInitialData(){
    let udacityDeck={
        React: {
            title: 'React',
            questions: [
                {
                    question: 'What is React?',
                    answer: 'A library for managing user interfaces'
                },
                {
                    question: 'Where do you make Ajax requests in React?',
                    answer: 'The componentDidMount lifecycle event'
                }
            ]
        }
    };
    AsyncStorage.setItem(UDACITY_DECKS,JSON.stringify(udacityDeck));

    return udacityDeck;
}
export  function getDecksListHelper(results){
    return results===null? setInitialData():results
}
