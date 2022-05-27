import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { yellow } from '@mui/material/colors';

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

function* deleteLog(action){
    const response = yield axios({
        method: 'DELETE_LOG',
        url: `/api/detail/${action.payload}`
    });
    yield put ({type:'FETCH_DETAILS'})
}

function* detailSaga(){
    yield takeEvery('FETCH_DETAILS', fetchDetails);
    yield takeEvery('DELETE_LOG', deleteLog);
}

export default detailSaga