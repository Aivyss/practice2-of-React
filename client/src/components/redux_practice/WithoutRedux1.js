import React, {useState} from 'react';
import {Button} from '@material-ui/core';
import {TextField} from '@material-ui/core';
import classnames from 'classnames';

export default function WithoutRedux(props) {
    let [num, setNum] = useState(0);

    const changeNumEvent = e => {
        const targetNum = e.target.value;
        setNum(Number(targetNum));
    };

    const sendNumber = () => {
        props.action(num);
    };

    return (
        <div className={classnames('container')}>
            <h3>Add number</h3>
            <Button variant='contained' color='primary' onClick={sendNumber}>
                ADD
            </Button>
            <TextField label='number' type='number' name='num' onChange={changeNumEvent} />
        </div>
    );
}
