const marked = require('marked')
const loaderUtils = require('loader-utils')
const highlight = require('highlight.js')

const renderer = new marked.Renderer()


/* result
:::
颜色类型：除默认、主要、成功、警告、错误、幽灵这6种基本类型以外，还可以通过设置16进制颜色来设置字体颜色
幽灵和16进制类型默认背景色为透明
:::
 */
renderer.paragraph = function(text) {
	text = text.replace(/:::/g, '')
	return text
}


const defaultOpts = {
	renderer,
	gfm: true,
	tables: true,
	breaks: false,
	pedantic: false,
	sanitize: false,
	smartLists: true,
	smartypants: false,
	highlight(code) {
		return highlight.highlightAuto(code).value
	}
}

module.exports = function(docs) {
	this.cacheable()

	const loaderOpts = loaderUtils.getLoaderConfig(this, 'docs')
	const opts = Object.assign({}, defaultOpts, loaderOpts)
	marked.setOptions(opts)

	const html = marked(docs)

	return 'module.exports = ' + JSON.stringify(html)
}
