<template>
	<div class="c-radio-group">
		<slot></slot>
	</div>
</template>

<script>

export default {
	name: 'c-radio-group',
	props: {
		color: {
			type: String,
			default: 'primary'
		},
		value: {
			type: [String, Number, Boolean],
			required: true
		}
	}
}
</script>

<style lang="scss">
.c-radio-group {
	display: inline-block;
}
</style>
