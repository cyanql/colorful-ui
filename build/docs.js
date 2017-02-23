const webpack = require('webpack')
const path = require('path')
const base = require('./base')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')

const DOCS_SRC_PATH = path.resolve(__dirname, '..', 'docs-src')
const DOCS_PATH = path.resolve(__dirname, '..', 'docs')

const NODE_ENV = process.env.NODE_ENV


const config = Object.assign(base, {
	devServer: {
		host: '0.0.0.0',
		port: 3000,
		publicPath: '/dist' //模板、样式、脚本、图片等资源对应server上的路径
	},
	entry: {
		index: [DOCS_SRC_PATH]
	},
	output: {
		path: DOCS_PATH, //输出目录的配置，模板、样式、脚本、图片等资源的路径配置都相对于它
		publicPath: './', //模板、样式、脚本、图片等资源对应的的路径
		filename: 'js/[name].js' //每个页面对应的主js的生成配置
	},
	resolveLoader: {
		alias: {
			'docs-loader': path.resolve(DOCS_SRC_PATH, 'loader')
		}
	}
})

config.module.rules.push({
	test: /\.md$/,
	exclude: /node_modules/,
	loader: 'docs-loader'
})

//多文件入口，html模版生成
for (const name of Object.keys(config.entry)) {
	if (name !== 'lib') {
		config.plugins.push(new HtmlWebpackPlugin({ //根据模板插入css/js等生成最终HTML
			// favicon: './src/img/favicon.ico', //favicon路径，通过webpack引入同时可以生成hash值
			title: name,
			chunks: [name, 'lib'], //需要引入的chunk，不配置就会引入所有页面的资源
			template: path.resolve(DOCS_SRC_PATH, 'template/index.html'),
			filename: './' + name + '.html', //生成的html存放路径，相对于path
			inject: 'body', //js插入的位置，true/'head'/'body'/false
			hash: true, //为静态资源生成hash值
			minify: { //压缩HTML文件
				removeComments: true, //移除HTML中的注释
				collapseWhitespace: true //删除空白符与换行符
			}
		}))
	}
}

if (NODE_ENV === 'development') {
	for (const name of Object.keys(config.entry)) {
		if (name !== 'lib') {
			config.entry[name].unshift('webpack/hot/only-dev-server')
			config.entry[name].unshift('webpack-dev-server/client?http://localhost:3000')
		}
	}
	config.watch = true
	config.plugins.unshift(new webpack.HotModuleReplacementPlugin())
}

if (NODE_ENV === 'production') {
	config.plugins.push(
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			}
		}),
		new OptimizeCssAssetsPlugin({
			cssProcessorOptions: { discardComments: {removeAll: true } },
			canPrint: true
		})
	)
	config.externals = {
		vue: 'Vue'
	}
}

module.exports = config
