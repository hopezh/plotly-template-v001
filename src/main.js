import "./bWLwgP.css";
import Plotly from "plotly.js-dist-min";

// test ========================================================================
// chart 1 ---------------------------------------------------------------------
var trace1_1 = {
	x: [1, 2, 3, 4],
	y: [10, 15, 13, 17],
	mode: "markers",
	type: "scatter",
};

var trace1_2 = {
	x: [2, 3, 4, 5],
	y: [16, 5, 11, 9],
	mode: "lines",
	type: "scatter",
};

var trace1_3 = {
	x: [1, 2, 3, 4],
	y: [12, 9, 15, 12],
	mode: "lines+markers",
	type: "scatter",
};

var data1 = [trace1_1, trace1_2, trace1_3];

Plotly.newPlot("chart-001", data1);

// chart 2 ---------------------------------------------------------------------
var trace2_1 = {
	x: ["giraffes", "orangutans", "monkeys"],
	y: [20, 14, 23],
	name: "SF Zoo",
	type: "bar",
};

var trace2_2 = {
	x: ["giraffes", "orangutans", "monkeys"],
	y: [12, 18, 29],
	name: "LA Zoo",
	type: "bar",
};

var data2 = [trace2_1, trace2_2];

var layout2 = { barmode: "group" };

Plotly.newPlot("chart-002", data2, layout2);

// chart 3 ---------------------------------------------------------------------
var n = 100;
var x = [],
	y = [],
	z = [];
var dt = 0.015;

for (let i = 0; i < n; i++) {
	x[i] = Math.random() * 2 - 1;
	y[i] = Math.random() * 2 - 1;
	z[i] = 30 + Math.random() * 10;
}

Plotly.newPlot(
	"plotly-g02",
	[
		{
			x: x,
			y: z,
			mode: "markers",
		},
	],
	{
		xaxis: { range: [-40, 40] },
		yaxis: { range: [0, 60] },
	}
);

function compute() {
	var s = 10,
		b = 8 / 3,
		r = 28;
	var dx, dy, dz;
	var xh, yh, zh;
	for (var i = 0; i < n; i++) {
		dx = s * (y[i] - x[i]);
		dy = x[i] * (r - z[i]) - y[i];
		dz = x[i] * y[i] - b * z[i];

		xh = x[i] + dx * dt * 0.5;
		yh = y[i] + dy * dt * 0.5;
		zh = z[i] + dz * dt * 0.5;

		dx = s * (yh - xh);
		dy = xh * (r - zh) - yh;
		dz = xh * yh - b * zh;

		x[i] += dx * dt;
		y[i] += dy * dt;
		z[i] += dz * dt;
	}
}

function update() {
	compute();

	Plotly.animate(
		"plotly-g02",
		{
			data: [{ x: x, y: z }],
		},
		{
			transition: {
				duration: 0,
			},
			frame: {
				duration: 0,
				redraw: false,
			},
		}
	);

	requestAnimationFrame(update);
}

requestAnimationFrame(update);
