import React, {useEffect, useState} from 'react';
import Button from '@material-ui/core/Button';
import {Fade} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';

function FuncComp(props) {
    /*
        useState()는 배열의 0번 인덱스는 state, 1번 인덱스는 setState() 메소드를 반환하다.
        useState()의 파라매터는 state의 초기값에 해당한다.
    */
    let [number, setNumber] = useState(props.initNum);
    let [date, setDate] = useState(new Date().toString());
    let [checked, setChecked] = useState(false);
    let [display, setDisplay] = useState('none');
    let [initialized, setInitialized] = useState(false);
    let [count, setCount] = useState(0);

    const clickEvent = () => {
        setCount(++count);
        setChecked(!checked);
        setDisplay(display === 'none' ? '' : 'none');
    };

    useEffect(() => {
        if (!initialized) {
            setInitialized(true);
        } else {
            if (count < 2) {
                console.log('useEffect 사용. 랜더후 진행');
                setTimeout(() => {
                    clickEvent();
                }, 1500);
            } else {
                setCount(0);
                setChecked(false);
                setDisplay('none');
            }
        }
    }, [display]);

    return (
        <div className='container'>
            <div className='alert' style={{display: display}}>
                <Fade in={checked}>
                    <Alert severity='warning'>This is a warning alert — check it out!</Alert>
                </Fade>
            </div>
            <h2>Function Style Component</h2>
            <p>Number: {number}</p>
            <p>현재시각: {date}</p>
            <Button variant='contained' color='primary' onClick={() => setNumber(Math.random())}>
                Randomize
            </Button>
            <Button variant='contained' color='secondary' onClick={() => setDate(new Date().toString())}>
                get now
            </Button>
            <Button variant='contained' color='primary' onClick={clickEvent}>
                Alert
            </Button>
        </div>
    );
}

export default FuncComp;
