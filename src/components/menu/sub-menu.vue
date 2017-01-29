<template>
	<div class="c-sub-menu">
		<c-menu-item class="c-sub-menu-title c-clear" :level="level" @click="toggleExpand" color="ghost">
			<span class="c-sub-menu-title-text">{{title}}</span>
			<c-icon class="expand-more" icon="expand_more" :style="{transform: expandStatus ? 'rotate(-180deg)' : ''}"></c-icon>
		</c-menu-item>
		<transition name="c-sub-menu-expand" @before-enter="beforeEnter" @leave="leave" @after-leave="afterLeave">
			<div class="c-sub-menu-content" ref="subMenuContent" v-show="expandStatus">
				<slot></slot>
			</div>
		</transition>
	</div>
</template>

<script>
import MenuItem from './menu-item'

// 获取隐藏元素的高
function getHideElementOffsetHeight(el) {
	const clone = el.cloneNode(true)
	Object.assign(clone.style, {
		visibility: 'hidden',
		display: '',
		maxHeight: '9999px',
		zIndex: -9999
	})

	let offsetHeight
	el.parentNode.appendChild(clone)
	offsetHeight = clone.offsetHeight
	clone.remove()
	return offsetHeight
}

export default {
	name: 'c-sub-menu',
	props: {
		title: String,
		level: {
			type: Number,
			default: 1
		},
		expand: {
			type: Boolean,
			default: true
		}
	},
	data() {
		return {
			subLevel: this.level + 1,
			expandStatus: this.expand,
			maxHeight: 0
		}
	},
	methods: {
		toggleExpand() {
			this.expandStatus = !this.expandStatus
		},
		beforeEnter(el) {
			el.style.maxHeight = 0
			setTimeout(() => {
				el.style.maxHeight = this.maxHeight
			}, 20)
		},
		leave(el) {
			el.style.maxHeight = 0
		},
		afterLeave(el) {
			el.style.maxHeight = this.maxHeight
		}
	},
	created() {
		const defaultSlots = this.$slots.default
		defaultSlots && defaultSlots.forEach(vm => {
			const opts = vm.componentOptions
			if (opts) {
				opts.propsData.level = this.level + 1
			}
		})
	},
	mounted() {
		this.$nextTick(() => {
			const el = this.$refs['subMenuContent']
			// 获取隐藏内容的初始化最大高度
			const maxHeight = getHideElementOffsetHeight(el) + 'px'
			el.style.maxHeight = maxHeight
			this.maxHeight = maxHeight
		})
	}
}
</script>

<style lang="scss">
.c-sub-menu {
	&-title {
		& .c-icon.expand-more {
			transition: transform .2s ease;
			float: right;
		}
	}

	&-content {
		text-indent: 20px;
		background: white;
		max-height: 9999px;
	}

	&-expand {
		&-enter-active,
		&-leave-active {
			transition: max-height .2s ease;
		}
	}
}
</style>
