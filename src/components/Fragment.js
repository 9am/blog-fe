/**
 * @file Fragment
 * @author 9am(gbgogb@gmail.com)
 */

import '../styles/fragment.less';

import React from 'react';

/**
 * 点
 */
class Point {
    static OFFSET() {
        return 3;
    }

    constructor(x, y) {
        this._x = x;
        this._y = y;
    }

    get x() {
        return this._x;
    }

    get y() {
        return this._y;
    }

    randomPoint() {
        this._x += (Math.random() * 2 - 1) * Point.OFFSET();
        this._y += (Math.random() * 2 - 1) * Point.OFFSET();
    }
}

/**
 * 组成碎片的形状
 */
class Polygon extends React.Component{
    render() {
        var points = [
            this.props.p1.x + ',' + this.props.p1.y,
            this.props.p2.x + ',' + this.props.p2.y,
            this.props.p3.x + ',' + this.props.p3.y,
        ].join(' ');
        return (
            <polygon className="f-polygon" points={points} fill={this.props.fill}></polygon>
        );
    }
}

/**
 * 碎片
 */
class Fragment extends React.Component {

    static get darkColor() {
        return ['#EB8B2C', '#1DC567', '#16A085', '#F39C12',
        '#8E44AD', '#EA6153', '#FF623F','#84CEED',
        '#DD6E93', '#00FA9A', '#7B68EE', '#FFA076',
        '#FFB5C0', '#FF66B4', '#FADA5E', '#FFD800'];
    }

    static get brightColor() {
        return ['#00008B', '#181372', '#2F4F4F', '#4C0084',
        '#2C3E50', '#9F1D35','#123524', '#01796F'];
    }

    static get defaultProps() {
        return {
            width: '100%',
            height: 600,
            blockSize: 100,
            step: 10
        }
    }

    constructor(props) {
        super(props);
        this.state = {
            polygons: this.getPolygons(this.props.blockSize, this.props.blockSize, this.props.step)
        };
    }

    getPolygons(w, h, step) {
        let that = this;
        let polygons = [];
        let hPart = w / step;
        let vPart = h / step;
        let pointsArr = [];
        step += 1;
        let colorArr = this.randomColor(
            Fragment.darkColor[this.randomInt(Fragment.darkColor.length)],
            Fragment.brightColor[this.randomInt(Fragment.brightColor.length)]
        );

        // 初始化所有点
        for (let j = 0; j < step; j++) {
            for (let i = 0; i < step; i++) {
                let point = new Point(i * hPart, j * vPart);
                if(i !== 0 && j !== 0 && i !== step - 1 && j !== step - 1) {
                    point.randomPoint();
                }
                pointsArr[i + j * step] = point;
            }
        }

        for (let j = 0; j < step - 1; j++) {
            for (let i = 0; i < step - 1; i++) {
                let [x, y, z, a, b, c] = Math.random() > .5
                    ? [0, 0, 1, 0, 1, 1]
                    : [1, 1, 0, 0, 1, 0];
                let jStep = j * step;
                let jPlusStep = (j + 1) * step;
                polygons.push(
                    <Polygon
                        key={i + '-' + jStep}
                        p1={pointsArr[i + x + jStep]}
                        p2={pointsArr[i + y + jPlusStep]}
                        p3={pointsArr[i + z + jPlusStep]}
                        fill={colorArr[that.randomInt(colorArr.length)]}>
                    </Polygon>
                );
                polygons.push(
                    <Polygon
                        key={jPlusStep + '-' + i}
                        p1={pointsArr[i + a + jStep]}
                        p2={pointsArr[i + b + jStep]}
                        p3={pointsArr[i + c + jPlusStep]}
                        fill={colorArr[that.randomInt(colorArr.length)]}>
                    </Polygon>
                );
            }
        }

        return polygons;
    }

    // 随机颜色
    randomColor(dColor, bColor) {
        let result = [];
        let step = 32;
        let dRGB = this.Hex2RGB(dColor);
        let bRGB = this.Hex2RGB(bColor);
        let rOffset = (bRGB[0] - dRGB[0]) / step;
        let gOffset = (bRGB[1] - dRGB[1]) / step;
        let bOffset = (bRGB[2] - dRGB[2]) / step;
        for (let i = 1; i < step + 1; i++) {
            result.push([
                'rgb(',
                Math.floor(dRGB[0] + rOffset * i),
                ',',
                Math.floor(dRGB[1] + gOffset * i),
                ',',
                Math.floor(dRGB[2] + bOffset * i),
                ')'].join('')
            );
        }
        return result;
    }

    Hex2RGB(hex) {
        hex = hex.replace("#", "");
        let result = parseInt(hex, 16);
        let r = (result >> 16) & 0xff;
        let g = (result >> 8) & 0xff;
        let b = result & 0xff;
        return [r, g, b];
    }

    randomInt(max) {
        return Math.floor(Math.random() * max);
    }

    render() {
        let viewBox = [0, 0, this.props.blockSize, this.props.blockSize].join(' ');
        return (
            <svg className="fragment"
                version="1.1"
                preserveAspectRatio="xMidYMid slice"
                viewBox={viewBox}
                width={this.props.width}
                height={this.props.height}>
                {this.state.polygons}
            </svg>
        );
    }
}

export default Fragment;