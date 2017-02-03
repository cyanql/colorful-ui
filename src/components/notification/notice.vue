<template>
	<transition name="slide-fade">
		<div class="c-notice" v-if="show">{{message}}</div>
	</transition>
</template>

<script>
export default {
	name: 'c-notice',
	props: {
		delay: {
			type: Number,
			default: 0
		},
		duration: {
			type: Number,
			default: 2000
		},
		message: {
			type: String,
			required: true
		}
	},
	data() {
		return {
			show: false
		}
	},
	created() {
		setTimeout(() => {
			this.show = true
		}, this.delay)

		setTimeout(() => {
			this.show = false
		}, this.duration)
	}
}
</script>

<style lang="scss" scoped>
@import "~src/styles/variables";

.c-notice {
	color: white;
	width: 260px;
	padding: 10px 20px;
	margin: 10px 0;
	border-radius: 3px;
	background: blue;
	box-shadow: 0 0 5px $shadow-color;
}
</style>
