import React, {useState} from 'react';
import {TextField} from '@material-ui/core';

export default function WithRedux4(props) {
    return (
        <div className='container'>
            <h3>Sum Number</h3>
            <TextField label='Sum' type='number' name='sumNum' value={props.num} readOnly />
        </div>
    );
}
