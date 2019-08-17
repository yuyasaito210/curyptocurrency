
import React from 'react';
import { getData } from "../utils"

import { TypeChooser } from "react-stockcharts/lib/helper";
import ChartWrapper from './ChartWrapper';

class ChartComponent extends React.Component {
	componentDidMount() {
		getData().then(data => {
			this.setState({ data })
		})
	}
	render() {
		if (this.state == null) {
			return <div>Loading...</div>
		}
		return (
			
			<TypeChooser>
				{type => <ChartWrapper type={type}  data={this.state.data} />}
			</TypeChooser>
		)
	}
}

export default ChartComponent
