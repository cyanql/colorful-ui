<template>
	<label class="c-radio" :class="oClass" @click="onInput">
		<input
			class="c-radio-input"
			type="radio"
			@change="onChange"
			:value="checkedValue"
		>
		<span class="c-radio-outer"></span>
		<span class="c-radio-inner"></span>
	</label>
</template>

<script>
import eventHandler from 'src/utils/eventHandler'

export default {
	name: 'c-radio',
	props: {
		color: {
			type: String,
			default: 'primary'
		},
		value: [String, Number, Boolean],
		checkedValue: {
			type: [String, Number, Boolean],
			required: true
		},
		disabled: {
			type: Boolean,
			default: false
		}
	},
	computed: {
		isGroup() {
			return this.$parent.$options.name === 'c-radio-group'
		},
		oChecked() {
			return this.value === this.checkedValue || (this.isGroup && this.checkedValue === this.$parent.value)
		},
		oClass() {
			return {
				checked: this.oChecked,
				[this.color]: this.color,
				disabled: this.disabled
			}
		}
	},
	methods: {
		onInput(e) {
			if (!this.disabled) {
				this.$emit('input', this.checkedValue, e)
			}
		},
		onChange(e) {
			this.$emit('change', this.oChecked, e)
		}
	}
}
</script>

<style lang="scss">
@import "~src/styles/variables";

@mixin radio-color($color) {
	.c-radio-inner {
		background-color: $color;
	}

	.c-radio-outer {
		border-color: $color;
	}
}

.c-radio {
    display: inline-block;
	position: relative;
    width: 20px;
    height: 20px;

	&.disabled {
		opacity: .5;
	}

	&.checked {
		.c-radio-inner {
			background-color: rgba(0,0,0,.5);
			transform: scale(.5);
		}

		&:not([disabled]) {
			&.primary {
				@include radio-color($blue-6);
			}

			&.success {
				@include radio-color($green-6);
			}

			&.warning {
				@include radio-color($orange-6);
			}

			&.error {
				@include radio-color($red-6);
			}
		}
	}

	&-input {
		position: absolute;
		opacity: 0;
		visibility: hidden;
		z-index: -9999;
		width: 100%;
		height: 100%;
	}

	&-outer,
	&-inner {
		display: inline-block;
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		border-radius: 50%;
	}

	&-outer {
		border: 2px solid rgba(0,0,0,.5);
		transition: border-color .2s ease;
	}

	&-inner {
		transform: scale(0);
		transition: transform .2s ease;
	}
}
</style>
