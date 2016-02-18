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
        // handle 'this' in scroll
        this.scrollHanlder = this.scrollHanlder.bind(this);
        // active item by state
        let active = {};
        this.props.route.list.forEach(function (item) {
            active[item.key] = false;
        });
        this.state = {
            active: active
        };
    }

    componentDidMount() {
        window.addEventListener('scroll', this.scrollHanlder);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.scrollHanlder);
    }

    scrollHanlder(e) {
        let top = document.body.scrollTop;
        let bottom = top + window.innerHeight;
        for (let k in this.refs) {
            let item = findDOMNode(this.refs[k]);
            let rect = item.getBoundingClientRect(); 
            let middle = top + rect.top + rect.height * 0.5;
            // show item
            if (middle > top && middle < bottom) {
                // avoid multi active
                delete this.refs[k];
                // draw
                let state = this.state;
                state.active[k] = true;
                this.setState(state);
            }
        }
    }

    render() {
        var that = this;
        var items = this.props.route.list.map(function (item, i) {
            // format svg path data
            if (!item.path.match(/M/)) {
                item.path = item.path.replace(/\s/g, " L");
                item.path = item.path === '' ? "0,0" : item.path;
                item.path = 'M' + item.path;
            }
            return (
                <li key={item.key}>
                    <PortfolioItem
                        ref={item.key}
                        data={item}
                        isActived={that.state.active[item.key]}>
                    </PortfolioItem>
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