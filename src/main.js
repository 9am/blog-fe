/**
 * @file main
 * @author 9am(gbgogb@gmail.com)
 */

import './styles/main.less';
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import Home from './components/Home';
import About from './components/About';
import PortfolioList from './components/PortfolioList';
import Portfolio from './components/Portfolio';
import BlogList from './components/BlogList';
import NoMatch from './components/NoMatch';
// import pData from './pData'; // portfolio data, this will be in DB when backend ready.

var pData = [
  {
    key: 'tagcloud',
    title: "1234123412341234",
    timestamp: 1455695682272,
    desc: "aergaerfaervawrefawefawerawrfawe",
    tag: [
      "zzzz"
    ],
    path: '152.75,127.75 99.0,172.5 157.0,174.0 209.0,166.0 155.5,124.5 198.5,147.5 192.5,154.0 '
        + '281.5,45.5 217.0,172.0 210.0,166.5 224.5,177.5 166.0,248.5 83.0,178.0 99.0,173.5 94.5,174.5 60.0,94.0 16.0,111.0 '
        + '58.5,85.0 74.5,84.0 117.5,156.0 113.0,146.5 152.75,125.5 112.5,145.5 74.0,85.5 55.5,77.5 19.0,109.0 56.5,87.0 '
        + '95.5,173.0 82.5,179.0 167.0,249.0 159.0,174.0 208.5,167.0 155.5,124.5 142.0,19.0 94.0,113.0 142.0,17.5 '
        + '207.0,118.0 210.5,132.5 198.0,146.5 155.0,125.75'
  },
  {
    key: 'bird',
    title: "4567456745674567",
    timestamp: 1455695682272,
    desc: "bnbsefbsergwergwergwergqergwergwerg",
    tag: [
      "aaaa",
      "bbbb",
      "cccc"
    ],
    path: '152.75,127.75 99.0,172.5 157.0,174.0 209.0,166.0 155.5,124.5 198.5,147.5 192.5,154.0 '
        + '281.5,45.5 217.0,172.0 210.0,166.5 224.5,177.5 166.0,248.5 83.0,178.0 99.0,173.5 94.5,174.5 60.0,94.0 16.0,111.0 '
        + '58.5,85.0 74.5,84.0 117.5,156.0 113.0,146.5 152.75,125.5 112.5,145.5 74.0,85.5 55.5,77.5 19.0,109.0 56.5,87.0 '
        + '95.5,173.0 82.5,179.0 167.0,249.0 159.0,174.0 208.5,167.0 155.5,124.5 142.0,19.0 94.0,113.0 142.0,17.5 '
        + '207.0,118.0 210.5,132.5 198.0,146.5 155.0,125.75'
  }
];

render((
    <Router history={browserHistory}>
        <Route path="/" component={Home}>
            <Route path="about" component={About}/>
            <Route path="portfolio" component={PortfolioList} list={pData}/>
            <Route path="portfolio/:name" component={Portfolio}/>
            <Route path="blog" component={BlogList}/>
            <Route path="*" component={NoMatch}/>
        </Route>
    </Router>
), document.getElementById('route-container'));