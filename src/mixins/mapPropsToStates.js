const isArray = Array.isArray
const toString = Object.prototype.toString

function isObject(value) {
	return toString.call(value) === '[object Object]'
}

function mapPropToState(value) {
	if (isArray(value))
		return value.slice()
	else if (isObject(value))
		return JSON.parse(JSON.stringify(value))
	else
		return value
}

export default function(...args) {
	return {
		data() {
			const states = {}
			let arg, argProp, prop, watched

			for (arg of args) {
				if (isObject(arg)) {
					for (argProp of Object.keys(arg)) {
						prop = argProp + 'State'
						states[prop] = mapPropToState(this[argProp])
						watched = arg[argProp]
						watched && this.$watch(argProp, function(value) {
							this[prop] = value
						})
					}
				} else {
					prop = arg + 'State'
					states[prop] = mapPropToState(this[arg])
					this.$watch(arg, function(value) {
						this[prop] = value
					})
				}
			}
			return states
		}
	}
}
