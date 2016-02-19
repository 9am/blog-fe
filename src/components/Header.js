/**
 * @file Header
 * @author 9am(gbgogb@gmail.com)
 */

import '../styles/header.less'

import React from 'react';
import Fragment from './Fragment';
import Navigator from './Navigator';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let headerStyle = {
            maxHeight: this.props.zoomIn ? 100 : 600
        };
        let navigator = this.props.zoomIn
            ? ('')
            : (<Navigator></Navigator>);
        return (
            <header className="header" style={headerStyle}>
                <Fragment></Fragment>
                {navigator}
            </header>
        );
    }
}

export default Header;