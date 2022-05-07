import {call, put, takeEvery} from 'redux-saga/effects';
import { getReduceSuccess } from './Reducer';


function* workGetReduceFetch(){
    const data = yield call (() => fetch('https://admin.naxa.com.np/api/services'))
    const formatedData = yield data.json();
    yield put(getReduceSuccess(formatedData));

}

function* reducerSaga() {
    yield takeEvery('reduce/getReduceFetch', workGetReduceFetch);

}

export default reducerSaga;








