import React from 'react';
import {NavLink} from 'react-router-dom';

function Index(props) {
    return (
        <ul>
            <li>
                <NavLink exact to='/'>
                    Home
                </NavLink>
            </li>
            {props.indexList.map(curr => {
                return (
                    <li key={curr.key}>
                        <NavLink to={curr.id}>{curr.content}</NavLink>
                    </li>
                );
            })}
        </ul>
    );
}

export default Index;
