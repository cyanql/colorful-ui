<template>
	<transition-group
		tag="div"
		class="c-notification-container"
		:class="oClass"
		name="notification"
		@enter="enter"
		@after-enter="afterEnter"
		@leave="leave"
		@after-leave="afterLeave"
		>
		<slot
			v-for="item in queue"
			:text="item.text"
			:buttonText="item.buttonText"
			:buttonColor="item.buttonColor"
			>
			<c-notification
				:key="item"
				:text="item.text"
				:buttonText="item.buttonText"
				:buttonColor="item.buttonColor"
				>
			</c-notification>
		</slot>
	</transition-group>
</template>

<script>
export default {
	name: 'c-notification-container',
	props: {
		position: {
			type: String,
			default: 'bottom-left'
		}
	},
	data() {
		return {
			queue: []
		}
	},
	computed: {
		oClass() {
			return {
				[this.position]: this.position
			}
		}
	},
	methods: {
		notice(textOrOpts) {
			const opts = typeof textOrOpts === 'string' ? {
				text: textOrOpts
			} : textOrOpts

			opts.duration = opts.duration || 2000

			// 以下更注重本条信息的延时准确性
			// this.queue = this.queue.filter(v => v !== opts)
			// 以下更注重队列的顺序及延时准确性
			if (this.position.indexOf('bottom') > -1) {
				this.queue.push(opts)
				setTimeout(() => {
					this.queue.shift()
				}, opts.duration)
			} else if (this.position.indexOf('top') > -1) {
				this.queue.unshift(opts)
				setTimeout(() => {
					this.queue.pop()
				}, opts.duration)
			}
		},
		enter(el) {
			const height = el.offsetHeight
			el.style.height = 0
			setTimeout(() => {
				el.style.height = height + 'px'
			}, 20)
		},
		afterEnter(el) {
			el.style.height = ''
		},
		leave(el) {
			const height = el.offsetHeight
			el.style.height = height + 'px'
			setTimeout(() => {
				el.style.height = 0
			}, 20)
		},
		afterLeave(el) {
			el.style.height = ''
		}
	}
}
</script>

<style lang="scss">
@import "~src/styles/variables";

.c-notification-container {
	position: fixed;
	margin: $notification-container-margin;
	z-index: $zindex-notification;

	&.top-left {
		top: 0;
		left: 0;
	}

	&.top {
		top: 0;
		left: 50%;
		transform: translate(-50%, 0);
	}

	&.top-right {
		top: 0;
		right: 0;
	}

	&.bottom-left {
		bottom: 0;
		left: 0;
	}

	&.bottom {
		bottom: 0;
		left: 50%;
		transform: translate(-50%, 0);
	}

	&.bottom-right {
		bottom: 0;
		right: 0;
	}

	&.top,
	&.top-left,
	&.top-right {
		.c-notification {
			margin-bottom: $notification-spacing;
		}

		.notification {
			&-enter-active,
			&-leave-active {
				transform: translate(0, 0);
				transition: height .2s, transform .2s;
			}

			&-enter,
			&-leave-active {
				transform: translate(0, -$notification-spacing * 2);
			}
		}
	}

	&.bottom,
	&.bottom-left,
	&.bottom-right {
		.c-notification {
			margin-top: $notification-spacing;
		}

		.notification {
			&-enter-active,
			&-leave-active {
				transform: translate(0, 0);
				transition: height .2s, transform .2s;
			}

			&-enter,
			&-leave-active {
				transform: translate(0, $notification-spacing * 2);
			}
		}
	}
}
</style>
