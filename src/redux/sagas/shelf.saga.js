import axios from "axios";
import {put, takeLatest} from 'redux-saga/effects';

//saga POST to server
function* addItem(action){
    try {
        console.log('New Item', action.payload);
        yield axios.post('/api/shelf', action.payload);
        
        yield put({type: 'FETCH_ITEMS'})
    } catch (error) {
        console.log('POST ERROR', error);
    }
}

//watching for functions 
function* shelfSaga(){
    yield takeLatest('ADD_ITEM', addItem);
}


export default shelfSaga;