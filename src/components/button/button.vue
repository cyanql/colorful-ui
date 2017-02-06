<template>
	<button class="c-button" :class="oClass" :type="type" :style="oStyle" @click="onClick">
		<c-icon :icon="icon" :color="iconColor" v-if="icon"></c-icon>
		<span v-if="$slots.default"><slot></slot></span>
		<c-ripple></c-ripple>
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
				return ['default', 'primary', 'success', 'warning', 'error', 'ghost'].includes(value) || value.indexOf('#') === 0
			}
		},
		type: String,
		icon: String,
		iconColor: String,
		style: {
			type: Object,
			default: () => ({})
		},
		class: {
			type: String,
			default: ''
		},
		shape: {
			type: String,
			validator(value) {
				return ['circle', undefined].includes(value)
			}
		}
	},
	methods: {
		onClick(e) {
			this.$emit('click', e)
		}
	},
	data() {
		const { shape, color } = this
		const oStyle = this.style
		let oClass = this.class

		// 当使用16进制颜色时，背景默认为transparent，注：style优先级比color高
		if (color.indexOf('#') > -1) {
			oStyle.color = oStyle.color || color
			oStyle.backgroundColor = oStyle.backgroundColor || 'transparent'
		} else {
			oClass = [oClass, color].join(' ')
		}

		if (shape === 'circle') {
			oStyle.borderRadius = '50%'
			oStyle.width = '40px'
			oStyle.height = '40px'
			oStyle.padding = '0px'
		}

		return {
			oStyle,
			oClass
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

	& > .c-icon + span, & > span + .c-icon {
	    margin-left: 0.5em;
	}

	&[disabled] {
		cursor: not-allowed;
		opacity: .6;

		& > * {
			pointer-events: none;
		}
	}

	&:not([disabled]):hover {
		opacity: .8;
	}

	&:focus {
		outline: none;
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