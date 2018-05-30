import * as API from '../util/api';

export const ADD_NEW_DECK='ADD_NEW_DECK';
export const ADD_QUESTION ='ADD_QUESTION';
export const SUBMIT_QUIZ ='SUBMIT_QUIZ';
export const RECIEVE_DECK_LIST ='RECIEVE_DECK_LIST';
export const RECIEVE_DECK ='RECIEVE_DECK';

export const addNewDeckAction=(title)=>{
    return {
        type:ADD_NEW_DECK,
        title
    }
}

export const addQuestionAction=(title,question) =>{
    return {
        type:ADD_QUESTION,
        title,
        question
    }
}

export const submitQuizAction=(title,score)=>{
    return {
        type:SUBMIT_QUIZ,
        title,
        score
    }
}

export const recieveDeckListAction=(decks)=>{
    return {
        type:RECIEVE_DECK_LIST,
        decks
    }
}
export const reciveDeckAction=(title,deck)=>{
    return {
        type:RECIEVE_DECK,
        title,
        deck
    }
}

export const fetchDecksList=()=>(dispatch)=>{
    API.getDecksList().then((results)=>dispatch(recieveDeckListAction(results)));
}

export const addNewDeck=(title)=>(dispatch)=>{
    API.addDeck(title).then(()=>dispatch(addNewDeckAction(title)));
}

export const addQuestion=(title,question)=>(dispatch)=>{
    API.addQuestion(title,question).then(()=>dispatch(addQuestionAction(title,question)));
}

export const getDeck=(title)=>(dispatch)=>{
    API.getDeck(title).then((result)=>{
        dispatch(reciveDeckAction(title,result))
    });
}
