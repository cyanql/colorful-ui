<template>
	<div class="c-tooltip" :class="oClass" @click="onClick">
		<slot></slot>
		<div class="c-tooltip-content">
			<transition name="options">
				<slot name="content"></slot>
			</transition>
		</div>
	</div>
</template>

<script>
export default {
	name: 'c-tooltip',
	props: {
		position: {
			type: String,
			default: 'bottom'
		},
		trigger: {
			type: String,
			default: 'hover',
			validator(value) {
				return ['hover', 'click'].includes(value)
			}
		},
		visible: Boolean
	},
	computed: {
		oClass() {
			return [this.position]
		}
	},
	methods: {
		init() {
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
	mounted() {
		this.init()
	}
}
</script>

<style lang="scss">
.c-tooltip {
	position: relative;
	cursor: pointer;

	&-content {
		position: absolute;
		width: 100%;
		margin-top: 5px;
		font-size: 12px;
		background-color: #fff;
		z-index: $zindex-menu;
		box-shadow: 0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.2), 0 1px 5px 0 rgba(0,0,0,.12);

		&.top-left {bottom: 0; left: 0;}
		&.top {bottom: 0;}
		&.top-right {bottom: 0; right: 0;}

		&.bottom-left {top: 0; left: 0;}
		&.bottom {top: 0;}
		&.bottom-right {top: 0; right: 0;}

		&.left-top {right: 0; top: 0;}
		&.left {right: 0;}
		&.left-bottom {right: 0; bottom: 0;}

		&.right-top {left: 0; top: 0;}
		&.right {left: 0;}
		&.right-bottom {left: 0; bottom: 0;}
	}
}
</style>
