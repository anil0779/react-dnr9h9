import React from 'react';
import CanvasJSReact from './../../canvasjs.react';
//var CanvasJSReact = require('./canvasjs.react');
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

function StackedColChart({ filter, items, range }) {

    const showdataSince = new Date();
    showdataSince.setDate(showdataSince.getDate() - range);

    // TODO: make this configurable
    const options = {
        animationEnabled: true,
        title: {
            text: "Timeline Details",
            horizontalAlign: "left",
            fontSize: 24,
            fontWeight: "bold",
            fontFamily: "none"
        },
        axisY: {
            title: "No of occurances",
            includeZero: true,
            suffix: "k"
        },
        toolTip: {
            shared: true,
            reversed: true
        },
        legend: {
            verticalAlign: "bottom",
            horizontalAlign: "left",
            cursor: "pointer",
            // itemclick: this.toggleDataSeries
        },
        data: filter.map(cat => {
            return {
                type: "stackedColumn",
                name: cat,
                showInLegend: true,
                yValueFormatString: "#,###k",
                dataPoints: items
                    .filter(item => new Date(item.dateTime) >= showdataSince)
                    .map(item => {
                        return {
                            label: item['dateTime'],
                            y: item[cat]
                        }
                    })
            }
        })
    };
    debugger
    return (
        <>
            <CanvasJSChart options={options} />
            <hr style={{ marginBottom: "5rem" }} />
        </>
    )
}

export default StackedColChart;