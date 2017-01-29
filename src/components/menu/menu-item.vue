<template>
	<c-button
		class="c-menu-item"
		:class="selected && 'selected'"
		:style="{paddingLeft}"
		:icon="icon"
		color="ghost"
		@click="onClick"
		>
		<slot></slot>
	</c-button>
</template>

<script>

export default {
	name: 'c-menu-item',
	props: {
		icon: String,
		selected: Boolean,
		level: {
			type: Number,
			default: 1
		},
		indent: {
			type: Number,
			default: 20
		}
	},
	computed: {
		paddingLeft() {
			return this.level * this.indent + 'px'
		}
	},
	methods: {
		onClick(e) {
			this.$emit('click', e)
		}
	}
}
</script>

<style lang="scss">
.c-menu-item {
	display: block;
	text-align: left;
	width: 100%;
	padding: 10px 20px;
	border-radius: 0;

	&:hover {
		background: #e7e7e7;
	}

	&.selected {
		border-right: 3px solid #108ee9;
		background: #f6f6f6;
	}
}
</style>
