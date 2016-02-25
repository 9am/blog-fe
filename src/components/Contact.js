/**
 * @file Contact
 * @author 9am(gbgogb@gmail.com)
 */

import '../styles/contact.less';

import React from 'react';

class Contact extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="contact">
                <p>contact me via <a href="mailto:gbgogb@gmail.com">Email</a></p>
            </div>
        );
    }
}

export default Contact;