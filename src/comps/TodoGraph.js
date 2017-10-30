import React, { Component } from 'react';

const ReactHighcharts = require('react-highcharts'); // Expects that Highcharts was loaded in the code.

class TodoGraph extends Component {
    render () {
        const { items } = this.props;

        const processedItems = [];
        items.forEach(element => {
            let elementExists = processedItems.findIndex(current => current.name === element.type);
            if(elementExists === -1)
            {
                processedItems.push({
                    name: element.type,
                    y: 1
                });
            }
            else
            {
                processedItems[elementExists].y++;
            }
        });

        const config = {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            title: {
                text: 'Task type split'
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                        style: {
                            color: 'black'
                        }
                    }
                }
            },
            series: [{
                name: 'Task Types',
                colorByPoint: true,
                data: processedItems
            }]
        };
        return (
            <div>
                <ReactHighcharts config = {config}></ReactHighcharts>
            </div>
        )
    }
}

export default TodoGraph