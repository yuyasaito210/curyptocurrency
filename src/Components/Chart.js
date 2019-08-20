
import React from "react";
import PropTypes from "prop-types";


import { format } from "d3-format";
import { timeFormat } from "d3-time-format";
import { Nav } from 'react-bootstrap'

import { ChartCanvas, Chart } from "react-stockcharts";
import {
	BarSeries,
	CandlestickSeries,
} from "react-stockcharts/lib/series";
import { XAxis, YAxis } from "react-stockcharts/lib/axes";

import { discontinuousTimeScaleProvider } from "react-stockcharts/lib/scale";
import { fitWidth } from "react-stockcharts/lib/helper";
import { last } from "react-stockcharts/lib/utils";
import { OHLCTooltip } from "react-stockcharts/lib/tooltip";
import { TrendLine, DrawingObjectSelector } from "react-stockcharts/lib/interactive";

import { toObject } from "react-stockcharts/lib/utils";

import {
	saveInteractiveNodes,
	getInteractiveNodes,
} from "./interactiveutils";


import {
	CrossHairCursor,
	MouseCoordinateX,
	MouseCoordinateY
} from "react-stockcharts/lib/coordinates";
import ToolTip from "./ToolTip";
import '../css/chart.css'

class CandleStickStockScaleChartWithVolumeBarV3 extends React.Component {
	constructor(props) {
		super(props);
		this.onKeyPress = this.onKeyPress.bind(this);
		this.onDrawCompleteChart1 = this.onDrawCompleteChart1.bind(this);
		this.onDrawCompleteChart3 = this.onDrawCompleteChart3.bind(this);
		this.handleSelection = this.handleSelection.bind(this);

		this.saveInteractiveNodes = saveInteractiveNodes.bind(this);
		this.getInteractiveNodes = getInteractiveNodes.bind(this);

		this.saveCanvasNode = this.saveCanvasNode.bind(this);

		this.state = {
			enableTrendLine: false,
			trends_1: [
				{ start: [1606, 56], end: [1711, 53], appearance: { stroke: "red" }, type: "XLINE" }
			],
			trends_3: []
		};
	}
	saveCanvasNode(node) {
		this.canvasNode = node;
	}
	componentDidMount() {
		document.addEventListener("keyup", this.onKeyPress);
	}
	componentWillUnmount() {
		document.removeEventListener("keyup", this.onKeyPress);
	}
	handleSelection(interactives) {
		const state = toObject(interactives, each => {
			return [
				`trends_${each.chartId}`,
				each.objects,
			];
		});
		this.setState(state);
	}
	onDrawCompleteChart1(trends_1) {
		// this gets called on
		// 1. draw complete of trendline
		// 2. drag complete of trendline
		console.log(trends_1);
		this.setState({
			enableTrendLine: false,
			trends_1
		});
	}
	onDrawCompleteChart3(trends_3) {
		// this gets called on
		// 1. draw complete of trendline
		// 2. drag complete of trendline
		console.log(trends_3);
		this.setState({
			enableTrendLine: false,
			trends_3
		});
	}
	onKeyPress(e) {
		const keyCode = e.which;
		console.log(keyCode);
		switch (keyCode) {
		case 46: { // DEL

			const trends_1 = this.state.trends_1
				.filter(each => !each.selected);
			const trends_3 = this.state.trends_3
				.filter(each => !each.selected);

			// this.canvasNode.cancelDrag();
			this.setState({
				trends_1,
				trends_3,
			});
			break;
		}
		case 27: { // ESC
			this.node_1.terminate();
			this.node_3.terminate();
			// this.canvasNode.cancelDrag();
			this.setState({
				enableTrendLine: false
			});
			break;
		}
		case 68:   // D - Draw trendline
		case 69: { // E - Enable trendline
			this.setState({
				enableTrendLine: true
			});
			break;
		}
		}
	}
	openFullscreen = () => {
        let elem = document.getElementById('app')
        if (elem != null) {
            if (elem.requestFullscreen) {
                elem.requestFullscreen();
            }
        }
	}
	drawTrendLine = () => {
		this.setState({
			enableTrendLine: true
		});
	}
	render() {
		const { type, data: initialData, width, ratio } = this.props;
		const { gridProps } = this.props;
		const xScaleProvider = discontinuousTimeScaleProvider
			.inputDateAccessor(d => d.date);
		const {
			data,
			xScale,
			xAccessor,
			displayXAccessor,
		} = xScaleProvider(initialData);

		const start = xAccessor(last(data));
		const end = xAccessor(data[Math.max(0, data.length - 100)]);
		const xExtents = [start, end];
		const margin = { left: 50, right: 50, top: 10, bottom: 30 }

		const candlesAppearance = {
			wickStroke: "#000000",
			fill: function fill(d) {
			  return d.close > d.open ? "rgba(0, 141, 79, 1)" : "rgba(188, 29, 62, 1)";
			},
			stroke: "#000000",
			candleStrokeWidth: 1,
			widthRatio: 0.8,
			opacity: 1,
		  }

		  const height = 500;
		  const gridHeight = height - margin.top - margin.bottom;
		  const gridWidth = width - margin.left - margin.right;
  
		  const showGrid = true;
		  const yGrid = showGrid ? { innerTickSize: -1 * gridWidth, tickStrokeDasharray: 'ShortDot', tickStrokeOpacity: 0.2, tickStrokeWidth: 1 } : {};
		  const xGrid = showGrid ? { innerTickSize: -1 * gridHeight, tickStrokeDasharray: 'ShortDot', tickStrokeOpacity: 0.2, tickStrokeWidth: 1 } : {};
	
		return (
			<div>
			<div className="nav-div-2">
                    <Nav.Item>
                        <Nav.Link onClick={this.drawTrendLine}><img src={require('../assets/images/line-chart.png')} alt="icon" /></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link><img src={require('../assets/images/capital-t.png')} alt="icon" /></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link><img src={require('../assets/images/cursor.png')} alt="icon" /></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link><img src={require('../assets/images/pitchfork.png')} alt="icon" /></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link><img src={require('../assets/images/settings.png')} alt="icon" /></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link><img src={require('../assets/images/photo-camera.png')} alt="icon" /></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link onClick={this.openFullscreen}><img src={require('../assets/images/full-size.png')} alt="icon" /></Nav.Link>
                    </Nav.Item>
                </div>
			<ChartCanvas height={500}
				ratio={ratio}
				width={width}
				margin={margin}
				type={type}
				seriesName="MSFT"
				data={data}
				xScale={xScale}
				xAccessor={xAccessor}
				displayXAccessor={displayXAccessor}
				xExtents={xExtents}
			>

				<Chart id={1} height={400} yExtents={d => [d.high, d.low]} >
					<YAxis axisAt="right" orient="right" ticks={5} {...gridProps} {...yGrid}/>
					<XAxis axisAt="bottom" orient="bottom" showTicks={false} {...gridProps} {...xGrid}/>
					<MouseCoordinateY
						at="right"
						orient="right"
						displayFormat={format(".2f")}
					/>
					<CandlestickSeries {...candlesAppearance}/>
					<OHLCTooltip className="xyz" forChart={1} origin={[-40, 0]} />
					<TrendLine
						ref={this.saveInteractiveNodes("Trendline", 1)}
						enabled={this.state.enableTrendLine}
						type="RAY"
						snap={false}
						snapTo={d => [d.high, d.low]}
						onStart={() => console.log("START")}
						onComplete={this.onDrawCompleteChart1}
						trends={this.state.trends_1}
					/>
				</Chart>
				<Chart id={2} origin={(w, h) => [0, h - 150]} height={150} yExtents={d => d.volume}>
					<XAxis axisAt="bottom" orient="bottom"/>
					<YAxis axisAt="left" orient="left" ticks={5} tickFormat={format(".2s")}/>
					<MouseCoordinateX
						at="bottom"
						orient="bottom"
						displayFormat={timeFormat("%Y-%m-%d")}
					/>
					<MouseCoordinateY
						at="left"
						orient="left"
						displayFormat={format(".4s")}
					/>
					<BarSeries yAccessor={d => d.volume} fill={(d) => d.close > d.open ? "#008c4f" : "#bc1d3e"} />
				</Chart>
				<CrossHairCursor />
				<DrawingObjectSelector
					enabled={!this.state.enableTrendLine}
					getInteractiveNodes={this.getInteractiveNodes}
					drawingObjectMap={{
						Trendline: "trends"
					}}
					onSelect={this.handleSelection}
				/>
			</ChartCanvas>
			</div>
		);
	}
}
CandleStickStockScaleChartWithVolumeBarV3.propTypes = {
	data: PropTypes.array.isRequired,
	width: PropTypes.number.isRequired,
	ratio: PropTypes.number.isRequired,
	type: PropTypes.oneOf(["svg", "hybrid"]).isRequired,
};

CandleStickStockScaleChartWithVolumeBarV3.defaultProps = {
	type: "svg",
};
CandleStickStockScaleChartWithVolumeBarV3 = fitWidth(CandleStickStockScaleChartWithVolumeBarV3);

export default CandleStickStockScaleChartWithVolumeBarV3;
