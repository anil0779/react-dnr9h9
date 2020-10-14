import React from 'react';
import CanvasJSReact from './../../canvasjs.react';
//var CanvasJSReact = require('./canvasjs.react');
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

function PieChart({ filter, items, range }) {

    const showdataSince = new Date();
    showdataSince.setDate(showdataSince.getDate() - range);

    // TODO: make this configurable

    const dataPoints = filter.map(cat => {
        const filteredItems = items.filter(function(item) {
            return new Date(item.dateTime) >= showdataSince
        })

        return {
            name: cat,
            y: filteredItems.reduce(function (acc, item) {
                return acc + item[cat];
            }, 0)
        }
    })

    const options = {
        animationEnabled: true,
        title: {
            text: "Customer Satisfaction",
            horizontalAlign: "left",
            fontSize: 24,
            fontWeight: "bold",
            fontFamily: "none"
        },
        subtitles: [{
            text: dataPoints.reduce(function (acc, item) { return acc + item.y }, 0),
            verticalAlign: "center",
            fontSize: 24,
            dockInsidePlotArea: true
        }],
        legend: {
            verticalAlign: "center",
            horizontalAlign: "right",
            cursor: "pointer"
        },
        data: [{
            type: "doughnut",
            showInLegend: true,
            indexLabel: "{name}: {y}",
            dataPoints: dataPoints
        }]
    }

    return (
        <>
            <CanvasJSChart options={options} />
            <hr style={{ marginBottom: "5rem" }} />
        </>
    )
}

export default PieChart;