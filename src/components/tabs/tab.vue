<template>
	<div class="c-tab">
		<slot></slot>
	</div>
</template>

<script>
export default {
	name: 'c-tab',
	props: {
		title: String,
		value: null
	}
}
</script>

<style lang="scss">
@import "~src/styles/variables";

.c-tab {
	display: inline-block;
	width: 100%;
	padding: $tab-padding;
}

</style>
