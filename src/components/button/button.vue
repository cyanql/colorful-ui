<template>
	<button class="c-button" :class="oClass" :type="type" :style="oStyle" @click="onClick">
		<c-icon :icon="icon" v-if="icon"></c-icon>
		<span class="c-button-text" v-if="$slots.default"><slot></slot></span>
		<c-ripple v-if="rippleVisible"></c-ripple>
	</button>
</template>

<script>
import Icon from '../icon'
import Ripple from '../ripple'

export default {
	name: 'c-button',
	props: {
		color: {
			type: String,
			default: 'default',
			validator(value) {
				return !value || ['default', 'primary', 'success', 'warning', 'error', 'ghost'].includes(value) || value.indexOf('#') === 0
			}
		},
		type: String,
		icon: String,
		shape: {
			type: String,
			validator(value) {
				return ['circle', undefined].includes(value)
			}
		},
		loading: {
			type: Boolean,
			default: false
		},
		rippleVisible: {
			type: Boolean,
			default: true
		}
	},
	methods: {
		onClick(e) {
			this.$emit('click', e)
		}
	},
	data() {
		const { shape, color } = this
		const oStyle = {}
		let colorClass

		// 当使用16进制颜色时，背景默认为transparent
		if (color.indexOf('#') > -1) {
			oStyle.color = color
		} else {
			colorClass = color
		}

		return {
			oStyle,
			oClass: {
				[shape]: shape,
				[colorClass]: colorClass,
				'has-ripple': this.rippleVisible
			}
		}
	},
	components: {
		Icon,
		Ripple
	}
}
</script>

<style lang="scss">
@import "~src/styles/variables";

@mixin color-background-border($color, $background-color, $border-color: transparent) {
	color: $color;
	background-color: $background-color;
	border-color: $border-color;
	// background-image: -webkit-linear-gradient(top, $background, $border);
}

.c-button {
	font-size: 12px;
    padding: 8px 16px;
	border-radius: 3px;
	border: 1px solid transparent;
	outline: none;
	background: none;
	text-align: center;
	line-height: 1.5;
    color: $text-color;
    touch-action: manipulation;
	cursor: pointer;
	display: inline-block;
	margin-bottom: 0;
	font-weight: 500;
	background-image: none;
	white-space: nowrap;
	user-select: none;
	transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);

	& .c-icon + span, & span + .c-icon {
	    margin-left: 0.5em;
	}

	&[disabled] {
		cursor: not-allowed;
		opacity: .5;

		& > * {
			pointer-events: none;
		}
	}

	&:not([disabled]) {
		&:hover {
			opacity: .7;
		}

		&:active {
			opacity: 1;
		}
	}

	&:focus {
		outline: none;
	}

	&.circle {
		width: 40px;
		height: 40px;
		padding: 0;
		border-radius: 50%;
	}

	&.has-ripple {
		position: relative;
		overflow: hidden;
	}

	&.default {
		@include color-background-border($text-color, #f7f7f7, #d9d9d9);
	}

	&.ghost {
		@include color-background-border($text-color, transparent);
	}

	&.primary {
		@include color-background-border(white, $blue-6, $blue-7);
	}

	&.success {
		@include color-background-border(white, $green-6, $green-7);
	}

	&.warning {
		@include color-background-border(white, $orange-6, $orange-7);
	}

	&.error {
		@include color-background-border(white, $red-6, $red-7);
	}
}
</style>
