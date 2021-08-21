import React, {useEffect, useState} from 'react';

function TestComponent(props) {
    let [count, setCount] = useState(0);
    let [countArray, setCountArray] = useState([]);

    console.log(typeof countArray);

    const clickEvent = () => {
        setCount(++count);
    };

    useEffect(() => {
        console.log('useEffect is executed');
        countArray.push(count);
        setCountArray(countArray);
    }, [count]);

    return (
        <div className='container'>
            <p>count: {count}</p>
            {countArray.map(curr => {
                return <div className='container'>beforeCount: {curr}</div>;
            })}
            <button onClick={clickEvent}>클릭</button>
        </div>
    );
}

export default TestComponent;
