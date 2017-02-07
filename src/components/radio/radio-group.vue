<template>
	<label class="c-radio-group">
		<slot></slot>
	</label>
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
		},
		disabled: {
			type: Boolean,
			default: false
		}
	}
}
</script>
