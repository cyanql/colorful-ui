<template>
	<ul class="c-menu">
		<slot></slot>
	</ul>
</template>

<script>
export default {
	name: 'c-menu',
	props: {
		value: null,
		multiple: Boolean,
		indent: {
			type: Number,
			default: 20
		}
	},
	data() {
		return {
			valueState: this.multiple ? this.value.slice() : this.value
		}
	},
	watch: {
		value(val) {
			this.valueState = val
		}
	},
	methods: {
		onSelect(itemValue) {
			if (this.multiple) {
				const index = this.valueState.indexOf(itemValue)
				if (index > -1) {
					this.valueState.splice(index, 1)
				} else {
					this.valueState.push(itemValue)
				}
				this.$emit('input', this.valueState, itemValue)
				this.$emit('select', this.valueState, itemValue)
			} else {
				this.$emit('input', itemValue)
				this.$emit('select', itemValue)
			}
		}
	}
}
</script>

<style lang="scss">
@import "~src/styles/variables";

.c-menu {
	display: inline-block;
	vertical-align: middle;
	width: $menu-width;
	box-shadow: $menu-box-shadow;

	&,
	& ul,
	& ol,
	& li {
		list-style: none !important;
	}
}
</style>
