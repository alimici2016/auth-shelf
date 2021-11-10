import axios from "axios";
import { put, takeLatest } from 'redux-saga/effects';

//saga POST to server
function* addItem(action) {
    try {
        console.log('New Item', action.payload);
        yield axios.post('/api/shelf', action.payload);

        yield put({ type: 'FETCH_ITEMS' })
    } catch (error) {
        console.log('POST ERROR', error);
    }
}


function* fetchItems() {
    try {
        const response = yield axios.get('/api/shelf');
        yield put({ type: 'SET_ITEMS', payload: response.data });
    } catch (err) {
        yield put({ type: 'FETCH_ITEMS_ERROR' });
        console.log(err);
    }
}

//watching for functions 
function* shelfSaga() {
    yield takeLatest('FETCH_ITEMS', fetchItems)
    yield takeLatest('ADD_ITEM', addItem);

}




export default shelfSaga;