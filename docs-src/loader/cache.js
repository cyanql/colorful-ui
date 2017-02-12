const fs = require('fs-extra')
const path = require('path')

const CACHE_PATH = path.resolve(__dirname, '.cache')

function save(filename, content) {
	const filePath = path.resolve(CACHE_PATH, filename)

	try {
		fs.outputFileSync(filePath, content, 'utf8')
	} catch(e) {
		throw e
	}
	return filePath
}

function clean() {
	try {
		fs.removeSync(CACHE_PATH)
	} catch(e) {
		throw e
	}
}

function remove(filename) {
	const filePath = path.resolve(CACHE_PATH, filename)

	try {
		fs.removeSync(filePath)
	} catch(e) {
		throw e
	}
}

module.exports = {
	CACHE_PATH,
	save,
	remove,
	clean
}
