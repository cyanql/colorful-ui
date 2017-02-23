<template>
	<div class="c-spin" :class="loadingClass" :style="oStyle" v-if="!$slots.default"></div>
	<div class="c-spin-wrapper" v-else>
		<div class="c-spin-content" :class="loadingClass">
			<div class="c-spin" :class="loadingClass" :style="oStyle"></div>
			<div>{{text}}</div>
		</div>
		<div class="c-spin-container" :class="loadingClass">
			<slot></slot>
		</div>
	</div>
</template>

<script>
export default {
	name: 'c-spin',
	props:{
		radius: {
			type: Number,
			default: 25
		},
		loading: {
			type: Boolean,
			default: true
		},
		text: String
	},
	computed: {
		oStyle() {
			const diameter = this.radius * 2
			return {
				width: diameter + 'px',
				height: diameter + 'px',
				borderWidth: diameter / 10 + 'px'
			}
		},
		loadingClass() {
			return {
				loading: this.loading
			}
		}
	}

}
</script>

<style lang="scss">

/**
 * 引用 https://projects.lukehaas.me/css-loaders/
 */
.c-spin {
	position: relative;
	display: inline-block;
	width: 50px;
	height: 50px;
	border: 5px solid transparent;
	border-left-color: #fff;
	border-radius: 50%;
	transform: translateZ(0);
	vertical-align: middle;

	&.loading {
		animation: spinload 1s infinite linear;
	}

	&-wrapper {
		position: relative;
	}

	&-content {
 		position: absolute;
 		left: 50%;
 		top: 50%;
		color: #fff;
		text-align: center;
 		transform: translate(-50%, -50%);
		transition: opacity .2s ease;
		opacity: 0;

		&.loading {
			opacity: 1;
		}
	}

	&-container {
		&.loading {
			opacity: .8;
			filter: blur(1px);
		}
	}
}

@keyframes spinload {
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
	}
}
</style>
