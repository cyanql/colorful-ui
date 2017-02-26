<template>
	<transition name="notification">
		<div class="c-notification">
			<span class="c-notification-text">{{text}}</span>
			<c-button :color="buttonColor" ghost v-if="buttonText">{{buttonText}}</c-button>
		</div>
	</transition>
</template>

<script>
export default {
	name: 'c-notification',
	props: {
		text: {
			type: String,
			required: true
		},
		buttonText: String,
		buttonColor: {
			type: String,
			validator(value) {
				return value ? value : '#2196f3'
			}
		}
	}
}
</script>

<style lang="scss">
@import "~src/styles/variables";

.c-notification {
	position: relative;
	padding: $notification-padding;
	border-radius: $notification-border-radius;
	background: $notification-bg-color;
	box-shadow: $notification-box-shadow;
	overflow: hidden;

	&-text {
		display: inline-block;
		width: $notification-text-width;
		padding: $notification-text-padding;
		color: $notification-text-color;
		vertical-align: middle;
	}
}
</style>
