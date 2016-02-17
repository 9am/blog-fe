/**
 * @file Navigator
 * @author 9am(gbgogb@gmail.com)
 */

import React from 'react';
import { Link } from 'react-router';

class Navigator extends React.Component {
    render() {
        return (
            <div>
                <h1>Navigator</h1>
                <ul>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/portfolio">Portfolio</Link></li>
                </ul>
            </div>
        );
    }
}

export default Navigator;