<template>
	<label class="c-switch" :class="oClass">
		<input class="c-switch-input" type="checkbox" @change="onChange" v-model="oChecked">
		<span class="c-switch-track"></span>
		<span class="c-switch-thumb"></span>
	</label>
</template>

<script>
export default {
	name: 'c-switch',
	props: {
		checked: Boolean,
		color: {
			type: String,
			default: 'primary'
		}
	},
	data() {
		return {
			oChecked: this.checked
		}
	},
	computed: {
		oClass() {
			return {
				checked: this.oChecked,
				[this.color]: this.color
			}
		}
	},
	methods: {
		onChange(e) {
			this.$emit('change', this.oChecked, e)
		}
	}
}
</script>

<style lang="scss">
@import "~src/styles/variables";

$switch-width: 36px;
$switch-height: 20px;
$track-height: 14px;
$track-width: 36px;
$thumb-width: 20px;
$thumb-height: 20px;

@mixin switch-color($strack-color, $thumb-color) {
	.c-switch-track {
		background-color: $strack-color;
	}
	.c-switch-thumb {
		background-color: $thumb-color;
	}
}

.c-switch {
	display: inline-block;
	position: relative;
	width: $switch-width;
	height: $switch-height;
	cursor: pointer;
	line-height: 1.5;

	&.checked {
		.c-switch-thumb {
			transform: translateX($switch-width - $thumb-width);
		}

		&.primary {
			@include switch-color($blue-1, $blue-5);
		}

		&.success {
			@include switch-color($green-1, $green-5);
		}

		&.warning {
			@include switch-color($orange-1, $orange-5);
		}

		&.error {
			@include switch-color($red-1, $red-5);
		}
	}

	&-input {
		position: absolute;
		opacity: 0;
		visibility: hidden;
		z-index: -9999;
	}

	&-track {
		display: inline-block;
		width: $track-width;
		height: $track-height;
		border-radius: $track-height / 2;
		vertical-align: middle;
		background-color: rgba(0,0,0,.25);
		transition: background-color .2s ease;
	}

	&-thumb {
		display: inline-block;
		position: absolute;
		top: 0;
		left: 0;
		width: $thumb-width;
		height: $thumb-height;
		border-radius: 50%;
		background-color: #fafafa;
		box-shadow: 0 1px 3px rgba(0,0,0,.4);
		transition: transform .2s ease, background-color .2s ease;
	}
}
</style>
