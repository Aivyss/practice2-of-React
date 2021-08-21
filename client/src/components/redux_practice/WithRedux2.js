import React from 'react';
import {TextField} from '@material-ui/core';

export default function WithRedux2(props) {
    return (
        <div>
            <h3>Sum Number</h3>
            <TextField label='Sum' type='number' name='sumNum' value={props.num} readOnly />
        </div>
    );
}
