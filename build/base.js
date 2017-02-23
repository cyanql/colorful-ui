const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const autoprefixer = require('autoprefixer')

const SRC_PATH = path.resolve(__dirname, '..', 'src')
const TEST_PATH = path.resolve(__dirname, '..', 'test')

module.exports = {
	stats: {
		hash: false,
		colors: true,
		chunks: false,
		version: false,
		children: false,
		timings: true
	},
	resolve: {
		alias: {
			src: SRC_PATH,
			test: TEST_PATH,
			vue: 'vue/dist/vue.js'
		},
		extensions: ['.js', '.vue', '.md']
	},
	module: {
		rules: [{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel-loader'
		}, {
			test: /\.vue$/,
			loader: 'vue-loader',
            options: {
                loaders: {
                    scss: ExtractTextPlugin.extract({
						fallback: 'vue-style-loader',
						use: 'css-loader!sass-loader'
					})
                },
                postcss: [autoprefixer({ browsers: ['> 1%', 'last 2 versions', 'ie >= 9'] })]
            }
		}, {
			test: /\.s?css$/,
			loader: ExtractTextPlugin.extract({
				fallback: 'vue-style-loader',
				use: 'css-loader!sass-loader'
			})
		}, {
			test: /\.(jpg|png)$/,
			loader: 'url-loader?name=images/[name].[ext]&limit=51200'
		}, {
			test: /\.(eot|svg|ttf|woff(2)?)(\?[a-z0-9=\.]+)?$/,
			loader: 'url-loader?name=fonts/[name].[ext]&limit=1000'
		}]
	},
	plugins: [
		new ExtractTextPlugin({
			filename: '[name].css'
		}),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
		})
	]
}
