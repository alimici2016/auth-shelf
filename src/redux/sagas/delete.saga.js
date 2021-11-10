import {put, takeLatest} from 'redux-saga/effects';
import axios from 'axios';

function* deleteItem(action) {
    try {
        //When DELETE_ITEM is called, takes in action parameter, which has the id of the item to delete
        axios.delete(`/api/shelf/${action.payload.id}`)
        //Call FETCH_ITEMS to rerender page
        yield put({type: 'FETCH_ITEMS'})
    } catch (err) {
        console.log('Error in deleteItem', err);
        yield put({type: 'DELETE_ERROR' })
    }
}

function* deleteSaga() {
    //Watching for DELETE_ITEM to be called
    yield takeLatest('DELETE_ITEM', deleteItem)
}

export default deleteSaga;
