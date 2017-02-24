const isArray = Array.isArray
const toString = Object.prototype.toString

export default function(keys) {
	return {
		data() {
			const states = {}
			let i, len = keys.length, prop, value

			for (i = 0; i < len; i++) {
				prop = keys[i]
				value = this[prop]

				prop = prop + 'State'
				if (isArray(value))
					states[prop] = value.slice()
				else if (toString.call(value) === '[object Object]')
					states[prop] = JSON.parse(JSON.stringify(value))
				else
					states[prop] = value
			}
			return states
		}
	}
}
