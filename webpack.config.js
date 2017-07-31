var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: './src/java/main.js',

	output: {
		path: path.join(__dirname, './dist/'),
		filename: 'bundle.js',
		publicPath: '/dist/'
	},

	module:{
		loaders: [{
			test: /.jsx?$/,
			loader: 'babel-loader',
			exclude: /node_modules/,
			query: {
				presets: ['es2015', 'react']
			}
		},
		{	
			test: /\.(jpe?g|png|gif|svg)$/i, 
		 	loader: "file-loader"
		},
		{
	    	test: /\.scss$/,
	    	loaders: 'style-loader!css-loader?modules!sass-loader?'
	    }
		]
	},
}