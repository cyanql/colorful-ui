<template>
	<div class="c-dropdown">
		<slot></slot>
		<c-popover class="c-dropdown-content" :visible="visible" :trigger="trigger" :position="position" @click="onClick">
			<slot name="content"></slot>
		</c-popover>
	</div>
</template>

<script>
import Popover from '../popover'

export default {
	name: 'c-dropdown',
	props: {
		trigger: String,
		visible: Boolean,
		position: String
	},
	methods: {
		onClick(e, pop) {
			pop.close()
		}
	},
	components: {
		Popover
	}
}
</script>

<style lang="scss">
.c-dropdown {
	display: inline-block;

	&-content {
		padding: 10px 0;

		.c-menu {
			box-shadow: none;
		}
	}
}
</style>
