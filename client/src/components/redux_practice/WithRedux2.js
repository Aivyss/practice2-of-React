import React, {useState} from 'react';
import {TextField} from '@material-ui/core';
import store from '../../store';

export default function WithRedux2() {
    const [num, setNum] = useState(store.getState().num);

    // subscribe 과정
    store.subscribe(() => {
        setNum(store.getState().num);
    });

    return (
        <div>
            <h3>Sum Number</h3>
            <TextField label='Sum' type='number' name='sumNum' value={num} readOnly />
        </div>
    );
}
