/**
 * @file Footer
 * @author 9am(gbgogb@gmail.com)
 */

import '../styles/footer.less'

import React from 'react';
import Fragment from './Fragment';
import Contact from './Contact';

class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let style = {
            maxHeight: this.props.zoomIn ? 100 : 600
        };
        return (
            <footer className="footer" style={style}>
                <Fragment></Fragment>
                <Contact></Contact>
            </footer>
        );
    }
}

export default Footer;