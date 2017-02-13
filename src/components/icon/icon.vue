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
@import url(~src/fonts/material-icons.css);
@import "~src/styles/variables";

.c-icon {
	line-height: 1;
	font-size: initial;
	vertical-align: middle;

	&.default {color: inherit;}
	&.primary {color: $blue-6;}
	&.success {color: $green-6;}
	&.warning {color: $orange-6;}
	&.error {color: $red-6;}
}
/*url('https://fonts.gstatic.com/s/materialicons/v16/2fcrYFNaTjcS6g4U3t-Y5UEw0lE80llgEseQY3FEmqw.woff2') format('woff2');*/
</style>
