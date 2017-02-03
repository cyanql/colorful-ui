<template>
	<span class="c-ripple-container">
		<span class="c-ripple" :class="opt.class" :style="opt.style" v-for="opt in opts"></span>
	</span>
</template>

<script>
function onMouseDown(e, parentEl) {
	let rect, x, y, style
	rect = parentEl.getBoundingClientRect()
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
	data() {
		return {
			opts: []
		}
	},
	methods: {
		init() {
			const parentEl = this.$parent.$el

			if (!parentEl) {
				return
			}
			const TIMEOUT = 450
			let opt = {}

			parentEl.addEventListener('mousedown', e => {
				opt = {
					class: '',
					style: null
				}
				opt.style = onMouseDown(e, parentEl)
				this.opts.push(opt)
				setTimeout(() => {
					opt.class = 'transiting'
				}, 0)
			})
			parentEl.addEventListener('mouseup', e => {
				opt.class = 'done'
				setTimeout(() => {
					this.opts.shift()
				}, TIMEOUT)
			})
			parentEl.className += ' c-ripple-target'
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

.c-ripple-target {
	position: relative;
	overflow: hidden;
}
</style>
