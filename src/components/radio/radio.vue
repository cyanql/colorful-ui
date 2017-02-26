<template>
	<label class="c-radio" :class="oClass">
		<span class="c-radio-circle">
			<input
				class="c-radio-input"
				type="radio"
				:value="checkedValue"
				v-model="oValue"
				:checked="checked"
				:disabled="disabled"
			>
			<span class="c-radio-outer" :style="oStyle.outer"></span>
			<span class="c-radio-inner" :style="oStyle.inner"></span>
		</span>
		<span class="c-radio-text" v-if="$slots.default">
			<slot></slot>
		</span>
	</label>
</template>

<script>
import getAncester from 'src/utils/getAncester'

export default {
	name: 'c-radio',
	props: {
		color: {
			type: String,
			default: 'primary'
		},
		value: null,
		checkedValue: null,
		checked: {
			type: Boolean,
			default: false
		},
		disabled: {
			type: Boolean,
			default: false
		}
	},
	computed: {
		oClass() {
			return {
				[this.color]: this.color.indexOf('#') === -1,
				checked: this.oChecked,
				disabled: this.disabled
			}
		},
		oStyle() {
			const { color } = this
			return color.indexOf('#') > -1 && this.oChecked ? {
				inner: {backgroundColor: color},
				outer: {borderColor: color}
			} : {}
		},
		oParent() {
			return getAncester(this, 'c-radio-group')
		},
		oValue: {
			get() {
				return this.value
			},
			set(value) {
				if (this.oParent) {
					this.oParent.$emit('input', value)
					this.oParent.$emit('change', value)
				}
				this.$emit('input', value)
				this.$emit('change', value)
			}
		},
		oChecked() {
			if (this.oParent) {
				return this.checkedValue === this.oParent.value
			} else {
				return this.checkedValue === this.value
			}
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

	&.disabled {
		opacity: .5;
		cursor: not-allowed;
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

	&-circle {
	    display: inline-block;
		position: relative;
	    width: $radio-size;
	    height: $radio-size;
		vertical-align: middle;
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

	&-text {
		padding: $radio-text-padding;
	}
}
</style>
