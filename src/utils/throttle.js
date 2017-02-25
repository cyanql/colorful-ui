export default function throttle(fn, delay) {
	let timer
	return function() {
		clearTimeout(timer)
		timer = setTimeout(() => {
			fn.apply(this, arguments)
		}, delay)
	}
}
