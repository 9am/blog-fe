/**
 * @file Navigator
 * @author 9am(gbgogb@gmail.com)
 */

import '../styles/navigator.less';

import React from 'react';
import { Link } from 'react-router';
import PathText from './PathText';

class Navigator extends React.Component {

    static get navigatorData() {
        return [
            {
                link: '/',
                name: 'Home'
            },
            {
                link: '/portfolio',
                name: 'Portfolio'
            },
            {
                link: '/blog',
                name: 'Blog'
            },
            {
                link: '/about',
                name: 'About'
            }
        ];
    }

    constructor(props) {
        super(props);
        this.clickAvatarHandler = this.clickAvatarHandler.bind(this);
        let styles = [];
        for (let i = 0; i < Navigator.navigatorData.length; i++) {
            styles.push({
                top: 0,
                left: 0,
                transitionDelay: 0
            });
        }
        this.state = {
            zoom: false,
            styles: styles
        };
    }

    clickAvatarHandler() {
        const num = Navigator.navigatorData.length;
        const r = 120;
        const sAngle = 15;
        const hc = 180;
        let theta = (hc - sAngle * 2) / (num - 1);
        let styles = [];
        for (let i = 0; i < num; i++) {
            let angle = (sAngle + theta * i) * Math.PI / hc;
            let transitionDelay = i * 30 + 'ms';
            let style = this.state.zoom
                ? {
                    left: 0,
                    top: 0,
                    transitionDelay: transitionDelay
                }
                : {
                    left: -Math.cos(angle) * r,
                    top: -Math.sin(angle) * r,
                    transitionDelay: transitionDelay
                };
            styles.push(style);
        }

        this.setState({
            zoom: !this.state.zoom,
            styles: styles
        });
    }

    render() {
        let that = this;
        let list = Navigator.navigatorData.map(function (item, i) {
            return (
                <li key={item.name} className="n-item" style={that.state.styles[i]}>
                    <Link to={item.link}>
                        <PathText w="80" h="80" r="14">{item.name}</PathText>
                    </Link>
                </li>
            );
        });
        return (
            <div className="navigator">
                <img
                    className="avatar"
                    src="assets/img/dog.jpg"
                    title="9am"
                    alt="avatar"
                    onClick={this.clickAvatarHandler}/>
                <ul className="n-list" ref="list">
                    {list}
                </ul>
            </div>
        );
    }
}

export default Navigator;