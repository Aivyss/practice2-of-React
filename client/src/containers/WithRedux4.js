import React, {useEffect, useState} from 'react';
import WithRedux4 from '../components/redux_practice/WithRedux4';
import store from '../store';

export default function SumContainer() {
    let [num, setNum] = useState(store.getState().num);

    store.subscribe(() => {
        setNum(store.getState().num);
    });

    useEffect(() => {
        console.log('mount');
        return () => {
            console.log('Unmount');
        };
    }, []);
    return <WithRedux4 num={num} />;
}
