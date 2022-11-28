import "./bWLwgP.css";
import * as d3 from "d3";
import Plotly from "plotly.js-dist-min";

// get csv file ----------------------------------------------------------------
const csvURL =
	"https://raw.githubusercontent.com/plotly/datasets/master/finance-charts-apple.csv";

const appleCSV = "../static/data/apple.csv";

// option 1: use fetch text async func and d3.csvParse(text) -------------------
// const fetchText = async (url) => {
// 	const response = await fetch(url);
// 	return await response.text();
// };

// const csvTextPromise = fetchText(csvURL);

// csvTextPromise.then((text) => {
// 	const data = d3.csvParse(text); // parse csv as an array by row

// 	let message = "";
// 	message +=
// 		"text file size: \t" + Math.round(text.length / 1024) + "kB" + "\n";
// 	message += "num of rows in csv: \t" + data.length + "\n";
// 	message += "num of columns: \t" + data.columns.length + "\n";
// 	// message += "column names: \t" + data.columns + '\n'

// 	document.getElementById("message").textContent = message;
// });

// option 2: use d3.csv() ------------------------------------------------------
// d3.csv(csvURL).then((data) => {
// 	let message = "";
// 	message +=
// 		"text file size: \t" +
// 		Math.round(d3.csvFormat(data).length / 1024) +
// 		"kB" +
// 		"\n";
// 	message += "num of rows in csv: \t" + data.length + "\n";
// 	message += "num of columns: \t" + data.columns.length + "\n";
// 	message += "column names: \t" + data.columns + "\n";

// 	document.getElementById("message").textContent = message;
// });

// func to create line chart ---------------------------------------------------
const addLineChart = (_x, _y1, _y2, _div) => {
	var trace1 = {
		x: _x,
		y: _y1,
		mode: "lines",
		type: "scatter",
	};

	var trace2 = {
		x: _x,
		y: _y2,
		mode: "lines",
		type: "scatter",
	};

	var data = [trace1, trace2];

	Plotly.newPlot(_div, data);
};

// get data by column name -----------------------------------------------------
const data2 = d3.csv(csvURL);

let Date = [];
let AAPL_High = [];
let AAPL_Low = [];

// prettier-ignore
data2.then((data) => {
	Date      = data.map((row) => row["Date"]);
	AAPL_High = data.map((row) => row["AAPL.High"]);
	AAPL_Low  = data.map((row) => row["AAPL.Low"]);

	addLineChart(Date, AAPL_High, AAPL_Low, "plotly-g00");
});

// the array 'Date' updated inside a .then() can only be accessed in another .then()
data2.then(() => {
	console.log(Date);
});

console.log(Date);
