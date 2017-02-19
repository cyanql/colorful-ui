const cssText = `
.drop {
    position: fixed;
    left: -9999px;
    top: -9999px;
    z-index: 1050;
    display: block;
    font-size: 12px;
    font-weight: normal;
    line-height: 1.5;
    transform-origin: 0 0;

	&.show {
		animation: drop .2s cubic-bezier(.4,0,.2,1);
	}
}

@keyframes drop {
	0% {
		opacity: 0;
		transform: scale(0);
	}
	100% {
		opacity: 1;
		transform: scale(1);
	}
}
`
function createContainer() {
	const container = document.createElement('div')
	container.className = 'c-drop-container'
	document.body.appendChild(container)
	return container
}

let container = null
function initElement(drop) {
	var el = document.createElement('div')
	container = container || createContainer()

	el.className = 'drop'
	// el.style.cssText = cssText
	el.appendChild(drop.content)
	container.appendChild(el)
	drop.el = el
}

const align = {
	top: {
		left(el, tRect, dRect, spacing) {
			el.style.top = tRect.top - dRect.height - spacing + 'px'
			el.style.left = tRect.left + 'px'
		},
		center(el, tRect, dRect, spacing) {
			el.style.top = tRect.top - dRect.height - spacing + 'px'
			el.style.left = tRect.left - (dRect.width - tRect.width) / 2 + 'px'
		},
		right(el, tRect, dRect, spacing) {
			el.style.top = tRect.top - dRect.height - spacing + 'px'
			el.style.left = tRect.left - (dRect.width - tRect.width) + 'px'
		}
	},
	bottom: {
		left(el, tRect, dRect, spacing) {
			el.style.top = tRect.bottom + spacing + 'px'
			el.style.left = tRect.left + 'px'
		},
		center(el, tRect, dRect, spacing) {
			el.style.top = tRect.bottom + spacing + 'px'
			el.style.left = tRect.left - (dRect.width - tRect.width) / 2 + 'px'
		},
		right(el, tRect, dRect, spacing) {
			el.style.top = tRect.bottom + spacing + 'px'
			el.style.left = tRect.left - (dRect.width - tRect.width) + 'px'
		}
	},
	left: {
		top(el, tRect, dRect, spacing) {
			el.style.top = tRect.top + 'px'
			el.style.left = tRect.left - dRect.width - spacing + 'px'
		},
		center(el, tRect, dRect, spacing) {
			el.style.top = tRect.top - (dRect.height - tRect.height) / 2 + 'px'
			el.style.left = tRect.left - dRect.width - spacing + 'px'
		},
		bottom(el, tRect, dRect, spacing) {
			el.style.top = tRect.top - (dRect.height - tRect.height) + 'px'
			el.style.left = tRect.left - dRect.width - spacing + 'px'
		}
	},
	right: {
		top(el, tRect, dRect, spacing) {
			el.style.top = tRect.top + 'px'
			el.style.left = tRect.right + spacing + 'px'
		},
		center(el, tRect, dRect, spacing) {
			el.style.top = tRect.top - (dRect.height - tRect.height) / 2 + 'px'
			el.style.left = tRect.right + spacing + 'px'
		},
		bottom(el, tRect, dRect, spacing) {
			el.style.top = tRect.top - (dRect.height - tRect.height) + 'px'
			el.style.left = tRect.right + spacing + 'px'
		}
	}
}

function initMethods(drop) {
	const { target, position, el, spacing } = drop
	,	posArr = position.split('-')
	,	posA = posArr[0]
	,	posB = posArr[1] || 'center'


	try {
		const alignFn = align[posA][posB]

		if (!alignFn) {
			throw new Error()
		}

		const defaultOpts = {
			zIndex: '-9999',
			visibility: 'hidden',
			opacity: '0',
			display: ''
		}

		drop.updatePostion = function() {
			const opts = {}
			Object.keys(defaultOpts).map(key => {
				opts[key] = el.style[key]
			})
			Object.assign(el.style, defaultOpts)

			const rect = target.getBoundingClientRect()
			const scrollLeft = document.body.scrollLeft || document.documentElement.scrollLeft
			const scrollTop = document.body.scrollTop || document.documentElement.scrollTop

			alignFn(
				el, {
					left: rect.left + scrollLeft,
					right: rect.right + scrollLeft,
					top: rect.top + scrollTop,
					bottom: rect.bottom + scrollTop,
					width: rect.width,
					height: rect.height
				} ,
				el.getBoundingClientRect(),
				spacing
			)

			Object.assign(el.style, opts)
		}
	} catch(e) {
		throw new Error('position is not in conformity with the requirements')
	}
}


function initEvents(drop) {
	const { el, target, trigger } = drop

	const open = drop.open.bind(drop)
	const close = drop.close.bind(drop)

	function clickoutHandle(e) {
		const element = e.target
		if (el.contains(element) || target.contains(element)) {
			return
		}
		close()
	}

	if (trigger === 'hover') {
		target.addEventListener('mouseover', open, false)
		target.addEventListener('mouseout', close, false)
		el.addEventListener('mouseover', open, false)
		el.addEventListener('mouseout', close, false)
	} else if (trigger === 'click') {
		target.addEventListener('click', open, false)
		document.addEventListener('click', clickoutHandle, false)
	}

	drop.removeEvents = function() {
		if (trigger === 'hover') {
			target.removeEventListener('mouseover', open)
			target.removeEventListener('mouseout', close)
			el.removeEventListener('mouseover', open)
			el.removeEventListener('mouseout', close)
		} else if (trigger === 'click') {
			target.removeEventListener('click', open)
			document.removeEventListener('click', clickoutHandle)
		}
	}
}

function noop() {}

export default class Drop {
	constructor(opts) {
		const { target, content, position, trigger, visible, spacing, onOpen, onClose, onToggle, timeout } = opts
		if (!target)
			throw new Error('target cann\'t be null')

		Object.assign(this, {
			target,
			content,
			trigger,
			visible,
			position: position || 'left bottom',
			eventType: trigger === 'hover' ? 'mouseover' : 'click',
			spacing: spacing || 10,
			onOpen: onOpen || noop,
			onClose: onClose || noop,
			onToggle: onToggle || noop,
			timeout: timeout || 100,
			timer: null,
			el: null
		})

		initElement(this)
		initMethods(this)
		initEvents(this)

		this.el.style.display = visible ? '' : 'none'
	}

	remove() {
		this.el.parentNode.removeChild(this.el)
	}

	destroy() {
		clearTimeout(this.timer)
		this.removeEvents()
		this.el.parentNode.removeChild(this.el)
		this.el = null
	}

	open() {
		clearTimeout(this.timer)
		this.timer = setTimeout(() => {
			if (!this.visible) {
				this.updatePostion()
				this.el.classList.add('show')
				this.show()
				this.visible = true
				this.onToggle(this.visible)
				this.onOpen(this.visible)
			}
		}, this.timeout)
	}

	close() {
		clearTimeout(this.timer)
		this.timer = setTimeout(() => {
			if (this.visible) {
				this.el.classList.remove('show')
				this.hide()
				this.visible = false
				this.onToggle(this.visible)
				this.onClose(this.visible)
			}
		}, this.timeout)
	}

	show() {
		this.el.style.display = ''
	}

	hide() {
		this.el.style.display = 'none'
	}
}
