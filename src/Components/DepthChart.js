import React from 'react'
import * as d3 from 'd3'
import '../css/depthChart.css'
import { order_book } from '../dummyData.js'
var _ = require('lodash');

class DepthChart extends React.Component {
    componentDidMount() {
        this.bids('bids')
        this.asks('asks')
    }

    bids = (__id) => {
        var margin = { top: 12, right: 0, bottom: 12, left: 12 },
            width = 530 - margin.left - margin.right,
            height = 520 - margin.top - margin.bottom
        // set the ranges
        var x = d3.scaleBand()
            .range([0, width])
            .padding(0.1)
        var y = d3.scaleLinear()
            .range([height, 0])
        // append the svg object to a div ID
        var svg = d3.select('#' + __id).append('svg')
            .attr('width', width + margin.left + margin.right)
            .attr('height', height + margin.top + margin.bottom)
            .append('g')
            .attr('transform',
                'translate(' + margin.left + ',' + margin.top + ')')
        var prefixSum = function (arr) {
            var builder = function (acc, n) {
                var lastNum = acc.length > 0 ? acc[acc.length - 1] : 0;
                acc.push(lastNum + n);
                return acc;
            };
            return _.reduce(arr, builder, []);
        }
        var data = []
        var __cum_data = []
        // get the data
        var __order_book = order_book
        data = []

        // create cumulative data array
        __cum_data = []
        console.log('__order_book bids', __order_book);
        for (let i = 0; i < __order_book.bids.length; i++) {
            __cum_data.push(__order_book.bids[i].amount)
        }
        var cum_data_array = prefixSum(__cum_data)

        // final data array
        for (let i = 0; i < __order_book.bids.length; i++) {
            data.push({
                idx: __order_book.bids[i].price,
                orders: cum_data_array[i]
            })
        }

        // reverse data for bids
        data = _.reverse(data)
        data.forEach(function (d) {
            d.orders = +d.orders
        })
        // Scale the range of the data in the domains
        x.domain(data.map(function (d) { return d.idx }))
        y.domain([0, d3.max(data, function (d) { return d.orders })])
        svg.selectAll('.bar-bids')
            .remove('rect')
        // append the rectangles for the bar chart
        svg.selectAll('.bar')
            .data(data)
            .enter().append('rect')
            .attr('class', 'bar')
            .attr('class', 'bar-bids')
            .attr('x', function (d) { return x(d.idx) })
            .attr('width', x.bandwidth())
            .attr('y', function (d) { return y(d.orders) })
            .attr('height', function (d) { return height - y(d.orders) })
    }


    asks = (__id) => {
        var margin = { top: 12, right: 12, bottom: 12, left: 0 },
            width = 530 - margin.left - margin.right,
            height = 520 - margin.top - margin.bottom
        // set the ranges
        var x = d3.scaleBand()
            .range([0, width])
            .padding(0.1)
        var y = d3.scaleLinear()
            .range([height, 0])
        // append the svg object to a div ID
        var svg = d3.select('#' + __id).append('svg')
            .attr('width', width + margin.left + margin.right)
            .attr('height', height + margin.top + margin.bottom)
            .append('g')
            .attr('transform',
                'translate(' + margin.left + ',' + margin.top + ')')
        var prefixSum = function (arr) {
            var builder = function (acc, n) {
                var lastNum = acc.length > 0 ? acc[acc.length - 1] : 0;
                acc.push(lastNum + n);
                return acc;
            };
            return _.reduce(arr, builder, []);
        }
        var data = []
        var __cum_data = []
        // get the data
        var __order_book = order_book
        data = []
        __cum_data = []
        console.log('__order_book asks', __order_book);
        for (let i = 0; i < __order_book.asks.length; i++) {
            __cum_data.push(__order_book.asks[i].amount)
        }

        // create cumulative data array
        var cum_data_array = prefixSum(__cum_data)

        // final data array
        for (let i = 0; i < __order_book.asks.length; i++) {
            data.push({
                idx: __order_book.asks[i].price,
                orders: cum_data_array[i]
            })
        }
        data.forEach(function (d) {
            d.orders = +d.orders
        })
        // Scale the range of the data in the domains
        x.domain(data.map(function (d) { return d.idx }))
        y.domain([0, d3.max(data, function (d) { return d.orders })])
        svg.selectAll('.bar-asks')
            .remove('rect')
        // append the rectangles for the bar chart
        svg.selectAll('.bar')
            .data(data)
            .enter().append('rect')
            .attr('class', 'bar')
            .attr('class', 'bar-asks')
            .attr('x', function (d) { return x(d.idx) })
            .attr('width', x.bandwidth())
            .attr('y', function (d) { return y(d.orders) })
            .attr('height', function (d) { return height - y(d.orders) })
    }

    render() {
        return (
            <div>
                <div id="bids" className="depth-chart"></div>
                <div id="asks" className="depth-chart"></div>
            </div>
        )
    }
}

export default DepthChart