# Modal

## 示例


::: 模式
===
共有`inline`、`vertical`、`horizontal`三种模式
===
```html
<template>
	<div>
		<c-button @click="toggleVisible1">Toggle</c-button>
		<c-modal title="标题" :visible="visible1">
			内容
			<div slot="footer">
				<c-button color="ghost" @click="toggleVisible1">Cancel</c-button>
				<c-button color="primary" @click="toggleVisible1">Enter</c-button>
			</div>
		</c-modal>

		<c-button @click="toggleVisible1">Toggle</c-button>
		<c-modal :visible="visible2">
			<h1 slot="header">h1</h1>
			内容
			<div slot="footer">
				<c-button color="ghost" @click="toggleVisible2">Cancel</c-button>
				<c-button color="primary" @click="toggleVisible2">Enter</c-button>
			</div>
		</c-modal>
	</div>
</template>
<script>
export default {
	data: () => ({
		visible1: false,
		visible2: false
	}),
	methods: {
		toggleVisible1() {
			this.visible1 = !this.visible1
		},
		toggleVisible2() {
			this.visible2 = !this.visible2
		}
	}
}
</script>
```
:::



## API

| 属性             | 说明                                   | 类型        | 默认值   |
| -------------- | ------------------------------------ | --------- | ----- |
| title          | 对话框标题                                | string    | -     |
| visible        | 对话框是否可见                              | boolean   | false |
| $slots.default | 对话框内容                                | component | -     |
| $slots.header  | 对话框页眉，此项不能与`title`同时存在，且优先级高于`title` | component | -     |
| $slots.footer  | 对话框页脚，可放置按钮等自定义内容                    | component | -     |
