/**
 * @file Footer
 * @author 9am(gbgogb@gmail.com)
 */

import '../styles/footer.less'

import React from 'react';
import Fragment from './Fragment';

class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <footer className="footer">
                <h1>footer</h1>
                <Fragment></Fragment>
            </footer>
        );
    }
}

export default Footer;