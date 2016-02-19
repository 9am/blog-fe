/**
 * @file Navigator
 * @author 9am(gbgogb@gmail.com)
 */

import '../styles/navigator.less';

import React from 'react';
import { Link } from 'react-router';

class Navigator extends React.Component {

    static get itemNum() {
        return 4;
    }

    constructor(props) {
        super(props);
        this.clickAvatarHandler = this.clickAvatarHandler.bind(this);
        let styles = [];
        for (let i = 0; i < Navigator.itemNum; i++) {
            styles.push({
                top: 0,
                left: 0
            });
        }
        this.state = {
            zoom: false,
            styles: styles
        };
    }

    clickAvatarHandler() {
        const num = Navigator.itemNum;
        const r = 100;
        const sAngle = 15;
        const hc = 180;
        let theta = (hc - sAngle * 2) / (num - 1);
        let styles = [];
        for (let i = 0; i < num; i++) {
            let angle = (sAngle + theta * i) * Math.PI / hc;
            let style = this.state.zoom
                ? {
                    left: 0,
                    top: 0
                }
                : {
                    left: -Math.cos(angle) * r,
                    top: -Math.sin(angle) * r
                };
            styles.push(style);
        }

        this.setState({
            zoom: !this.state.zoom,
            styles: styles
        });
    }

    render() {
        return (
            <div className="navigator">
                <img
                    className="avatar"
                    src="assets/img/dog.jpg"
                    title="9am"
                    alt="avatar"
                    onClick={this.clickAvatarHandler}/>
                <ul className="n-list" ref="list">
                    <li className="n-item" style={this.state.styles[0]}><Link to="/">Home</Link></li>
                    <li className="n-item" style={this.state.styles[1]}><Link to="/portfolio">Portfolio</Link></li>
                    <li className="n-item" style={this.state.styles[2]}><Link to="/blog">Blog</Link></li>
                    <li className="n-item" style={this.state.styles[3]}><Link to="/about">About</Link></li>
                </ul>
            </div>
        );
    }
}

export default Navigator;