/**
 * @file PortfolioItem
 * @author 9am(gbgogb@gmail.com)
 */

import React from 'react';
import { Link } from 'react-router';

class PortfolioItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeClass: '',
        };
    }

    componentWillReceiveProps(newProps) {
        if (newProps.isActived !== this.props.isActived && newProps.isActived) {
            // active just one time
            this.activeSketch();
        }
    }

    activeSketch() {
        this.setState({
            activeClass: 'active'
        });
        let path = this.refs.path;
        let length = path.getTotalLength();

        path.style.strokeDasharray = length + ' ' + length;
        path.style.strokeDashoffset = length;
        path.getBoundingClientRect();
        path.style.transition = 'stroke-dashoffset 5s ease-in-out';
        path.style.strokeDashoffset = '0';
    }

    render() {
        let tags = this.props.data.tag.map(function (tag) {
            return (
                <span key={tag}>{tag}</span>
            );
        });
        let redirectUrl = 'portfolio/' + this.props.data.key;
        let query = {
            timestamp: this.props.data.timestamp
        };
        let dateStr = new Date(this.props.data.timestamp).toString().substr(4, 11);
        let className = this.props.isActived ? 'active' : '';

        return (
            <div className={'portfolio-item ' + this.state.activeClass}>
                <Link className='sketch' to={redirectUrl} query={query}>
                    <svg>
                        <path ref='path' className='path' d={this.props.data.path} fill='none'/>
                    </svg>
                </Link>
                <h2 className='title'>
                    <Link to={redirectUrl} query={query}>{this.props.data.title}</Link>
                    <span className='date'>{dateStr}</span>
                </h2>
                <div className='tag'>
                    {tags}
                </div>
                <p className='desc'>{this.props.data.desc}</p>
            </div>
        );
    }
}

export default PortfolioItem;