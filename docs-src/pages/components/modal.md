# Modal

## 示例


::: 标题
===
使用`title`设置标题
===
```html
<template>
	<div>
		<c-button @click="toggleVisible">Toggle</c-button>
		<c-modal title="标题" :visible="visible">
			内容
			<div slot="footer">
				<c-button color="primary" @click="toggleVisible">Close</c-button>
			</div>
		</c-modal>
	</div>
</template>
<script>
export default {
	data: () => ({
		visible: false
	}),
	methods: {
		toggleVisible() {
			this.visible = !this.visible
		}
	}
}
</script>
```
:::


::: 页首、页脚
===
使用`$slots.header`自定义页首，使用`$slots.footer`自定义页脚
===
```html
<template>
	<div>
		<c-button @click="toggleVisible">Toggle</c-button>
		<c-modal :visible="visible">
			<h1 slot="header">h1</h1>
			内容
			<div slot="footer">
				<c-button ghost @click="toggleVisible">Cancel</c-button>
				<c-button color="primary" @click="toggleVisible">Enter</c-button>
			</div>
		</c-modal>
	</div>
</template>
<script>
export default {
	data: () => ({
		visible: false
	}),
	methods: {
		toggleVisible() {
			this.visible = !this.visible
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
