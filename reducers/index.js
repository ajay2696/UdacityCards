import {ADD_NEW_DECK,ADD_QUESTION,SUBMIT_QUIZ,RECIEVE_DECK_LIST} from '../actions/index';

function decks(state={},action){
    switch(action.type){
    case RECIEVE_DECK_LIST:
        return {
            ...action.decks
        }
    case ADD_NEW_DECK:
        return Object.assign({},state,{[action.title]:{title:action.title,questions:[]}})
    case ADD_QUESTION: {
        var  prevState = JSON.parse(JSON.stringify(state));
        prevState[action.title]['questions'].push(action.question)
        return prevState;
    }
    case SUBMIT_QUIZ:
        return {
            ...state,
            ...action.title
        }
    default:
        return state;
    }
}
export default decks;
