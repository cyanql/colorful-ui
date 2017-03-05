<template>
	<div class="c-dropdown">
		<div class="c-dropdown-trigger" ref="triggerEl">
			<slot></slot>
		</div>
		<transition name="scale">
			<div ref="contentEl" class="c-dropdown-content" :class="position" v-show="visibleState">
				<slot name="content"></slot>
			</div>
		</transition>
	</div>
</template>

<script>
import align from './align'
import addClickoutListener from 'src/utils/addClickoutListener'

function getHideOffsetSize(el) {
	const offset = {}, display = el.style.display
	el.style.display = ''
	offset.offsetWidth = el.offsetWidth
	offset.offsetHeight = el.offsetHeight
	el.style.display = display
	return offset
}

export default {
	name: 'c-dropdown',
	props: {
		position: {
			type: String,
			default: 'left-bottom'
		},
		delay: {
			type: Number,
			default: 100
		},
		trigger: {
			type: String,
			default: 'hover',
			validator(value) {
				return ['hover', 'click'].indexOf(value) > -1
			}
		},
		visible: Boolean
	},
	data() {
		return {
			visibleState: this.visible,
			timer: null,
			removeClickoutListener: null
		}
	},
	watch: {
		visible(value) {
			value ? this.onOpen() : this.onClose()
		}
	},
	computed: {
		updatePostionFn() {
			const positionArr = this.position.split('-')
			,	posA = positionArr[0]
			,	posB = positionArr[1] || 'center'
			try {
				const alignFn = align[posA][posB]
				if (!alignFn)
					throw new Error()
				this.$refs.contentEl.transformOrigin = positionArr.join(' ')
				return alignFn
			} catch(e) {
				throw new Error(`[${this.$options.name}] prop position is unvalid`)
			}
		}
	},
	methods: {
		updatePosition() {
			const contentEl = this.$refs.contentEl
			,	triggerEl = this.$refs.triggerEl
			,	size = getHideOffsetSize(contentEl)

			this.updatePostionFn(contentEl.style, triggerEl, size)
		},
		onOpen() {
			clearTimeout(this.timer)
			if (!this.visibleState) {
				this.visibleState = true
				this.$emit('open', true)
				this.$emit('toggle', true)
			}
		},
		onClose() {
			clearTimeout(this.timer)
			this.timer = setTimeout(() => {
				if (this.visibleState) {
					this.visibleState = false
					this.$emit('close', false)
					this.$emit('toggle', false)
				}
			}, this.delay)
		}
	},
	mounted() {
		const triggerEl = this.$refs.triggerEl
		const contentEl = this.$refs.contentEl

		if (this.trigger === 'hover') {
			triggerEl.addEventListener('mouseover', this.onOpen, false)
			triggerEl.addEventListener('mouseout', this.onClose, false)
			contentEl.addEventListener('mouseover', this.onOpen, false)
			contentEl.addEventListener('mouseout', this.onClose, false)
		} else if (this.trigger === 'click') {
			triggerEl.addEventListener('click', this.onOpen, false)
			this.removeClickoutListener = addClickoutListener(triggerEl, contentEl, () => {
				this.onClose()
			})
		}
		this.updatePosition()
	},
	beforeDestroy() {
		const triggerEl = this.$refs.triggerEl
		const contentEl = this.$refs.contentEl
		if (this.trigger === 'hover') {
			triggerEl.removeEventListener('mouseover', this.onOpen, false)
			triggerEl.removeEventListener('mouseout', this.onClose, false)
			contentEl.removeEventListener('mouseover', this.onOpen, false)
			contentEl.removeEventListener('mouseout', this.onClose, false)
		} else if (this.trigger === 'click') {
			triggerEl.removeEventListener('click', this.onOpen, false)
			this.removeClickoutListener()
		}
	}
}
</script>

<style lang="scss">
@import "~src/styles/variables";

$dropdown-arrow-size: 5px;
$dropdown-arrow-stroke: 1px;
$dropdown-arrow-stroke-color: rgba(0,0,0,.1);

$arrow-arrow-stroke-size: $dropdown-arrow-size + $dropdown-arrow-stroke;

@mixin arrow-position($position-1, $position-2, $position-1-opposite, $offset-per) {
	margin-#{$position-1-opposite}: $arrow-arrow-stroke-size;
	transform-origin: if($offset-per == 50%, center, $position-2) $position-1-opposite 0px;

	&:before {
		#{$position-1-opposite}: -$arrow-arrow-stroke-size;
		margin-#{$position-2}: -$arrow-arrow-stroke-size;
		border-#{$position-1}-color: $dropdown-arrow-stroke-color;
	}

	&:after {
		#{$position-1-opposite}: -$dropdown-arrow-size;
		margin-#{$position-2}: -$dropdown-arrow-size;
		border-#{$position-1}-color: $dropdown-bg-color;
	}

	&:before,
	&:after {
		#{$position-2}: $offset-per;
		border-#{$position-1-opposite}-width: 0;
	}
}

.c-dropdown {
	position: relative;
	display: inline-block;
	cursor: pointer;

	&-trigger {
		display: inline-block;
	}

	&-content {
		position: absolute;
		white-space: nowrap;
		background-color: $dropdown-bg-color;
		z-index: $zindex-dropdown;

		&.top-left {@include arrow-position(top, left, bottom, 15px);}
		&.top {@include arrow-position(top, left, bottom, 50%);}
		&.top-right {@include arrow-position(top, right, bottom, 15px);}

		&.bottom-left {@include arrow-position(bottom, left, top, 15px);}
		&.bottom {@include arrow-position(bottom, left, top, 50%);}
		&.bottom-right {@include arrow-position(bottom, right, top, 15px);}

		&.left-top {@include arrow-position(left, top, right, 15px);}
		&.left {@include arrow-position(left, top, right, 50%);}
		&.left-bottom {@include arrow-position(left, bottom, right, 15px);}

		&.right-top {@include arrow-position(right, top, left, 15px);}
		&.right {@include arrow-position(right, top, left, 50%);}
		&.right-bottom {@include arrow-position(right, bottom, left, 15px);}

		&:before,
		&:after {
			content: '';
			position: absolute;
			display: block;
			width: 0;
			height: 0;
			border-color: transparent;
			border-style: solid;
		}

		&:before {
			border-width: $arrow-arrow-stroke-size;
		}

		&:after {
			border-width: $dropdown-arrow-size;
		}
	}

	.scale {
		&-enter-active,
		&-leave-active {
			transition: transform .2s ease, opacity .2s ease;
		}

		&-enter,
		&-leave-active {
			opacity: 0;
			transform: scale(.65);
		}
	}
}
</style>
