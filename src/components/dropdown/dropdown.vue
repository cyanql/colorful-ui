<template>
	<div class="c-dropdown">
		<slot></slot>
		<c-popover class="c-dropdown-menu" visible>
			<slot name="menu"></slot>
		</c-popover>
	</div>
</template>

<script>
import Popover from '../popover'

export default {
	name: 'c-dropdown',
	props: {
		trigger: {
			type: String,
			default: 'hover',
			validator(value) {
				return ['hover', 'click'].includes(value)
			}
		},
		visible: Boolean
	},
	components: {
		Popover
	}
}
</script>

<style lang="scss">
.c-dropdown {
	display: inline-block;

	&-menu {
		padding: 10px 0;
		box-shadow: none;
	}
}
</style>
