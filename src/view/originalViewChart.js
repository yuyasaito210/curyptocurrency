
import React from 'react';
import Chart from '../component/chart';
import { getData } from '../component/utils'
import { TypeChooser } from "react-stockcharts/lib/helper";

class OriginalView extends React.Component {
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
				{type => <Chart type={type} data={this.state.data} />}
			</TypeChooser>
		)
	}
}

export default OriginalView;
