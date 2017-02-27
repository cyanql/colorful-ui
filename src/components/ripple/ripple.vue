<template>
	<div class="c-ripple-container"></div>
</template>

<script>
function setTargetRippleStyle(style, e, el) {
	let rect, x, y
	rect = el.getBoundingClientRect()
	x = e.clientX - rect.left
	y = e.clientY - rect.top

	const radius = Math.sqrt(Math.pow(rect.width, 2), Math.pow(rect.height, 2))
	const diameter = radius * 2
	style.width = diameter + 'px'
	style.height = diameter + 'px'
	style.left = (x - radius) + 'px'
	style.top = (y - radius) + 'px'
}

export default {
	name: 'c-ripple',
	props: {
		target: {
			type: String,
			default: 'parentNode'	// 'parentComponent' or ref
		}
	},
	mounted() {
		const { target, $el, $parent, $vnode } = this
		let targetEl

		if (target === 'parentNode') {
			targetEl = $el.parentNode
		} else if (target === 'parentComponent') {
			targetEl = $parent.$el
		} else {
			targetEl = $vnode.context.$refs[target]
			targetEl = targetEl._isVue ? targetEl.$el : targetEl
		}

		if (!targetEl) {
			return console.error('[c-ripple] required the host target')
		}

		if (getComputedStyle(targetEl).position === 'static') {
			targetEl.style.position = 'relative'
		}

		const container = $el
		const span = document.createElement('span')
		const TIMEOUT = 500

		span.classList.add('c-ripple')

		targetEl.addEventListener('mousedown', e => {
			const ripple = span.cloneNode(true)
			setTargetRippleStyle(ripple.style, e, targetEl)
			container.appendChild(ripple)
			setTimeout(() => {
				ripple.classList.add('transiting')
			}, 0)

			const mouseupFn = () => {
				targetEl.removeEventListener('mouseup', mouseupFn)

				ripple.classList.add('done')
				setTimeout(() => {
					container.removeChild(ripple)
				}, TIMEOUT)
			}
			targetEl.addEventListener('mouseup', mouseupFn)
		})
	}
}
</script>

<style lang="scss">
.c-ripple-container {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;

	border-radius: inherit;

	overflow: hidden;
	-webkit-mask-image: -webkit-radial-gradient(circle, white, black);
}

.c-ripple {
	position: absolute;
	top: 0;
	left: 0;

	border-radius: 50%;
	pointer-events: none;
	user-select: none;
	background-color: currentColor;

	opacity: .2;
	transform: scale(0);
	transition: transform .4s ease-out, opacity .4s ease-out;

	&.transiting {
		opacity: .4;
		transform: scale(1);
	}

	&.done {
		opacity: 0;
	}
}
</style>
