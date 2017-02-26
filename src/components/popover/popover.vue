<template>
	<div class="c-popover" @click="onClick">
		<slot></slot>
    </div>
</template>

<script>
import Pop from 'src/lib/pop'

export default {
	name: 'c-popover',
	props: {
		target: String,
		trigger: {
			type: String,
			default: 'hover',
			validator(value) {
				return ['hover', 'click'].indexOf(value) > -1
			}
		},
		position: {
			type: String,
			default: 'bottom-left'
		},
		visible: Boolean
	},
	data() {
		return {
			pop: null
		}
	},
	watch: {
		visible(value) {
			value ? this.pop.lazyOpen() : this.pop.lazyClose()
		}
	},
	methods: {
		onOpen(visible) {
			this.$emit('open', visible, this.pop)
		},
		onClose(visible) {
			this.$emit('close', visible, this.pop)
		},
		onToggle(visible) {
			this.$emit('toggle', visible, this.pop)
		},
		onClick(e) {
			this.$emit('click', e, this.pop)
		}
	},
	beforeDestroy() {
		this.pop.destroy()
	},
	mounted() {
		const { $parent, $el, target, position, trigger, onOpen, onClose, onToggle, visible } = this
		,	vm = $parent.$refs[target] || $parent
		,	targetEl = vm ? vm.$el : null

		this.pop = new Pop({
			target: targetEl,
			el: $el,
			position: position,
			trigger: trigger,
			visible,
			onOpen,
			onClose,
			onToggle
		})
	}
}
</script>

<style lang="scss">
@import "~src/styles/variables";

.c-popover {
	padding: $popover-padding;
	background: $popover-bg-color;
	box-shadow: $popover-box-shadow;
}


.pop {
	display: block;
    position: absolute;
    left: -9999px;
    top: -9999px;
    font-size: 12px;
    font-weight: normal;
    z-index: $zindex-popover;
	// transition: transform .2s cubic-bezier(.4,0,.2,1);


	&.show {
		animation: pop .2s cubic-bezier(.4,0,.2,1);
	}
}

@keyframes pop {
	0% {
		opacity: 0;
		transform: scale(.65);
	}
	100% {
		opacity: 1;
		transform: scale(1);
	}
}
</style>
