<template>
	<div class="c-sub-menu" :class="mode">
		<template v-if="mode === 'inline'">
			<c-menu-item class="c-sub-menu-title c-clear" :level="level" @click="onToggle" color="ghost">
				<span class="c-sub-menu-title-text">{{title}}</span>
				<c-icon class="expand-more" :class="openClass" icon="expand_more"></c-icon>
			</c-menu-item>
			<expand-transition>
				<ul class="c-sub-menu-content" v-show="opened">
					<slot></slot>
				</ul>
			</expand-transition>
		</template>
		<template v-if="mode === 'vertical'">
			<c-menu-item class="c-sub-menu-title c-clear" :level="level" @mouseover.native="onOpen" @mouseout.native="onClose" color="ghost">
				<span class="c-sub-menu-title-text">{{title}}</span>
				<c-icon class="expand-more" :class="openClass" icon="expand_more"></c-icon>
			</c-menu-item>
			<transition name="scale">
				<ul class="c-sub-menu-content" v-show="opened" @mouseover="onOpen" @mouseout="onClose">
					<slot></slot>
				</ul>
			</transition>
		</template>
	</div>
</template>

<script>
import MenuItem from './menu-item'

export default {
	name: 'c-sub-menu',
	props: {
		title: String,
		mode: {
			type: String,
			default: 'inline'
		},
		level: {
			type: Number,
			default: 1
		},
		expand: {
			type: Boolean,
			default: false
		}
	},
	data() {
		return {
			subLevel: this.level + 1,
			opened: this.expand,
			timer: null
		}
	},
	computed: {
		openClass() {
			return this.opened ? 'expand' : ''
		}
	},
	methods: {
		onOpen(e) {
			clearTimeout(this.timer)
			this.timer = setTimeout(() => {
				if (!this.opened) {
					this.$emit('open', e)
					this.opened = true
				}
			}, 100)
		},
		onClose(e) {
			clearTimeout(this.timer)
			this.timer = setTimeout(() => {
				if (this.opened) {
					this.$emit('close', e)
					this.opened = false
				}
			}, 100)
		},
		onToggle() {
			this.opened = !this.opened
		}
	},
	created() {
		if (this.mode === 'inline') {
			const defaultSlots = this.$slots.default
			defaultSlots && defaultSlots.forEach(vm => {
				const opts = vm.componentOptions
				if (opts) {
					opts.propsData.level = this.level + 1
				}
			})
		}
	}
}
</script>

<style lang="scss">
@import "~src/styles/variables";

.c-sub-menu {
	&.vertical {
		position: relative;

		& > .c-sub-menu-title {
			& .c-icon.expand-more {
				transform: rotate(-90deg);
				float: right;
			}
		}

		& > .c-sub-menu-content {
			position: absolute;
			left: 100%;
			top: 0;
			min-width: 200px;
			background: white;
			box-shadow: 0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.2), 0 1px 5px 0 rgba(0,0,0,.12);
			z-index: $zindex-menu;
		}

		& > .c-sub-menu-expand {
			&-enter-active,
			&-leave-active {
				transition: height .2s ease;
			}
		}
	}

	&.horizontal {
	}

	&.inline {
		overflow: hidden;

		& > .c-sub-menu-title {
			& .c-icon.expand-more {
				transition: transform .2s ease;
				float: right;

				&.expand {
					transform: rotate(-180deg);
				}
			}
		}

		& > .c-sub-menu-content {
			background: white;
		}
	}

	.scale {
		&-enter-active,
		&-leave-active {
			transform-origin: 0 0;
			transition: transform .2s ease, opacity .2s ease;
		}

		&-enter,
		&-leave-active {
			transform: scale(0);
			opacity: 0;
		}
	}
}
</style>
