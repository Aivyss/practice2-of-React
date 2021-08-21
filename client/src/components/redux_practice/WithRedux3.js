import React, {useState} from 'react';
import {TextField, Button} from '@material-ui/core';

export default function WithRedux3(props) {
    let [num, setNum] = useState(0);

    const onClick = () => {
        props.onClick(num);
    };
    const onChange = e => {
        setNum(Number(e.target.value));
    };

    return (
        <div className='container'>
            <h3>Add number</h3>
            <Button variant='contained' color='primary' onClick={onClick}>
                ADD
            </Button>
            <TextField label='number' type='number' name='num' onChange={onChange} />
        </div>
    );
}
