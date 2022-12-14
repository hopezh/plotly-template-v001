import "./bWLwgP.css";
// import * as dfd from "danfojs";

// use danfo.js to read csv as DataFrame #######################################

// get csv file ----------------------------------------------------------------
const url =
	"https://raw.githubusercontent.com/plotly/datasets/master/finance-charts-apple.csv";

const appleCSV = "../static/data/apple.csv";

// func to create line chart ---------------------------------------------------------
/**
 * @param {object} _df 	- danfo datafram object inside the promise returned from dfd.readCSV()
 * @param {string} _col	- name of the column in the datafram to be plotted
 * @param {string} _div - div id on which to draw the plot
 */
function addLineChart(_df, _col, _div) {
	var new_df = _df.setIndex({ column: "Date" });
	new_df[_col].plot(_div).line();
}

// const addLineChart = (_df, _col, _div) => {	// alternatively, use arrow func 
// 	var new_df = _df.setIndex({ column: "Date" });
// 	new_df[_col].plot(_div).line();
// }

// option 1: promise resolution ------------------------------------------------
// dfd.readCSV(url)
// 	.then((df) => {
// 		df.describe().print();
// 		console.log("df head: ");

// 		console.log(df.head());
// 		df.head().print();

// 		addLineChart(df, "AAPL.Open", "plotly-g00")
// 	})
// 	.catch((err) => {
// 		console.log(err);
// 	});

// option 2: apply async func to read csv --------------------------------------
// const readCSV = async (url) => {}	// alternatively, use fat arrow func
async function readCSV(url) {
	try {
		const df = await dfd.readCSV(url);
		return df;
	} catch (error) {
		console.error(error);
	}
}

// store the returned promiss in a var
const myDF = readCSV(url);

// use .then() to get the data in the returned promise
myDF.then((df) => {
	console.log("df head: ");
	df.head().print(); // print df head as a table
});

myDF.then((df) => {
	console.log("column type:");
	df.ctypes.print(); // print the type of each colmn as a table
});

myDF.then((df) => {
	addLineChart(df, "AAPL.Open", "plotly-g00");
});
