import React from 'react';
import WithRedux3 from '../../../containers/WithRedux3';
import WithRedux4 from '../../../containers/WithRedux4';
import classNames from 'classnames';

export default function PACComp() {
    return (
        <div className={classNames('container', 'box')}>
            <WithRedux3 />
            <WithRedux4 />
        </div>
    );
}
