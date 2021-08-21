import {createStore} from 'redux';

/*
    param1: reducer
    param2: 
 */
export default createStore((state, action) => {
    let returnValue;

    if (state === undefined) {
        returnValue = {num: 0};
    } else if (action.type === 'INCREMENT') {
        returnValue = {...state, num: state.num + action.num};
    }

    return returnValue;
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
