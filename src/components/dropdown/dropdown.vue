<template>
	<div class="c-dropdown">
		<slot></slot>
		<transition name="scale">
			<div ref="content" class="c-dropdown-content" v-show="visibleState">
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
			default: 'bottom-left'
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
			triggerEl: null,
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
				this.$refs.content.transformOrigin = positionArr.join(' ')
				return alignFn
			} catch(e) {
				throw new Error(`[${this.$options.name}] prop position is unvalid`)
			}
		}
	},
	methods: {
		updatePosition() {
			const contentEl = this.$refs.content
			,	triggerEl = this.triggerEl
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
		const defaultSlots = this.$slots.default
		const triggerEl = defaultSlots && defaultSlots[0] && defaultSlots[0].elm
		if (!triggerEl)
			throw new Error(`[${this.$options.name}] need $slots.default`)

		const contentEl = this.$refs.content

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
		this.triggerEl = triggerEl
		this.updatePosition()
	},
	beforeDestroy() {
		const triggerEl = this.triggerEl
		const contentEl = this.$refs.content
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

.c-dropdown {
	position: relative;
	display: inline-block;
	cursor: pointer;

	&-content {
		position: absolute;
		white-space: nowrap;
		background-color: #fff;
		z-index: $zindex-menu;
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
