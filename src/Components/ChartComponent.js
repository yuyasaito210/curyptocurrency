
import React from 'react';
import { getData } from "../utils"
import Chart from './Chart'

import { TypeChooser } from "react-stockcharts/lib/helper";

class ChartComponent extends React.Component {
	constructor(props) {
		super(props);
		this.child = React.createRef();
	  }
	componentDidMount() {
		getData().then(data => {
			this.setState({ data })
		})
	}

	render() {
		console.log(this.props.drawTrendLine)
		if (this.state == null) {
			return <div>Loading...</div>
		}
		return (
			<TypeChooser>
				{type => <Chart type={type}  data={this.state.data} />}
			</TypeChooser>
		)
	}
}

export default ChartComponent
