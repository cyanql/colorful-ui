var loaderUtils = require('loader-utils')


const SAMPLE_TAG = ':::'
const CODE_TAG = '```'

function findFragment(source, tag, index = 0) {
	var start = source.indexOf(tag),
		end

	// 标签成双
	index *= 2

	while (index) {
		start = source.indexOf(tag, start + 1)
		index--
	}

	// 取标签内容，不包含标签
	end = source.indexOf(tag, start + 1)
	start = start + tag.length

	if (start > -1 && end > -1)
		return source.substring(start, end)
}

module.exports = function(source) {
	this.cacheable()
	var query = loaderUtils.parseQuery(this.query)
	var index = query.index,
		sample,
		code

	sample = findFragment(source, SAMPLE_TAG, index)
	code = sample && findFragment(sample, CODE_TAG)
	// 去除```之后的lang[如：html]
	code && this.callback(null, code.replace(/^[^\n]*\n/, ''))
}
