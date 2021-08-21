import React from 'react';
import WithRedux1 from './WithRedux1';
import WithRedux2 from './WithRedux2';
/*
    (1) store를 만든다
    (2) reducer를 만들어 store에 주입
 */
function ApplyRedux() {
    return (
        <div className='container'>
            <h2>With Redux</h2>
            <div className='box'>
                <WithRedux1 />
                <WithRedux2 />
            </div>
        </div>
    );
}

export default ApplyRedux;
