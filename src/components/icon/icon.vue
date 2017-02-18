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
		}
	},
	data() {
		const { color } = this
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
				[colorClass]: colorClass
			}
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
  src: $icon-url;
}

.material-icons {
  font-family: 'Material Icons';
  font-weight: normal;
  font-style: normal;
  font-size: 24px;  /* Preferred icon size */
  display: inline-block;
  line-height: 1;
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
}

.c-icon {
	font-size: initial;
	vertical-align: middle;

	&.default {color: inherit;}
	&.primary {color: $blue-6;}
	&.success {color: $green-6;}
	&.warning {color: $orange-6;}
	&.error {color: $red-6;}
}
</style>
