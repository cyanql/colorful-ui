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
		init() {
			const { $parent, $el, target, position, trigger, onOpen, onClose, onToggle, visible } = this
			,	vm = $parent.$refs[target] || $parent
			,	targetEl = vm ? vm.$el : null

			this.pop = new Pop({
				target: targetEl,
				content: $el,
				position: position,
				trigger: trigger,
				visible,
				onOpen,
				onClose,
				onToggle
			})
		},
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
		this.init()
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
	// transition: transform .2s cubic-bezier(.4,0,.2,1);


	&.show {
		animation: pop .2s cubic-bezier(.4,0,.2,1);
	}
}

@keyframes pop {
	0% {
		opacity: .5;
		transform: scale(.75);
	}
	100% {
		opacity: 1;
		transform: scale(1);
	}
}
</style>
