# Tooltip


## 示例


::: 使用
===
可理解为定制版`Dropdown`
===
```html
<template>
	<div>
		<c-tooltip v-for="position in positions" :position="position" text="tooltip text content">
			<c-button v-text="position"></c-button>
		</c-tooltip>
	</div>
</template>

<script>
export default {
	data() {
		return {
			positions: [
				'top-left', 'top', 'top-right',
				'bottom-left', 'bottom', 'bottom-right',
				'left-top', 'left', 'left-bottom',
				'right-top', 'right', 'right-bottom'
			]
		}
	}
}
</script>

<style scoped>
.c-tooltip {
	margin: 20px;
	position: relative;
}
</style>
```
:::


## API

| 属性       | 说明                                       | 类型       | 默认值           |
| -------- | ---------------------------------------- | -------- | ------------- |
| position | 设置浮动层显示位置，可选值为`top-left` `top` `top-right` 等12种 | string   |-|
| text | 文本内容										 | string   | -|
| $slots.default | 宿主元素                                | component | -     |
