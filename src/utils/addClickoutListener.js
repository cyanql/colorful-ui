const isArray = Array.isArray

export default function addClickoutListener(elOrEls, callback) {
	function clickout(e) {
		const element = e.target
		if (isArray(elOrEls) ? elOrEls.some(el => el.contains(element)) : elOrEls.contains(element)) {
			return
		}
		callback()
	}
	document.addEventListener('click', clickout, false)
	
	return function() {
		document.removeEventListener('click', clickout)
	}
}
