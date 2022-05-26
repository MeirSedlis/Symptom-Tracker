import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* fetchDetails(action){
  // HTTP GET details
  const response = yield axios({
      method: 'GET',
      url: `/api/detail/${action.payload}`
  })
  yield put ({
      type: 'SET_DETAIL',
      payload: response.data
  })
}

function* detailSaga(){
    yield takeEvery('FETCH_DETAILS', fetchDetails);
}

export default detailSaga