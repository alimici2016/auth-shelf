import {put, takeLatest} from 'redux-saga/effects';
import axios from 'axios';

function* deleteItem(action) {
    try {
        axios.delete(`/api/shelf/${action.payload.id}`)
        yield put({type: 'FETCH_ITEMS'})
    } catch (err) {
        console.log('Error in deleteItem', err);
        yield put({type: 'DELETE_ERROR' })
    }
}

function* deleteSaga() {
    yield takeLatest('DELETE_ITEM', deleteItem)
}

export default deleteSaga;
