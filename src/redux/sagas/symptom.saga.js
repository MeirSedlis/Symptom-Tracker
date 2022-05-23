import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* fetchSymptoms(){
    //HTTP GET symptoms
    const response = yield axios({
        method: 'GET',
        url: '/api/symptom'
    })
    yield put ({
        type: 'SET_SYMPTOM',
        payload: response.data
    })
}

function* symptomSaga(){
    yield takeEvery('FETCH_SYMPTOMS', fetchSymptoms);
}

export default symptomSaga;