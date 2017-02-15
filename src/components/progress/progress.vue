<template>
	<svg width="100" height="100" :style="{width: radius * 2, height: radius * 2}" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
		<circle cx="50" cy="50" r="40" :stroke="color2" :fill="bgColor" :stroke-width="thick * 1.5" stroke-linecap="round" :stroke-dasharray="length" stroke-dashoffset="0" style="transition: stroke-dashoffset 1s ease"></circle>
		<circle cx="50" cy="50" r="40" :stroke="color1" fill="none" :stroke-width="thick" stroke-linecap="round" :stroke-dasharray="length" :stroke-dashoffset="(1 - progress) * length" style="transition: stroke-dashoffset 1s ease">
			<!-- <animate attributeName="stroke-dashoffset" :dur="duration" repeatCount="indefinite" from="0" to="502"></animate> -->
			<!-- <animate attributeName="stroke-dasharray" :dur="duration" repeatCount="indefinite" values="251 0;1 250;251 0"></animate> -->
		</circle>
		<text x="50" y="50" :font-size="fontSize" alignment-baseline="central" :fill="fontColor" text-anchor="middle">{{Math.floor(progress * 100) + '%'}}</text>
	</svg>
</template>

<script>
export default {
	name: 'c-progress',
	props:{
		radius: {
			type: Number,
			default: 30
		},
		thick: {
			type: Number,
			default: 8
		},
		fontColor: {
			type: String,
			default: '#eee'
		},
		fontSize: {
			default: '20'
		},
		color1: {
			type: String,
			default: '#2b6'
		},
		color2: {
			type: String,
			default: '#ddd'
		},
		bgColor: {
			type: String,
			default: 'transparent'
		},
		duration: {
			type: String,
			default: '0s'
		},
		progress: {
			default: .5,
			coerce: function(val) {
				val = Number(val)
				val = val < 1 ? val : 1
				val = val > 0 ? val : 0
				return val
			}
		}
	},
	computed: {
		length() {
			return 2 * Math.PI * 40
		}
	}
}
</script>
