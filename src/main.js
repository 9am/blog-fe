/**
 * @file main
 * @author 9am(gbgogb@gmail.com)
 */

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import Home from './components/Home';
import About from './components/About';
import PortfolioList from './components/PortfolioList';
import Portfolio from './components/Portfolio';
import NoMatch from './components/NoMatch';

var listData = [
    {
        title: '1111111',
        timestamp: '1455593323726',
        desc: '11',
        tag: [
            'aa',
            'bb',
            'cc',
        ],
        link: 'static/1/'
    },
    {
        title: '222222',
        timestamp: '1455593323900',
        desc: '22',
        tag: [
            'dd',
            'ee',
            'ff',
        ],
        link: 'static/2/'
    }
];

render((
    <Router history={browserHistory}>
        <Route path="/" component={Home}>
            <Route path="about" component={About}/>
            <Route path="portfolio" component={PortfolioList} list={listData}/>
            <Route path="portfolio/:name" component={Portfolio}/>
            <Route path="*" component={NoMatch}/>
        </Route>
    </Router>
), document.getElementById('route-container'));