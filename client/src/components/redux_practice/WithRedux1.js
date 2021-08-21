import React, {useState} from 'react';
import {TextField, Button} from '@material-ui/core';
import store from '../../store';

export default function WithRedux1() {
    const [num, setNum] = useState(0);
    const clickEvent = () => {
        store.dispatch({
            type: 'INCREMENT',
            num: Number(num),
        });
    };

    const changeEvent = e => {
        setNum(e.target.value);
    };
    return (
        <div className='container'>
            <h3>Add number</h3>
            <Button variant='contained' color='primary' onClick={clickEvent}>
                ADD
            </Button>
            <TextField label='number' type='number' name='num' onChange={changeEvent} />
        </div>
    );
}
