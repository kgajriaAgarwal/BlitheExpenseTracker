import React from 'react';
import CanvasJSReact from '../../Assets/canvasjs.react';
import useTransactions from '../../useTransactions';
//var CanvasJSReact = require('./canvasjs.react');
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;


const ChartComponent = (props) =>{

    console.log("props",props);
    const { totalSum,incomeDatapoints,expenseDatapoints} = useTransactions(props.title);
    const getMax = (dataPts) =>{
        debugger
        // Math.max.apply(Math, dataPts.map(function(o) { return `${o.y}% ${o.name}`; }))
        const res = dataPts.length?dataPts.reduce((acc, cVal)=>acc.y > cVal.y ? acc : cVal):'';
        return res?`${res.y.toFixed()}% ${res.name}`:'';
    }


    const options = {
        animationEnabled: true,
        title: {
            text: `${props.title} total: $${props.title==='Income'?totalSum.income_total:totalSum.expense_total}`
        },
        subtitles: [{
            // text: "71% Positive",
            text: getMax(props.title==='Income'?incomeDatapoints:expenseDatapoints),
            verticalAlign: "center",
            fontSize: 24,
            dockInsidePlotArea: true
        }],
        data: [{
            type: "doughnut",
            showInLegend: true,
            indexLabel: "{name}: {y}",
            yValueFormatString: "#,###'%'",
            // dataPoints: [
            //     { name: "Unsatisfied", y: 5 },
            //     { name: "Very Unsatisfied", y: 31 },
            //     { name: "Very Satisfied", y: 40 },
            //     { name: "Satisfied", y: 17 },
            //     { name: "Neutral", y: 7 }
            // ]
            dataPoints: props.title==='Income'?incomeDatapoints:expenseDatapoints
        }]
    }

    return(
        <>
            <CanvasJSChart options = {options}/>
        </>
    );
}

export default ChartComponent;

// /* App.js */
// var React = require('react');
// var Component = React.Component;
// var CanvasJSReact = require('../../Assets/canvasjs.react');//../../../public/Assets/canvasjs.react
// var CanvasJS = CanvasJSReact.CanvasJS;
// var CanvasJSChart = CanvasJSReact.CanvasJSChart;
// class ChartComponent extends Component {
// 	render() {
// 		const options = {
// 			animationEnabled: true,
// 			title: {
// 				text: "Customer Satisfaction"
// 			},
// 			subtitles: [{
// 				text: "71% Positive",
// 				verticalAlign: "center",
// 				fontSize: 24,
// 				dockInsidePlotArea: true
// 			}],
// 			data: [{
// 				type: "doughnut",
// 				showInLegend: true,
// 				indexLabel: "{name}: {y}",
// 				yValueFormatString: "#,###'%'",
// 				dataPoints: [
// 					{ name: "Unsatisfied", y: 5 },
// 					{ name: "Very Unsatisfied", y: 31 },
// 					{ name: "Very Satisfied", y: 40 },
// 					{ name: "Satisfied", y: 17 },
// 					{ name: "Neutral", y: 7 }
// 				]
// 			}]
// 		}
// 		return (
// 		<div>
// 			<CanvasJSChart options = {options}
// 				/* onRef={ref => this.chart = ref} */
// 			/>
// 			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
// 		</div>
// 		);
// 	}
// }
//  module.exports = ChartComponent;       
// // export default ChartComponent;

