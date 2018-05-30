import {ADD_NEW_DECK,ADD_QUESTION,RECIEVE_DECK_LIST,RECIEVE_DECK} from '../actions/index';

function decks(state={},action){
    switch(action.type){
    case RECIEVE_DECK_LIST:
        return {
            ...action.decks
        }
    case ADD_NEW_DECK:
        return Object.assign({},state,{[action.title]:{title:action.title,questions:[]}});
    case ADD_QUESTION: {
        var  prevState = JSON.parse(JSON.stringify(state));
        prevState[action.title]['questions'].push(action.question)
        return prevState;
    }
    case RECIEVE_DECK:
        return {
            ...state,
            [action.title]:action.deck
        }
    default:
        return state;
    }
}
export default decks;
