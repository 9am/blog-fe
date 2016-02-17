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
        return (
            <header className="header">
                <h1>header</h1>
                <Fragment></Fragment>
            </header>
        );
    }
}

export default Header;