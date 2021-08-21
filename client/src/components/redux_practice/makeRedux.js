import Redux from 'redux';
import {createStore} from 'redux';

function reducer(prevState, action) {
    if (prevState === undefined) {
        return {color: 'yellow'}; // 할당이 안돼어 있으니 초기 state 값을 건넴
    }
}
let store = createStore(reducer);
