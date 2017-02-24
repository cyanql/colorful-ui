<template>
	<i class="c-icon" :class="oSelf.oClass" :style="oSelf.oStyle" @click="onClick">{{icon}}</i>
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
		}
	},
	computed: {
		oSelf() {
			const { color, icon } = this
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
				oClass: [colorClass]
			}
		}
	},
	methods: {
		onClick(e) {
			this.$emit('click', e)
		}
	}
}

</script>
<style lang="scss">
@import "~src/styles/variables";

@font-face {
  font-family: 'Material Icons';
  font-style: normal;
  font-weight: 400;
  src: url('https://cdn.bootcss.com/material-design-icons/3.0.1/iconfont/MaterialIcons-Regular.eot'); /* For IE6-8 */
  src: local('Material Icons'),
       local('MaterialIcons-Regular'),
       url('https://cdn.bootcss.com/material-design-icons/3.0.1/iconfont/MaterialIcons-Regular.woff2') format('woff2'),
       url('https://cdn.bootcss.com/material-design-icons/3.0.1/iconfont/MaterialIcons-Regular.woff') format('woff'),
       url('https://cdn.bootcss.com/material-design-icons/3.0.1/iconfont/MaterialIcons-Regular.ttf') format('truetype');
	   //url('https://fonts.gstatic.com/s/materialicons/v16/2fcrYFNaTjcS6g4U3t-Y5UEw0lE80llgEseQY3FEmqw.woff2') format('woff2');
}

.c-icon {
	font-family: 'Material Icons';
	font-weight: normal;
	font-style: normal;
	display: inline-block;
	// line-height: 1;
	text-transform: none;
	letter-spacing: normal;
	word-wrap: normal;
	white-space: nowrap;
	direction: ltr;

	/* Support for all WebKit browsers. */
	-webkit-font-smoothing: antialiased;
	/* Support for Safari and Chrome. */
	text-rendering: optimizeLegibility;

	/* Support for Firefox. */
	-moz-osx-font-smoothing: grayscale;

	/* Support for IE. */
	font-feature-settings: 'liga';

	vertical-align: bottom;

	&.default {color: inherit;}
	&.primary {color: $blue-6;}
	&.success {color: $green-6;}
	&.warning {color: $orange-6;}
	&.error {color: $red-6;}
}
</style>
