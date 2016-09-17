<template>
	<button class="colorful-button" :class="oClass" :type="type" :style="oStyle">
		<colorful-icon :type="icon" :if="icon"></colorful-icon>
		<slot></slot>
	</button>
</template>

<script>
import Icon from './Icon'

export default {
	name: 'colorful-button',
	props: {
		color: {
			type: String,
			default: 'default'
		},
		type: String,
		icon: String,
		style: {
			type: Object,
			default: () => ({})
		},
		class: {
			type: String,
			default: ''
		}
	},
	computed: {
		oClass() {
			const color = this.color
			let className = this.class
			if (!(color.indexOf('#') > -1)) {
				className += ' colorful-button-' + color
			}
			return className
		},
		oStyle() {
			const color = this.color
			const style = this.style
			if (color.indexOf('#') > -1) {
				style.color = color
			}
			return style
		}
	},
	components: {
		Icon
	}
}
</script>

<style lang="less">
@import "~mobile/variable";


.colorful-button {
	-webkit-mask-image: -webkit-radial-gradient(circle, white, black);
	outline: none;
    display: flex;
    justify-content: center;
	align-items: center;
    padding: .1rem .2rem;
    text-decoration: none;
    color: #666;
    touch-action: manipulation;
	cursor: pointer;

	&:hover {
		opacity: .6;
	}

	&-default {
		background-color: @color-default;
		color: @color-normal-font;
		border: 1px solid #ccc;
	}

	&-primary {
		background-color: @color-primary;
		color: white;
	}

	&-success {
		background-color: @color-success;
		color: white;
	}

	&-info {
		background-color: @color-info;
		color: white;
	}

	&-warning {
		background-color: @color-warning;
		color: white;
	}

	&-error {
		background-color: @color-error;
		color: white;
	}
}
</style>
