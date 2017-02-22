<template>
	<button class="c-button" :class="oSelf.oClass" :type="type" :style="oSelf.oStyle" @click="onClick" :disabled="loading">
		<c-icon :icon="icon" v-if="icon"></c-icon>
		<transition name="scale">
			<c-spin :radius="10" loading v-if="loading"></c-spin>
		</transition>
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
				return !value || ['default', 'primary', 'success', 'warning', 'error'].includes(value) || value.indexOf('#') === 0
			}
		},
		ghost: {
			type: Boolean,
			default: false
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
	computed: {
		oSelf() {
			const { shape, color, ghost } = this
			const oStyle = {}
			let colorClass, hex

			hex = color.indexOf('#') > -1
			// 当使用16进制颜色时，背景默认为transparent
			if (hex) {
				if (ghost) {
					oStyle.color = color
				} else {
					oStyle.backgroundColor = color
				}
			} else {
				colorClass = color
			}

			return {
				oStyle,
				oClass: [shape, colorClass, {
					hex,
					ghost,
					'has-ripple': this.rippleVisible
				}]
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

@mixin color-type($background-color, $border-color) {
	color: white;
	background-color: $background-color;
	border-color: $border-color;

	.c-spin {
		border-left-color: white;
	}

	&.ghost {
		color: $background-color;
		background-color: transparent;
		border-color: transparent;

		.c-spin {
			border-left-color: $background-color;
		}
	}
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

	.c-spin + span,
	span + .c-spin,
	.c-icon + span,
	span + .c-icon {
	    margin-left: 0.5em;
	}

	.scale {
		&-enter-active,
		&-leave-active {
			transition-property: width, opacity, height, border-width;
			transition-duration: .2s;
			transition-timing-function: ease;
		}

		&-enter,
		&-leave-active {
			letter-spacing: -4px;
			border-width: 0 !important;
			width: 0 !important;
			height: 0 !important;
			opacity: 0;
		}
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

		.c-icon {
			line-height: 1.5;
		}
	}

	&.has-ripple {
		position: relative;
		overflow: hidden;
	}

	&.default {
		color: $text-color;
		background-color: #f7f7f7;
		border-color: #d9d9d9;

		.c-spin {
			border-left-color: $text-color;
		}

		&.ghost {
			color: $text-color;
			background-color: transparent;
			border-color: transparent;
		}
	}

	&.primary {
		@include color-type($blue-6, $blue-7);
	}

	&.success {
		@include color-type($green-6, $green-7);
	}

	&.warning {
		@include color-type($orange-6, $orange-7);
	}

	&.error {
		@include color-type($red-6, $red-7);
	}

	&.hex {
		color: white;
	}
}
</style>
