/**
 * @file Portfolio
 * @author 9am(gbgogb@gmail.com)
 */

import '../styles/portfolio.less';

import React from 'react';

class Portfolio extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { name } = this.props.params;
        let { timestamp } = this.props.location.query;
        // TODO use timestamp to seperate old from new
        let url = timestamp
            ? 'http://gaobo.sinaapp.com/portfolio/'
            : 'static/';
        let style = {
            height: '100vh'
        };
        if (timestamp) {
            style.minHeight = '720px';
        }
        return (
            <div className="iframe-container">
                <iframe className="iframe-page" src={url + name} style={style}></iframe>
            </div>
        );
    }
}

export default Portfolio;