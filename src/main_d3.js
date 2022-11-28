import "./bWLwgP.css";
import * as d3 from "d3";

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

// option 2: use d3.csv()
d3.csv(csvURL).then((data) => {
	let message = "";
	message +=
		"text file size: \t" +
		Math.round(d3.csvFormat(data).length / 1024) +
		"kB" +
		"\n";
	message += "num of rows in csv: \t" + data.length + "\n";
	message += "num of columns: \t" + data.columns.length + "\n";
	message += "column names: \t" + data.columns + "\n";

	document.getElementById("message").textContent = message;
});
