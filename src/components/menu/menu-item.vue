<template>
	<c-button
		class="c-menu-item"
		:class="oClass"
		:style="oStyle"
		:icon="icon"
		color="ghost"
		@click="onClick"
		>
		<slot></slot>
	</c-button>
</template>

<script>
import Event from 'src/mixins/event'

export default {
	name: 'c-menu-item',
	mixins: [Event],
	props: {
		icon: String,
		selected: Boolean,
		level: {
			type: Number,
			default: 1
		},
		indent: {
			type: Number,
			default: 30
		},
		data: null
	},
	computed: {
		oStyle() {
			return {
				paddingLeft: this.level * this.indent + 'px'
			}
		},
		oClass() {
			return {
				'selected': this.selected
			}
		}
	},
	methods: {
		onClick(e) {
			this.$emit('click', e)
			this.bubble('c-menu', 'select', this.data)
		}
	}
}
</script>

<style lang="scss">
.c-menu-item {
	display: block;
	text-align: left;
	width: 100%;
	padding: 10px 30px;
	border-radius: 0;

	&:not([disabled]):hover {
		background: #e7e7e7;
	}

	&.selected {
		border-right: 2px solid #108ee9;
		background: #f6f6f6;
	}
}
</style>
