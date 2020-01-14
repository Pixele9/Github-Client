const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
module.exports = {
	entry: './src/app/index.js',
	devServer: {
		port: 3030
	},
	output: { 
		// __dirname is the absolute path of my project
		// since path requires an absolute route
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	plugins: [new HtmlWebpackPlugin({
		template: './src/index.html'
	})]
}