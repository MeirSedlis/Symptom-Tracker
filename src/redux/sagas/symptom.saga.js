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

function* fetchUserSymptoms(){
    //HTTP GET active symptoms for the logged in user
    const response = yield axios({
        method: 'GET',
        url: '/api/symptom/:id'
    })
    yield put ({
        type: 'SET_SYMPTOM',
        payload: response.data
    })
}

function* logSymptom(action){
    //HTTP POST log symptom for the logged in user
    const response = yield axios ({
        method: 'POST',
        url: '/api/detail',
        data: action.payload
    })
}

function* symptomSaga(){
    yield takeEvery('FETCH_SYMPTOMS', fetchSymptoms);
    yield takeEvery('FETCH_USER_SYMPTOMS', fetchUserSymptoms);
    yield takeEvery('LOG_SYMPTOM', logSymptom);
}

export default symptomSaga;