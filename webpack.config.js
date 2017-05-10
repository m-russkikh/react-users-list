var path = require('path');

module.exports = {
	entry: "./app/app.js",
	output: {
		filename: "public/js/bundle.js",
		sourceMapFilename: "public/js/bundle.map"
	},
	devtool: '#source-map',
	module: {
		loaders: [
			{
				loader: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				loader: "css-loader"
			}
		]
	}
}
