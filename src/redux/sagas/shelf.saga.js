import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchItems() {
  try {
    const response = yield axios.get('/api/shelf');
    yield put({ type: 'SET_ITEMS', payload: response.data });
  } catch (err) {
    yield put({ type: 'FETCH_ITEMS_ERROR' });
    console.log(err);
  }
}

function* shelfSaga() {
  yield takeLatest('FETCH_ITEMS', fetchItems)
}




export default shelfSaga;