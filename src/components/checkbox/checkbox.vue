<template>
	<label class="c-checkbox" :class="oClass">
		<span class="c-checkbox-mark">
			<span class="c-checkbox-inner" :style="oStyle"></span>
			<input class="c-checkbox-input" type="checkbox" @change="onChange" v-model="checked" :disabled="disabled">
		</span>
		<span class="c-checkbox-text">
			<slot></slot>
		</span>
	</label>
</template>

<script>
export default {
	name: 'c-checkbox',
	props: {
		value: {
			type: Boolean,
			default: false
		},
		color: {
			type: String,
			default: 'primary',
			validator(value) {
				return ['primary', 'success', 'warning', 'error'].indexOf(value) > -1 || value.indexOf('#') === 0
			}
		},
		disabled: {
			type: Boolean,
			default: false
		}
	},
	data() {
		return {
			checked: this.value === true
		}
	},
	watch: {
		value(val) {
			this.checked = val
		}
	},
	computed: {
		oClass() {
			const { checked, color, disabled } = this
			return [{
				[color]: color.indexOf('#') === -1,
				checked,
				disabled
			}]
		},
		oStyle() {
			const { color } = this
			return color.indexOf('#') > -1 && this.checked ? {
				backgroundColor: color,
				borderColor: color
			} : null
		}
	},
	methods: {
		onChange(e) {
			this.$emit('input', this.checked, e)
			this.$emit('change', this.checked, e)
		}
	}
}
</script>

<style lang="scss">
@import "~src/styles/variables";

@mixin background-border($bg-color, $border-color: transparent) {
	.c-checkbox-inner {
		background-color: $bg-color;
		border-color: $border-color;
	}
	// background-image: -webkit-linear-gradient(top, $background, $border);
}

.c-checkbox {
	cursor: pointer;

	&:not(.disabled):hover {
		.c-checkbox-inner {
			border-color: $checkbox-hover-border-color;
		}
	}

	&-mark {
		position: relative;
		line-height: 1;
	    display: inline-block;
	    vertical-align: middle;
	}


	&.checked {
		.c-checkbox-inner {
			&:after {
				transform: rotate(45deg) scale(1);
			}
		}
		&.primary {
			@include background-border($blue-6, $blue-7);
		}

		&.success {
			@include background-border($green-6, $green-7);
		}

		&.warning {
			@include background-border($orange-6, $orange-7);
		}

		&.error {
			@include background-border($red-6, $red-7);
		}
	}

	&.disabled {
		opacity: .6;
		cursor: not-allowed;
	}

	&-inner {
		display: inline-block;
		position: relative;
		left: 0;
		top: 0;
		width: $checkbox-size;
		height: $checkbox-size;
		border: 1px solid $checkbox-border-color;
		border-radius: $checkbox-border-radius;
		background-color: $checkbox-bg-color;
		transition: background-color .2s ease, border-color .2s ease;

		&:after {
			position: absolute;
		    content: '';
		    left: 4.5px;
		    top: 1.5px;
		    width: 5px;
		    height: 8px;
		    border-bottom: 2px solid $checkbox-color;
		    border-right: 2px solid $checkbox-color;
		    transform: rotate(45deg) scale(0);
			transition: transform .2s ease;
		}
	}

	&-input {
		position: absolute;
		top: 0;
		left: 0;
		z-index: -9999;
		visibility: hidden;
		opacity: 0;
		width: 100%;
		height: 100%;
	}

	&-text {
		padding: 0 $checkbox-text-spacing;
	}
}

</style>
