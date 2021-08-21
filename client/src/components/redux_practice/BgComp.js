import React, {useState} from 'react';
import Button from '@material-ui/core/Button';

function BgComp(props) {
    const eventBinding = () => {
        props.action(props.strictColor);
    };

    return (
        <div className='container' style={{backgroundColor: props.color}}>
            <h3>{props.title}</h3>
            <Button variant='contained' color='primary' onClick={eventBinding}>
                fire
            </Button>
        </div>
    );
}

export default BgComp;
