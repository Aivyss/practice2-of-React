import './App.css';
import React from 'react';
import ClassComp from './components/ClassComp';
import FuncComp from './components/FuncComp';
import TestComponent from './components/TestComponent';
import Home from './components/Home';
import Topics from './components/Topics';
import Contact from './components/Contact';
import {Route, Switch} from 'react-router-dom';
import Index from './components/Index';
import WithoutReduxRoot from './components/WithoutReduxRoot';
import ApplyRedux from './components/redux_practice/ApplyRedux';
import PACComp from './components/redux_practice/PresentAndContainer/PACComp';

const indexListFromServer = [
    {
        key: 0,
        id: '/topics',
        content: 'Topics',
    },
    {
        key: 1,
        id: '/contact',
        content: 'Contact',
    },
    {key: 2, id: '/react-hook', content: 'React-Hook'},
    {key: 3, id: '/redux', content: 'Without Redux'},
    {key: 4, id: '/redux2', content: 'Redux'},
    {key: 5, id: '/containers', content: 'Presentational And Container Component'},
];

function App() {
    return (
        <div className='container'>
            <h1>Hello World</h1>
            <div>
                <Index indexList={indexListFromServer}></Index>
                <Switch>
                    <Route exact path='/'>
                        <Home />
                    </Route>
                    <Route path='/topics'>
                        <Topics />
                    </Route>
                    <Route path='/contact'>
                        <Contact />
                    </Route>
                    <Route path='/react-hook'>
                        <FuncComp initNum={2} />
                        <ClassComp initNum={2} />
                        <TestComponent />
                    </Route>
                    <Route path='/redux'>
                        <WithoutReduxRoot />
                    </Route>
                    <Route path='/redux2'>
                        <ApplyRedux />
                    </Route>
                    <Route path='/containers'>
                        <PACComp />
                    </Route>
                    <Route path='/'>Not Found</Route>
                </Switch>
            </div>
        </div>
    );
}

export default App;
