/**
 * @file PortfolioList
 * @author 9am(gbgogb@gmail.com)
 */

import '../styles/portfolioList.less';

import React from 'react';
import { findDOMNode } from 'react-dom';
import PortfolioItem from './PortfolioItem';

class PortfolioList extends React.Component {
    constructor(props) {
        super(props);
        this.scrollHanlder = this.scrollHanlder.bind(this);
    }

    scrollHanlder(e) {
        let top = document.body.scrollTop;
        let bottom = top + window.innerHeight;
        for (let k in this.refs) {
            let item = findDOMNode(this.refs[k]);
            let rect = item.getBoundingClientRect();
            let middle = top + rect.top + rect.height * 0.5;
            if (middle > top && middle < bottom) {
                console.log(this.refs[k].props.data.title);
                // TODO draw
            }
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.scrollHanlder);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.scrollHanlder);
    }

    render() {
        var items = this.props.route.list.map(function (item, i) {
            if (!item.path.match(/M/)) {
                item.path = item.path.replace(/\s/g, " L");
                item.path = item.path === '' ? "0,0" : item.path;
                item.path = 'M' + item.path;
            }
            return (
                <li key={item.title}>
                    <PortfolioItem ref={'portfolioItem' + i} data={item}></PortfolioItem>
                </li>
            )
        });
        return (
            <div className="portfolio-list">
                <h1>PortfolioList</h1>
                <ul>
                    {items}
                </ul>
            </div>
        );
    }
}

export default PortfolioList;