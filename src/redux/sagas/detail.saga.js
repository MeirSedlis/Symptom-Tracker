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


function* deleteLog(action){
    const response = yield axios({
        method: 'DELETE',
        url: `/api/detail/${action.payload.id}`
    });
    yield put ({type:'FETCH_DETAILS', payload: action.payload.user_symptom_id})
}

function* editIntensity(action){
    try{
        const itemToEdit=action.payload;
        console.log('itemToEdit in editIntensity:', itemToEdit);
        const response = yield axios({
            method: 'PUT',
            url: `/api/detail/${action.payload.id}`,
            data:{itemToEdit},
        })
        yield put ({ type: 'FETCH_DETAILS'})
    }
    catch(err){
        console.log(err)
    }
}

function* detailSaga(){
    yield takeEvery('FETCH_DETAILS', fetchDetails);
    yield takeEvery('DELETE_LOG', deleteLog);
    yield takeEvery('EDIT_INTENSITY', editIntensity);
}

export default detailSaga