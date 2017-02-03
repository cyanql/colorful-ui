<template>
    <transition
		name="expand"
		@before-enter="beforeEnter"
		@enter="enter"
		@after-enter="afterEnter"
		@before-leave="beforeLeave"
		@leave="leave"
		@after-leave="afterLeave"
		>
	 	<slot></slot>
    </transition>
</template>

<script>
export default {
	name: 'expand-transition',
	methods: {
		beforeEnter(el) {
			el.style.height = 0
		},
		enter(el) {
			const scrollHeight = el.scrollHeight
			if (scrollHeight !== 0) {
				el.style.height = scrollHeight + 'px'
			} else {
				el.style.height = ''
			}
		},
		afterEnter(el) {
			el.style.height = ''
		},
		beforeLeave(el) {
			el.style.height = el.scrollHeight + 'px'
		},
		leave(el) {
			if (el.scrollHeight !== 0) {
				el.style.height = 0
			}
		},
		afterLeave(el) {
			el.style.height = ''
		}
	}
}
</script>

<style lang="scss">
.expand {
	&-enter-active,
	&-leave-active {
		transition: height .2s ease;
	}
}
</style>
