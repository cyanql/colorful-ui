<template>
	<li class="c-sub-menu" :class="mode">
		<template v-if="mode === 'inline'">
			<div class="c-sub-menu-title" :style="titleStyle" @click="onToggle">
				<span class="c-sub-menu-title-text">{{title}}</span>
				<c-icon class="expand-more" :class="openClass" icon="expand_more"></c-icon>
				<c-ripple v-if="!disabled"></c-ripple>
			</div>
			<expand-transition>
				<ul class="c-sub-menu-content" v-show="opened">
					<slot></slot>
				</ul>
			</expand-transition>
		</template>
		<template v-if="mode === 'vertical'">
			<div class="c-sub-menu-title" :style="titleStyle" @mouseover="onOpen" @mouseout="onClose">
				<span class="c-sub-menu-title-text">{{title}}</span>
				<c-icon class="expand-more" :class="openClass" icon="expand_more"></c-icon>
				<c-ripple v-if="!disabled"></c-ripple>
			</div>
			<transition name="scale">
				<ul class="c-sub-menu-content" v-show="opened" @mouseover="onOpen" @mouseout="onClose">
					<slot></slot>
				</ul>
			</transition>
		</template>
	</li>
</template>

<script>
import MenuItem from './menu-item'
import mixin from './mixin'

export default {
	name: 'c-sub-menu',
	mixins: [mixin],
	props: {
		title: String,
		mode: {
			type: String,
			default: 'inline'
		},
		indent: Number,
		expand: {
			type: Boolean,
			default: false
		},
		disabled: {
			type: Boolean,
			default: false
		}
	},
	data() {
		return {
			opened: this.expand,
			timer: null
		}
	},
	computed: {
		level() {
			if (this.mode !== 'inline') {
				return
			}
			const level = this.subMenuParent && this.subMenuParent.level
			return level ? level + 1 : 1
		},
		titleStyle() {
			const indent = this.indent || this.menuParent.indent
			return {
				paddingLeft: this.level * indent + 'px'
			}
		},
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

	&-title {
		position: relative;
		cursor: pointer;
		display: block;
		text-align: left;
		width: 100%;
		padding: 10px 20px;
		border-radius: 0;


		&.disabled {
			opacity: .6;
			cursor: not-allowed;
		}

		&:not(.disabled):hover {
			background: #e7e7e7;
		}
	}
}
</style>
