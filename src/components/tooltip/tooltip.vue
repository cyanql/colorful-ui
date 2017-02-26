<template>
	<c-dropdown class="c-tooltip" :position="position">
		<slot></slot>
		<template slot="content">
			{{text}}
		</template>
	</c-dropdown>
</template>
<script>
export default {
	name: 'c-tooltip',
	props: {
		position: String,
		text: String
	}
}
</script>
<style lang="scss">
@import "~src/styles/variables";

.c-tooltip {
	.c-dropdown-content {
		color: $tooltip-color;
		font-size: $tooltip-font-size;
		padding: $tooltip-padding;
		border-radius: $tooltip-border-radius;
		background-color: $tooltip-bg-color;
	}
}
</style>
