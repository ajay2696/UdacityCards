import {ADD_NEW_DECK,REMOVE_DECK,ADD_QUESTION,SUBMIT_QUIZ,RECIEVE_DECK_LIST,RECIEVE_DECK} from '../actions/index';

function decks(state={},action){
    switch(action.type){
    case RECIEVE_DECK_LIST:
        return {
            ...action.decks
        }
    case ADD_NEW_DECK:
        return Object.assign({},state,{[action.title]:{title:action.title,questions:[]}})
    case REMOVE_DECK:
        return {
            ...state,
            ...action.entry
        }
    case ADD_QUESTION: {
        return Object.assign({},state)[action.title].push(action.question);
    }
    case SUBMIT_QUIZ:
        return {
            ...state,
            ...action.title
        }
    case RECIEVE_DECK:
        return state[action.title];
    default:
        return state;
    }
}
export default decks;
