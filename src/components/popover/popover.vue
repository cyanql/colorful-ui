<template>
	<div class="c-popover">
		<slot></slot>
    </div>
</template>

<script>
import Drop from 'src/lib/drop'

export default {
	name: 'c-popover',
	props: {
		target: String,
		trigger: {
			type: String,
			default: 'hover',
			validator(value) {
				return ['hover', 'click'].includes(value)
			}
		},
		position: {
			type: String,
			default: 'bottom-left'
		},
		visible: Boolean
	},
	mounted() {
		this.$nextTick(() => {
			this.init()
		})
	},
	beforeDestroy() {
		this.drop.remove()
		this.drop.destroy()
	},
	data() {
		return {
			drop: null
		}
	},
	methods: {
		init() {
			const { $parent, $el, target, position, trigger, onOpen, onClose, onToggle, visible } = this
			,	vm = $parent.$refs[target] || $parent
			,	targetEl = vm ? vm.$el : null

			const drop = new Drop({
				target: targetEl,
				content: $el,
				position: position,
				trigger: trigger,
				visible,
				onOpen,
				onClose,
				onToggle
			})

			this.drop = drop
		},
		onOpen(visible) {
			this.$emit('open', visible)
		},
		onClose(visible) {
			this.$emit('close', visible)
		},
		onToggle(visible) {
			this.$emit('toggle', visible)
		}
	}
}
</script>

<style lang="scss">
@import "~src/styles/variables";

.c-popover {
	padding: 10px 20px;
	background: white;
	box-shadow: 0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.2), 0 1px 5px 0 rgba(0,0,0,.12);
}


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
</style>
