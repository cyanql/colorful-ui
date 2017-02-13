<template>
	<label class="c-checkbox" :class="oClass">
		<span class="c-checkbox-mark">
			<span class="c-checkbox-inner" :style="oStyle"></span>
			<input class="c-checkbox-input" type="checkbox" @change="onChange" v-model="oChecked" :disabled="disabled">
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
		color: {
			type: String,
			default: 'primary',
			validator(value) {
				return ['primary', 'success', 'warning', 'error'].includes(value) || value.indexOf('#') === 0
			}
		},
		checked: {
			type: Boolean,
			default: false
		},
		disabled: {
			type: Boolean,
			default: false
		}
	},
	data() {
		return {
			oChecked: this.checked
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
				backgroundColor: color,
				borderColor: color
			} : null
		}
	},
	methods: {
		onChange(e) {
			this.$emit('change', this.oChecked, e)
		}
	}
}
</script>

<style lang="scss">
@import "~src/styles/variables";

@mixin background-border($background-color, $border-color: transparent) {
	.c-checkbox-inner {
		background-color: $background-color;
		border-color: $border-color;
	}
	// background-image: -webkit-linear-gradient(top, $background, $border);
}

.c-checkbox {
	cursor: pointer;

	&:not(.disabled):hover {
		.c-checkbox-inner {
			border-color: $blue-3;
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
		width: 16px;
		height: 16px;
		border: 1px solid #d9d9d9;
		border-radius: 3px;
		background-color: #fff;
		transition: background-color .25s ease, border-color .25s ease;

		&:after {
			position: absolute;
		    content: '';
		    left: 4.5px;
		    top: 1.5px;
		    width: 5px;
		    height: 8px;
		    border-bottom: 2px solid #fff;
		    border-right: 2px solid #fff;
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
		padding: 0 8px;
	}
}

</style>
