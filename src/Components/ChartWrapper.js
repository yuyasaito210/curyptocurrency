import React from 'react'
import useDimensions from 'react-use-dimensions'
import Chart from './Chart'

function ChartWrapper(props) {
    const [ref, { width, height }] = useDimensions()
    return (
        <div ref={ref} style={{ width: '100%', height: '100%' }}>
            <Chart height={height} width={width} type={props.type} data={props.data} />
        </div>
    )
}

export default ChartWrapper