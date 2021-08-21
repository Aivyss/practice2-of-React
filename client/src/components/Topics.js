import React, {useEffect, useState} from 'react';
import {NavLink, Route, Switch} from 'react-router-dom';
import OneTopic from './OneTopic';

let topicListFromServer = [
    {
        key: 1,
        id: 'html',
        title: 'HTML',
        description: 'HTML에 관한 내용 기술',
    },
    {
        key: 2,
        id: 'js',
        title: 'JS',
        description: 'JS에 관한 내용 기술',
    },
    {
        key: 3,
        id: 'react',
        title: 'REACT',
        description: 'REACT에 관한 내용 기술',
    },
];

function Topics(props) {
    let [topicList, setTopicList] = useState([]);

    useEffect(() => {
        setTopicList(topicListFromServer);
    }, []);

    return (
        <div className='container'>
            <h3>topics</h3>
            <ul>
                {topicList.map(curr => {
                    return (
                        <li key={curr.key}>
                            <NavLink to={'/topics/' + curr.id}>{curr.title}</NavLink>
                        </li>
                    );
                })}
            </ul>
            <div className='container'>
                <Switch>
                    <Route exact path='/topics'>
                        topics 메인페이지
                    </Route>
                    <Route path='/topics/:id'>
                        <OneTopic topicList={topicList} />
                    </Route>
                </Switch>
            </div>
        </div>
    );
}

export default Topics;
