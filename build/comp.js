const webpack = require('webpack')
const path = require('path')
const base = require('./base')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')

const SRC_PATH = path.resolve(__dirname, '..', 'src')
const DIST_PATH = path.resolve(__dirname, '..', 'dist')

const NODE_ENV = process.env.NODE_ENV


const config = Object.assign(base, {
	entry: {
		'colorful-ui': [SRC_PATH],
	},
	output: {
		path: DIST_PATH,
		publicPath: './',
		filename: '[name].js',
		libraryTarget: 'umd',
		library: 'colorful-ui'
	}
})

if (NODE_ENV === 'production') {
	config.plugins.push(
		new webpack.optimize.UglifyJsPlugin({
			include: /\.min\.(js|css)$/,
			minimize: true,
			compress: {
				warnings: false
			}
		}),
		new OptimizeCssAssetsPlugin({
			assetNameRegExp: /\.min\.css$/,
			cssProcessorOptions: { discardComments: {removeAll: true } },
			canPrint: true
		})
	)
	config.entry['colorful-ui.min'] = [SRC_PATH]
	config.externals = {
		vue: 'Vue'
	}
}

module.exports = config
