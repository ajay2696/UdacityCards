import {AsyncStorage} from 'react-native';
import {UDACITY_DECKS,getDecksListHelper} from './initialData';
export function addDeck(title){
      return AsyncStorage.getItem(UDACITY_DECKS).then((results)=>{
         const data=JSON.parse(results);
          data[title] ={title:title,questions:[]};
          console.log('--latest result end--');
          console.log(data);
          console.log('--end');
          AsyncStorage.mergeItem(UDACITY_DECKS,JSON.stringify(data));
      });
}
export function getDecksList(){
    return AsyncStorage.getItem(UDACITY_DECKS).then(getDecksListHelper);
}
