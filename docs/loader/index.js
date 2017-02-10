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


function replaceSample(text) {
	const flag = ':::'
	const firstIndex = text.indexOf(flag)
	const lastIndex = text.lastIndexOf(flag) + flag.length

	// 先操作尾部，避免操作头部导致字符串长度变化
	text = text.substring(0, lastIndex) + marked(text.substring(lastIndex))
	text = marked(text.substring(0, firstIndex)) + text.substring(firstIndex)
	
	return text
		.replace(RE, function(str, content) {
			let infoResult, codeResult, title, description, code, slot
			content = content.trim()
			console.log(content)
			infoResult = content.match(infoRE)
			codeResult = content.match(codeRE)

			if (infoResult) {
				title = infoResult[1]
				description = infoResult[2]
			}

			if (codeResult) {
				code = codeResult[0]
				slot = codeResult[1]
			}

			slot = slot || ''
			title = title ? marked(title) : ''
			description = description ? marked(description) : ''
			code = code ? marked(code) : ''

			return (
				`<sample>
					<template slot="case">${slot}</template>
					<template slot="title">${title}</template>
					<template slot="description">${description}</template>
					<template slot="code">${code}</template>
				</sample>`
			)
		})
}

module.exports = function(docs) {
	this.cacheable()

	const loaderOpts = loaderUtils.getLoaderConfig(this, 'docs')
	const opts = Object.assign({}, defaultOpts, loaderOpts)
	marked.setOptions(opts)

	const html = replaceSample(docs)

	return 'module.exports = ' + JSON.stringify(html)
}
