<template>
	<div class="c-progress" :class="oClass" :style="oStyle">
		<svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
			<path d="M 50,50 m 0,-47 a 47,47 0 1 1 0,94 a 47,47 0 1 1 0,-94" stroke="#eee" fill="none" :stroke-width="strokeWidth" stroke-linecap="round" :stroke-dasharray="length" stroke-dashoffset="0"></path>
			<path class="c-progress-inner" d="M 50,50 m 0,-47 a 47,47 0 1 1 0,94 a 47,47 0 1 1 0,-94" stroke="blue" fill="none" :stroke-width="strokeWidth" stroke-linecap="round" :stroke-dasharray="length" :stroke-dashoffset="(1 - oPercent) * length" :style="circleStyle"></path>
			<!-- <circle cx="50" cy="50" :r="oRadius" stroke="#eee" fill="none" :stroke-width="stroke" stroke-linecap="round" :stroke-dasharray="length" stroke-dashoffset="0"></circle>
			<circle class="c-progress-inner" cx="50" cy="50" :r="oRadius" stroke="blue" fill="none" :stroke-width="stroke" stroke-linecap="round" :stroke-dasharray="length" :stroke-dashoffset="(1 - oPercent) * length" :style="circleStyle"></circle> -->
		</svg>
		<span v-if="oStatus === 'active'" class="c-progress-content">{{Math.floor(oPercent * 100) + '%'}}</span>
		<c-icon v-if="oStatus === 'error'" class="c-progress-content" icon="clear"></c-icon>
		<c-icon v-if="oStatus === 'success'" class="c-progress-content" icon="done"></c-icon>
	</div>
</template>

<script>
export default {
	name: 'c-progress',
	props:{
		radius: {
			type: Number,
			default: 25
		},
		status: {
			type: String,
			default: 'active'
		},
		strokeWidth: {
			type: Number,
			default: 5
		},
		duration: {
			type: Number,
			default: 500
		},
		percent: {
			type: Number,
			default: 50
		}
	},
	data() {
		return {
			length: 295.416//2 * Math.PI * this.oRadius
		}
	},
	computed: {
		oRadius() {
			return this.radius - this.strokeWidth / 2
		},
		oPercent() {
			let percent = Number(this.percent) / 100
			percent = percent < 1 ? percent : 1
			percent = percent > 0 ? percent : 0
			return percent
		},
		oStatus() {
			return this.oPercent === 1 ? 'success' : this.status
		},
		oClass() {
			return [this.oStatus]
		},
		oStyle() {
			const diameter = this.radius * 2 + 'px'
			return {
				width: diameter,
				height: diameter
			}
		},
		circleStyle() {
			return {
				transitionProperty: 'stroke-dashoffset, stroke',
				transitionDuration: this.duration / 1000 + 's',
				transitionTimingFunction: 'ease'
			}
		}
	}
}
</script>

<style lang="scss">
@import "~src/styles/variables";

@mixin color-type($color) {
	.c-progress-inner {
		stroke: $color;
	}
	.c-progress-content {
		color: $color;
	}
}

.c-progress {
	position: relative;
	display: inline-block;

	&.active { @include color-type($blue-6);}
	&.success { @include color-type($green-6);}
	&.error { @include color-type($red-6);}

	&-content {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		font-size: $progress-font-size + 6px;

		&:not(i) {
			font-size: $progress-font-size;
		}
	}
}
</style>
