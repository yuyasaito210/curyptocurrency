
import React from "react";
import PropTypes from "prop-types";


import { format } from "d3-format";
import { timeFormat } from "d3-time-format";

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

import {
	CrossHairCursor,
	MouseCoordinateX,
	MouseCoordinateY
} from "react-stockcharts/lib/coordinates";
import ToolTip from "./ToolTip";
import '../css/chart.css'

class CandleStickStockScaleChartWithVolumeBarV3 extends React.Component {
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
					<ToolTip />
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
			</ChartCanvas>
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
