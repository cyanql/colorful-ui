const isArray = Array.isArray
const slice = Array.prototype.slice

export default function addClickoutListener() {
	const args = slice.call(arguments)
	const callback = args.pop()

	function clickout(e) {
		const element = e.target
		if (isArray(args) ? args.some(el => el.contains(element)) : args.contains(element)) {
			return
		}
		callback()
	}
	document.addEventListener('click', clickout, false)

	return function() {
		document.removeEventListener('click', clickout)
	}
}
