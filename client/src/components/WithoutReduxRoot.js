import classNames from 'classnames';
import React, {useEffect, useState} from 'react';
import BgComp from './redux_practice/BgComp';
import WithoutRedux1 from './redux_practice/WithoutRedux1';
import WithoutRedux2 from './redux_practice/WithoutRedux2';
import WithRedux1 from './redux_practice/WithRedux1';
import WithRedux2 from './redux_practice/WithRedux2';

const bgColorList = [
    {
        key: 0,
        title: 'red',
        strictColor: 'red',
    },
    {
        key: 1,
        title: 'green',
        strictColor: 'green',
    },
];

function WithoutReduxRoot(props) {
    const [color, setColor] = useState('white');
    const [palette, setPalette] = useState([]);
    const [num, setNum] = useState(0);

    useEffect(() => {
        setPalette(bgColorList);
    }, []);

    const changeColorEvent = function (param) {
        console.log('🚀 ~ file: WithoutReduxRoot.js ~ line 26 ~ WithoutReduxRoot ~ param', param);

        setColor(param);
    };

    const addNumberEvent = param => {
        console.log('🚀 ~ file: WithoutReduxRoot.js ~ line 36 ~ WithoutReduxRoot ~ param', param);
        console.log('🚀 ~ file: WithoutReduxRoot.js ~ line 33 ~ addNumberEvent ~ num', num);
        setNum(num + param);
    };

    return (
        <div className={classNames('container')}>
            <div className='container'>
                <h2>Without Redux - 1</h2>
                <div className='box'>
                    {palette.map(curr => {
                        return (
                            <BgComp
                                key={curr.key}
                                strictColor={curr.strictColor}
                                color={color}
                                title={curr.title}
                                action={changeColorEvent}
                            />
                        );
                    })}
                </div>
            </div>
            <div className='container'>
                <h2>Without Redux - 2</h2>
                <div className={classNames('box')}>
                    <WithoutRedux1 action={addNumberEvent} />
                    <WithoutRedux2 num={num} />
                </div>
            </div>
        </div>
    );
}
export default WithoutReduxRoot;
