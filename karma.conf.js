const webpackConfig = require('./webpack.config')

module.exports = function(config) {
	config.set({
		basePath: '',
		logLevel: config.LOG_INFO,
		port: 9999,
		colors: true,
		frameworks: ['mocha', 'chai'],
		files: [
			'test/index.js'
		],
		preprocessors: {
			'src/**': ['webpack', 'sourcemap', 'coverage'],
			'test/index.js': ['webpack', 'sourcemap']
		},
		plugins: [
			'karma-webpack',
			'karma-mocha',
			'karma-chai',
			'karma-sourcemap-loader',
			'karma-chrome-launcher',
			'karma-coverage',
			'karma-mocha-reporter'
		],
		browsers: ['Chrome'],
		reporters: ['mocha', 'coverage', 'dots'],
		coverageReporter: {
			dir: 'coverage',
			reporters: [{
				type: 'json',
				subdir: '.',
				file: 'coverage.json'
			}, {
				type: 'lcov',
				subdir: '.'
			}, {
				type: 'text-summary'
			}]
		},
		webpack: webpackConfig,
		webpackServer: {
			noInfo: true
		}
	})
}
