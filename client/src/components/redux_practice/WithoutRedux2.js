import React from 'react';
import {TextField} from '@material-ui/core';
import classNames from 'classnames';

export default function WithoutRedux2(props) {
    return (
        <div className={classNames('container')}>
            <h3>Sum Number</h3>
            <TextField label='Sum' type='number' name='sumNum' value={props.num} readOnly />
        </div>
    );
}
