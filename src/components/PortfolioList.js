/**
 * @file PortfolioList
 * @author 9am(gbgogb@gmail.com)
 */

import React from 'react';
import PortfolioItem from './PortfolioItem';

class PortfolioList extends React.Component {
    render() {
        var items = this.props.route.list.map(function (item) {
            // each child in an array should have a 'key' prop.
            return (
                <li key={item.title}>
                    <PortfolioItem data={item}></PortfolioItem>
                </li>
            )
        });
        return (
            <div>
                <h1>PortfolioList</h1>
                <ul>
                    {items}
                </ul>
            </div>
        );
    }
}

export default PortfolioList;