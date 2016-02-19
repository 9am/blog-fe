/**
 * @file Header
 * @author 9am(gbgogb@gmail.com)
 */

import '../styles/header.less'

import React from 'react';
import Fragment from './Fragment';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let style = {
            maxHeight: this.props.zoomIn ? '100px' : '600px'
        };
        return (
            <header className="header" style={style}>
                <Fragment></Fragment>
            </header>
        );
    }
}

export default Header;