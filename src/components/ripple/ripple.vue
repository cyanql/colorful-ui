<template>
	<div class="c-ripple-container"></div>
</template>

<script>
function getTargetRippleStyle(e, el) {
	let rect, x, y, style
	rect = el.getBoundingClientRect()
	x = e.clientX - rect.left
	y = e.clientY - rect.top

	const radius = Math.sqrt(Math.pow(rect.width, 2), Math.pow(rect.height, 2))
	const diameter = radius * 2
	style = {}
	style.width = diameter + 'px'
	style.height = diameter + 'px'
	style.left = (x - radius) + 'px'
	style.top = (y - radius) + 'px'
	return style
}

export default {
	name: 'c-ripple',
	methods: {
		init() {
			const parentEl = this.$el.parentNode

			if (!parentEl || (parentEl && getComputedStyle(parentEl).position === 'static')) {
				return console.error('[c-ripple]要求存在父级元素且position需要设置为非static的值')
			}

			const container = this.$el
			const span = document.createElement('span')
			const TIMEOUT = 500

			span.classList.add('c-ripple')

			parentEl.addEventListener('mousedown', e => {
				const ripple = span.cloneNode(true)
				Object.assign(ripple.style, getTargetRippleStyle(e, parentEl))
				container.appendChild(ripple)
				setTimeout(() => {
					ripple.classList.add('transiting')
				}, 0)

				const mouseupFn = () => {
					parentEl.removeEventListener('mouseup', mouseupFn)

					ripple.classList.add('done')
					setTimeout(() => {
						container.removeChild(ripple)
					}, TIMEOUT)
				}
				parentEl.addEventListener('mouseup', mouseupFn)
			})
		}
	},
	mounted() {
		this.$nextTick(() => {
			this.init()
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
}

.c-ripple {
    border-radius: 50%;
	pointer-events: none;
	user-select: none;
	background-color: currentColor;

    position: absolute;
    top: 0;
    left: 0;

	opacity: .2;
	transform: scale(0);
	transition: transform .4s ease-out, opacity .4s ease-out;

	&.transiting {
		opacity: .4;
		transform: scale(1);
	}

	&.done {
		opacity: 0;
		transform: scale(1);
	}
}
</style>
