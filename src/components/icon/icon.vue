<template>
	<i class="c-icon material-icons" :class="oClass" :style="oStyle">{{icon}}</i>
</template>

<script>
export default {
	name: 'c-icon',
	props: {
		icon: {
			type: String,
			required: true
		},
		color: {
			type: String,
			default: 'default'
		},
		style: {
			type: Object,
			default: () => ({})
		},
		class: {
			type: String,
			default: ''
		}
	},
	data() {
		const color = this.color
		const oStyle = this.style
		let oClass = this.class

		if (color.indexOf('#') > -1) {
			oStyle.color = color
		} else {
			oClass = [oClass, color].join(' ')
		}
		return {
			oStyle,
			oClass
		}
	}
}

</script>
<style lang="scss">
@import url(~src/fonts/material-icons.css);
@import "~src/styles/variables";

@mixin color-type($color, $background, $border) {
	color: $color;
	background: $background;
	border: $border;
}

.c-icon {
	line-height: 1;
	font-size: initial;
	vertical-align: middle;

	&.default {
		@include color-type(inherit, transparent, none);
	}

	&.primary {
		@include color-type($blue-6, transparent, none);
	}

	&.success {
		@include color-type($green-6, transparent, none);
	}

	&.warning {
		@include color-type($orange-6, transparent, none);
	}

	&.error {
		@include color-type($red-6, transparent, none);
	}
}
/*url('https://fonts.gstatic.com/s/materialicons/v16/2fcrYFNaTjcS6g4U3t-Y5UEw0lE80llgEseQY3FEmqw.woff2') format('woff2');*/
</style>
