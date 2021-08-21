import React, {useEffect, useState} from 'react';
import store from '../store';
import WithRedux3 from '../components/redux_practice/WithRedux3';

/*
    Redux와의 종속성을 제거하기 위한 컴포넌트
    이 컴포넌트는 비즈니스로직 처리 및 Redux처리를 위한 기능 컴포넌트이다.
    리턴으로 주는 컴포넌트는 UI만을 전속 담당하는 Presentational Component이다.
*/
export default function AddContainer() {
    const onClick = param => {
        store.dispatch({
            type: 'INCREMENT',
            num: Number(param),
        });
    };

    useEffect(() => {
        console.log('mount');
        return () => {
            console.log('Unmount');
        };
    }, []);

    return <WithRedux3 onClick={onClick} />;
}
