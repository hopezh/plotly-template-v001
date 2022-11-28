import "./bWLwgP.css";
import * as d3 from "d3";

// console.log(d3);

// fetch text
const fetchText = async (url) => {
	const response = await fetch(url);
	return await response.text();
};

const csvURL =
	"https://raw.githubusercontent.com/plotly/datasets/master/finance-charts-apple.csv";

const appleCSV = "../static/data/apple.csv";

const csvTextPromise = fetchText(csvURL);

csvTextPromise.then((text) => {
	const data = d3.csvParse(text); // parse csv as an array by row

    let message = ''
    message += 'text file size: ' + Math.round(text.length / 1024) + 'kB' + '\n'
    message += "num of rows: " + data.length + '\n'
    message += 'num of columns: ' + data.columns.length + '\n'

    document.getElementById('message').textContent = message
	// console.log("column names:", data.columns);
});
