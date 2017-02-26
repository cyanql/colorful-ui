<template>
	<li class="c-sub-menu" :class="mode">
		<template v-if="mode === 'inline'">
			<div class="c-sub-menu-title" :class="titleClass" :style="titleStyle" @click="onToggle">
				<span class="c-sub-menu-title-text">{{title}}</span>
				<c-icon class="expand-more" icon="expand_more"></c-icon>
				<c-ripple v-if="!disabled"></c-ripple>
			</div>
			<expand-transition>
				<ul class="c-sub-menu-content" v-show="opened">
					<slot></slot>
				</ul>
			</expand-transition>
		</template>
		<template v-if="mode === 'vertical'">
			<div class="c-sub-menu-title" :class="titleClass" :style="titleStyle" @mouseover="onOpen" @mouseout="onClose">
				<span class="c-sub-menu-title-text">{{title}}</span>
				<c-icon class="expand-more" icon="expand_more"></c-icon>
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
			childSelectedValue: {},
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
		titleClass() {
			const parent = this.menuParent
			const val = this.childSelectedValue
			return {
				expand: this.opened,
				'has-child-selected': (parent.multiple ? parent.valueState.some(v => val[v]) : val && val === parent.value)
			}
		}
	},
	methods: {
		onOpen(e) {
			clearTimeout(this.timer)
			if (!this.opened) {
				this.$emit('open', e)
				this.opened = true
			}
		},
		onClose(e) {
			clearTimeout(this.timer)
			this.timer = setTimeout(() => {
				if (this.opened) {
					this.$emit('close', e)
					this.opened = false
				}
			}, 50)
		},
		onToggle(e) {
			this.opened = !this.opened
			this.$emit('click', e)
		},
		onSelect(val) {
			if (this.menuParent.multiple) {
				this.childSelectedValue[val] = !this.childSelectedValue[val]
			} else {
				this.childSelectedValue = val
			}
			this.subMenuParent && this.subMenuParent.onSelect(val)
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
			&.expand {
				background-color: $menu-item-expand-bg-color;
			}

			& > .c-icon.expand-more {
				transform: rotate(-90deg);
				float: right;
			}
		}

		& > .c-sub-menu-content {
			position: absolute;
			left: 100%;
			top: 0;
			white-space: nowrap;
			min-width: $menu-width;
			background-color: $menu-bg-color;
			box-shadow: $menu-box-shadow;
			z-index: $zindex-menu;
		}

		& > .c-sub-menu-expand {
			&-enter-active,
			&-leave-active {
				transition: height .2s ease;
			}
		}
	}

	&.inline {
		overflow: hidden;

		& > .c-sub-menu-title {
			&.expand {
				& > .c-icon.expand-more {
					transform: rotate(-180deg);
				}
			}

			& > .c-icon.expand-more {
				transition: transform .2s ease;
				float: right;
			}
		}

		& > .c-sub-menu-content {
			background-color: $menu-bg-color;
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
		padding: $menu-item-padding;


		&.disabled {
			opacity: .6;
			cursor: not-allowed;
		}

		&:not(.disabled):hover {
			background: $menu-item-hover-bg-color !important;
		}

		&.has-child-selected {
			color: $submenu-has-child-selected-color;
		}
	}
}
</style>
