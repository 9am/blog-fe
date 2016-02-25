/**
 * @file NoMatch
 * @author 9am(gbgogb@gmail.com)
 */

import React from 'react';

class NoMatch extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1 style={{color:'red'}}>No Match</h1>
            </div>
        );
    }
}

export default NoMatch;