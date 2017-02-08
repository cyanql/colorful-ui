<template>
	<div>
		<header class="docs-header">
			<span class="logo">Colorful-UI</span>
			<nav class="nav">
				<c-button icon="search" color="ghost" shape="circle"></c-button>
			</nav>
		</header>
		<div class="docs-container">
			<c-menu class="sidebar" @select="onSelect">
				<c-menu-item-group v-for="group in groups" :title="group.title">
					<c-menu-item v-for="item in group.items" :data="item.index" :disabled="item.disabled" :selected="selectIndex === item.index">
						<span>{{item.english}}</span>
						<span>{{item.chinese}}</span>
					</c-menu-item>
				</c-menu-item-group>
			</c-menu>
			<div class="content">
				<pre-code>
					<div>
						<c-button></c-button>
					</div>
				</pre-code>
				content
			</div>
		</div>
		<footer>

		</footer>
	</div>
</template>

<script>
import conf from './conf'
import PreCode from './pre-code'

export default {
	name: 'app',
	data() {
		let i = 0
		return {
			groups: conf.groups.map(v => {
				v.items.map(w => {
					w.index = i++
					return w
				})
				return v
			}),
			selectIndex: 0
		}
	},
	methods: {
		onSelect(data) {
			console.log(data)
			this.selectIndex = data
		}
	},
	components: {
		'pre-code': PreCode
	}
}
</script>

<style lang="scss">
.docs {
	&-header {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		padding: 0 50px;
		line-height: 60px;
		box-shadow: 0 0 1px rgba(0,0,0,0.25);

		&:after {
			content: '';
			clear: both;
		}

		.logo {
			display: inline-block;
			font-weight: bold;
		}

		.nav {
			display: inline-block;
			float: right;
		}
	}

	&-container {
		.sidebar {
			position: fixed;
			top: 60px;
			left: 0;
			bottom: 0;
			overflow-y: scroll;
			padding: 20px 0;
			width: 200px;
			font-family: Lato, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", SimSun, sans-serif;

			.chinese {
				font-size: 12px;
				opacity: .7;
			}
		}

		.content {
			margin-top: 60px;
			margin-left: 200px;
			padding: 50px;
			overflow: hidden;
		}
	}
}
</style>
