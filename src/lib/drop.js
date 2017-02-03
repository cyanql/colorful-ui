const cssText = `
.drop {
    position: absolute;
    left: -9999px;
    top: -9999px;
    z-index: 1050;
    display: block;
    font-size: 12px;
    font-weight: normal;
    line-height: 1.5;
}
`

const container = document.createElement('div')
document.body.appendChild(container)

function initElement(drop) {
	var el = document.createElement('div')
	el.className = 'drop'
	// el.style.cssText = cssText
	el.appendChild(drop.content)
	container.appendChild(el)
	drop.el = el
}

function initEvent(drop) {
	const { target, content, position, eventType, el, spacing } = drop
	,	tRect = target.getBoundingClientRect()
	,	cRect = content.getBoundingClientRect()
	,	posArr = position.split('-')
	,	posA = posArr[0]
	,	posB = posArr[1] || 'center'

	try {
		({
			top: {
				left() {
					el.style.top = tRect.top - cRect.height - spacing + 'px'
					el.style.left = tRect.left + 'px'
				},
				center() {
					el.style.top = tRect.top - cRect.height - spacing + 'px'
					el.style.left = tRect.left - (cRect.width - tRect.width) / 2 + 'px'
				},
				right() {
					el.style.top = tRect.top - cRect.height - spacing + 'px'
					el.style.left = tRect.left - (cRect.width - tRect.width) + 'px'
				}
			},
			bottom: {
				left() {
					el.style.top = tRect.bottom + spacing + 'px'
					el.style.left = tRect.left + 'px'
				},
				center() {
					el.style.top = tRect.bottom + spacing + 'px'
					el.style.left = tRect.left - (cRect.width - tRect.width) / 2 + 'px'
				},
				right() {
					el.style.top = tRect.bottom + spacing + 'px'
					el.style.left = tRect.left - (cRect.width - tRect.width) + 'px'
				}
			},
			left: {
				top() {
					el.style.top = tRect.top + 'px'
					el.style.left = tRect.left - cRect.width - spacing + 'px'
				},
				center() {
					el.style.top = tRect.top - (cRect.height - tRect.height) / 2 + 'px'
					el.style.left = tRect.left - cRect.width - spacing + 'px'
				},
				bottom() {
					el.style.top = tRect.top - (cRect.height - tRect.height) + 'px'
					el.style.left = tRect.left - cRect.width - spacing + 'px'
				}
			},
			right: {
				top() {
					el.style.top = tRect.top + 'px'
					el.style.left = tRect.right + spacing + 'px'
				},
				center() {
					el.style.top = tRect.top - (cRect.height - tRect.height) / 2 + 'px'
					el.style.left = tRect.right + spacing + 'px'
				},
				bottom() {
					el.style.top = tRect.top - (cRect.height - tRect.height) + 'px'
					el.style.left = tRect.right + spacing + 'px'
				}
			}
		})[posA][posB]()
	} catch(e) {
		throw new Error('position is not in conformity with the requirements')
	}
}

export default class Drop {
	constructor(opts) {
		const { target, content, position, trigger, visible, spacing } = opts
		if (!target)
			throw new Error('target cann\'t be null')

		Object.assign(this, {
			target,
			content,
			position: position || 'left bottom',
			eventType: trigger === 'hover' ? 'mouseover' : 'click',
			spacing: spacing || 10,
			el: null
		})

		initElement(this)
		initEvent(this)

		this.el.style.display = visible ? 'block' : 'none'
	}

	remove() {
		this.el.parentNode.removeChild(this.el)
	}

	destroy() {
		this.el = null
	}

	open() {
		this.el.style.display = 'block'
	}

	close() {
		this.el.style.display = 'none'
	}
}
