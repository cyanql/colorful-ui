<template>
	<transition name="notification">
		<div class="c-notification">
			<span class="c-notification-message">{{message}}</span>
			<c-button :color="buttonColor" ghost v-if="buttonText">{{buttonText}}</c-button>
		</div>
	</transition>
</template>

<script>
export default {
	name: 'c-notification',
	props: {
		message: {
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
	color: white;
	padding: 0 20px;
	border-radius: 3px;
	background: #323232;
	box-shadow: 0 0 5px $shadow-color;
	overflow: hidden;

	&-message {
		display: inline-block;
		width: 200px;
		padding: 15px;
		vertical-align: middle;
	}
}
</style>
