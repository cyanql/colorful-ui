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
.c-tab {
	display: inline-block;
	width: 100%;
	padding: 10px;
}

</style>
