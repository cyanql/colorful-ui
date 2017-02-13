# Switch

## 示例



::: 颜色
===

===
```html
<template>
	<div>
		<c-switch checked>primary</c-switch>
		<c-switch color="success" checked>success</c-switch>
		<c-switch color="warning" checked>warning</c-switch>
		<c-switch color="error" checked>error</c-switch>
	</div>
</template>
```
:::

## API

| 属性      | 说明                                       | 类型       | 默认值   |
| ------- | ---------------------------------------- | -------- | ----- |
| color   | 设置颜色，可选值为`primary` `success` `warning` `error` `16进制` | string   | -     |
| checked | 设置初始是否选中                                 | string   | false |
| @change | 状态变化时触发                                  | function | -     |
| $slots.default | 文本内容                                  | component | -     |
