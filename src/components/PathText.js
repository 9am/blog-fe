/**
 * @file PathText
 * @author 9am(gbgogb@gmail.com)
 */

import React from 'react';

class PathText extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let hw = this.props.w * 0.5;
        let r = this.props.r;
        const d = r * 2;
        const path = [
            'M' + (hw - r) + ' ' + hw,
            'a' + r + ' ' + r + ' 0 1 1 ' + d + ' 0',
            'a' + r + ' ' + r + ' 0 1 1 -' + d + ' 0',
        ].join('');
        return (
            <svg className="path-text"
                width="100%"
                height="100%"
                viewBox={'0 0 ' + this.props.w + ' ' + this.props.h}
                xmlns="http://www.w3.org/2000/svg" 
                xmlnsXlink="http://www.w3.org/1999/xlink">
                <defs>
                    <path id="text-path" d={path} />
                </defs>
                <use xlinkHref="#text-path" fill="rgba(0, 0, 0, 0.5)" />
                <text fontSize="14" fontWeight="900" stroke="white">
                    <textPath xlinkHref="#text-path">
                        {this.props.children}
                    </textPath>
                </text>
            </svg>
        );
    }
}

export default PathText;