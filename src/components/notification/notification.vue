<template>
	<div class="c-notification">
		<c-notice v-for="item in queue" :message="item.message" :duration="item.duration" :delay="item.delay"></c-notice>
	</div>
</template>

<script>
import { queue } from './index'

export default {
	name: 'c-notification',
	data() {
		return {
			queue
		}
	}
}
</script>

<style lang="scss">
@import "~src/styles/variables";

.c-notification {
	position: fixed;
	left: 25px;
	bottom: 25px;
	z-index: 1000;
}
</style>
