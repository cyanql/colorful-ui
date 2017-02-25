const marked = require('marked')
const loaderUtils = require('loader-utils')
const highlight = require('highlight.js')
const renderer = new marked.Renderer()

const defaultOpts = {
	renderer,
	gfm: true,
	tables: true,
	breaks: false,
	pedantic: false,
	sanitize: true,
	smartLists: true,
	smartypants: false,
	highlight(code, lang) {
		return highlight.highlight(lang, code).value
	}
}

const RE = /:::((?:.|\s)*?):::/g
const infoRE = /^([^\s]*)\s*===((?:.|\s)*?)===/
const codeRE = /```[^\n]*\n((?:.|\s)*?)\n```/

function parseToken(text) {
	const tokens = []
	let start = 0, index

	function tearString(start, end) {
		if (end > start) {
			const value = marked(text.substring(start, end))
			value && tokens.push({
				type: 'md',
				value
			})
		}
	}

	text.replace(RE, function(str, content) {
		let infoResult, codeResult, title, description, escapeCode, sourceCode

		// 拆分出默认起始位到当前匹配的起始下标位的字符串
		index = arguments[arguments.length - 2]
		tearString(start, index)

		content = content.trim()
		infoResult = content.match(infoRE)
		codeResult = content.match(codeRE)

		if (infoResult) {
			title = infoResult[1]
			description = infoResult[2]
		}

		if (codeResult) {
			escapeCode = codeResult[0]
			sourceCode = codeResult[1]
		}

		sourceCode = sourceCode || ''
		title = title ? marked(title) : ''
		description = description ? marked(description) : ''
		escapeCode = escapeCode ? marked(escapeCode) : ''

		tokens.push({
			type: 'sample',
			value: {
				title,
				description,
				code: {
					source: sourceCode,
					escape: escapeCode
				}
			}
		})
		// 默认起始位调整为当前字符串最后一位所处原始字符串的下标
		start = index + str.length
	})

	tearString(start, text.length)

	return tokens
}

const path = require('path')
const selectorPath = path.resolve(__dirname, 'selector')

module.exports = function(source) {
	this.cacheable()

	const loaderOpts = loaderUtils.getLoaderConfig(this)
	const opts = Object.assign({}, defaultOpts, loaderOpts)
	marked.setOptions(opts)

	const tokens = parseToken(source)
	const filePath = this.resourcePath

	let text = `var tokens = ${JSON.stringify(tokens)};`
	,	request
	,	sampleIndex = 0

	tokens.forEach((token, index) => {
		if (token.type === 'sample') {
			request = loaderUtils.stringifyRequest(this, `!!vue-loader!${selectorPath}?index=${sampleIndex}!${filePath}`)
			text += `
				tokens[${index}].value.instance = require(${request});
			`
			sampleIndex++
		}
	})

	return `
		${text}
		module.exports = tokens;
	`
}
