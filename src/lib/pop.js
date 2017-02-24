const cssText = `
.pop {
    position: absolute;
    left: -9999px;
    top: -9999px;
    z-index: 1050;
    display: block;
    font-size: 12px;
    font-weight: normal;
    line-height: 1.5;
    transform-origin: 0 0;

	&.show {
		animation: pop .2s cubic-bezier(.4,0,.2,1);
	}
}

@keyframes pop {
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
	container.className = 'pop-container'
	document.body.appendChild(container)
	return container
}

let container = null
function initElement(pop) {
	var el = document.createElement('div')
	container = container || createContainer()

	el.className = 'pop'
	// el.style.cssText = cssText
	el.appendChild(pop.content)
	container.appendChild(el)
	pop.el = el
}

const align = {
	top: {
		left(dStyle, tRect, dRect, spacing) {
			dStyle.top = tRect.top - dRect.height - spacing + 'px'
			dStyle.left = tRect.left + 'px'
			dStyle.transformOrigin = 'left bottom 0px'
		},
		center(dStyle, tRect, dRect, spacing) {
			dStyle.top = tRect.top - dRect.height - spacing + 'px'
			dStyle.left = tRect.left - (dRect.width - tRect.width) / 2 + 'px'
			dStyle.transformOrigin = 'center bottom 0px'
		},
		right(dStyle, tRect, dRect, spacing) {
			dStyle.top = tRect.top - dRect.height - spacing + 'px'
			dStyle.left = tRect.left - (dRect.width - tRect.width) + 'px'
			dStyle.transformOrigin = 'right bottom 0px'
		}
	},
	bottom: {
		left(dStyle, tRect, dRect, spacing) {
			dStyle.top = tRect.bottom + spacing + 'px'
			dStyle.left = tRect.left + 'px'
			dStyle.transformOrigin = 'left top 0px'
		},
		center(dStyle, tRect, dRect, spacing) {
			dStyle.top = tRect.bottom + spacing + 'px'
			dStyle.left = tRect.left - (dRect.width - tRect.width) / 2 + 'px'
			dStyle.transformOrigin = 'center top 0px'
		},
		right(dStyle, tRect, dRect, spacing) {
			dStyle.top = tRect.bottom + spacing + 'px'
			dStyle.left = tRect.left - (dRect.width - tRect.width) + 'px'
			dStyle.transformOrigin = 'right top 0px'
		}
	},
	left: {
		top(dStyle, tRect, dRect, spacing) {
			dStyle.top = tRect.top + 'px'
			dStyle.left = tRect.left - dRect.width - spacing + 'px'
			dStyle.transformOrigin = 'right top 0px'
		},
		center(dStyle, tRect, dRect, spacing) {
			dStyle.top = tRect.top - (dRect.height - tRect.height) / 2 + 'px'
			dStyle.left = tRect.left - dRect.width - spacing + 'px'
			dStyle.transformOrigin = 'right center 0px'
		},
		bottom(dStyle, tRect, dRect, spacing) {
			dStyle.top = tRect.top - (dRect.height - tRect.height) + 'px'
			dStyle.left = tRect.left - dRect.width - spacing + 'px'
			dStyle.transformOrigin = 'right bottom 0px'
		}
	},
	right: {
		top(dStyle, tRect, dRect, spacing) {
			dStyle.top = tRect.top + 'px'
			dStyle.left = tRect.right + spacing + 'px'
			dStyle.transformOrigin = 'left top 0px'
		},
		center(dStyle, tRect, dRect, spacing) {
			dStyle.top = tRect.top - (dRect.height - tRect.height) / 2 + 'px'
			dStyle.left = tRect.right + spacing + 'px'
			dStyle.transformOrigin = 'left center 0px'
		},
		bottom(dStyle, tRect, dRect, spacing) {
			dStyle.top = tRect.top - (dRect.height - tRect.height) + 'px'
			dStyle.left = tRect.right + spacing + 'px'
			dStyle.transformOrigin = 'left bottom 0px'
		}
	}
}

function initMethods(pop) {
	const { target, position, el, spacing } = pop
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

		pop.updatePostion = function() {
			const opts = {}
			Object.keys(defaultOpts).map(key => {
				opts[key] = el.style[key]
			})
			Object.assign(el.style, defaultOpts)

			const rect = target.getBoundingClientRect()
			const scrollLeft = document.body.scrollLeft || document.documentElement.scrollLeft
			const scrollTop = document.body.scrollTop || document.documentElement.scrollTop

			alignFn(
				el.style, {
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


function initEvents(pop) {
	const { el, target, trigger } = pop

	const lazyOpen = pop.lazyOpen.bind(pop)
	const lazyClose = pop.lazyClose.bind(pop)

	function clickoutHandle(e) {
		const element = e.target
		if (el.contains(element) || target.contains(element)) {
			return
		}
		lazyClose()
	}

	if (trigger === 'hover') {
		target.addEventListener('mouseover', lazyOpen, false)
		target.addEventListener('mouseout', lazyClose, false)
		el.addEventListener('mouseover', lazyOpen, false)
		el.addEventListener('mouseout', lazyClose, false)
	} else if (trigger === 'click') {
		target.addEventListener('click', lazyOpen, false)
		document.addEventListener('click', clickoutHandle, false)
	}

	pop.removeEvents = function() {
		if (trigger === 'hover') {
			target.removeEventListener('mouseover', lazyOpen)
			target.removeEventListener('mouseout', lazyClose)
			el.removeEventListener('mouseover', lazyOpen)
			el.removeEventListener('mouseout', lazyClose)
		} else if (trigger === 'click') {
			target.removeEventListener('click', lazyOpen)
			document.removeEventListener('click', clickoutHandle)
		}
	}
}

function noop() {}

export default class Pop {
	constructor(opts) {
		const { target, content, position, trigger, visible, spacing, onOpen, onClose, onToggle, delay } = opts
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
			delay: delay || 100,
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

	lazyOpen() {
		clearTimeout(this.timer)
		if (!this.visible) {
			this.open()
		}
	}

	lazyClose() {
		clearTimeout(this.timer)
		this.timer = setTimeout(() => {
			if (this.visible) {
				this.close()
			}
		}, this.delay)
	}

	open() {
		this.updatePostion()
		this.show()
		this.visible = true
		this.onToggle(this.visible)
		this.onOpen(this.visible)
	}

	close() {
		this.hide()
		this.visible = false
		this.onToggle(this.visible)
		this.onClose(this.visible)
	}

	show() {
		this.el.classList.add('show')
		this.el.style.display = ''
	}

	hide() {
		this.el.classList.remove('show')
		this.el.style.display = 'none'
	}
}


function addEnterTransition(el, name) {
	el.style.display = ''
	el.classList.add(`${name}-enter`)

	function endTransition() {
		console.log('removeEventListener')
		el.classList.remove(`${name}-enter`, `${name}-enter-active`)
		el.removeEventListener('transitionend', endTransition)
	}

	setTimeout(() => {
		el.classList.add(`${name}-enter-active`)
		console.log('addEnterTransition')
		el.addEventListener('transitionend', endTransition, false)
	}, 20)
}

function addLeaveTransition(el, name) {
	el.classList.add(`${name}-leave`)

	function endTransition() {
		el.classList.remove(`${name}-leave`, `${name}-leave-active`)
		el.removeEventListener('transitionend', endTransition, false)
	}

	el.classList.add(`${name}-leave-active`)
	el.addEventListener('transitionend', endTransition, false)
	setTimeout(() => {
		el.style.display = 'none'
	}, 20)
}
