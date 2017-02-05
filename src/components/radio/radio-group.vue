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
	},
	mounted() {
		const children = this.$children

		children && children.forEach(vm => {
			vm.$on('input', this.onInput)
			vm.$on('change', this.onChange)
		})
	},
	beforeDestroy() {
		const children = this.$children

		children && children.forEach(vm => {
			vm.$off('input', this.onInput)
			vm.$off('change', this.onChange)
		})
	},
	methods: {
		onInput(checkedValue, e) {
			this.$emit('input', checkedValue, e)
		},
		onChange(checked, e) {
			this.$emit('change', checked, e)
		}
	}
}
</script>
