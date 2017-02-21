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
	methods: {
		onSelect(itemValue) {
			if (this.multiple) {
				const index = this.value.indexOf(itemValue)
				if (index > -1) {
					this.value.splice(index, 1)
				} else {
					this.value.push(itemValue)
				}
			} else {
				this.$emit('input', itemValue)
				this.$emit('select', itemValue)
			}
		}
	}
}
</script>

<style lang="scss">

.c-menu {
	display: inline-block;
	width: 200px;
	box-shadow: 0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.2), 0 1px 5px 0 rgba(0,0,0,.12);

	&,
	& ul,
	& ol,
	& li {
		list-style: none !important;
	}
}
</style>
