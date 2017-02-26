# Switch

## 示例



::: 颜色
===
同[**Checkbox**](#/checkbox)一致
===
```html
<template>
	<div>
		<c-switch value>Primary</c-switch>
		<c-switch value color="success">Success</c-switch>
		<c-switch value color="warning">Warning</c-switch>
		<c-switch value color="error">Error</c-switch>
		<c-switch value color="#808">#808</c-switch>
	</div>
</template>
```
:::


::: 不可用
===
当设置`disabled`属性为`true`时，按钮即为不可用状态
===
```html
<template>
	<div>
		<c-switch value disabled>disabled</c-switch>
		<c-switch disabled>disabled</c-switch>
	</div>
</template>
```
:::

## API

| 属性      | 说明                                       | 类型       | 默认值   |
| ------- | ---------------------------------------- | -------- | ----- |
| color   | 设置颜色，可选值为`primary` `success` `warning` `error` `16进制` | string   | -     |
| value | 设置初始是否选中                                 | boolean   | false |
| @input | 用于`v-model`绑定                              | function | -     |
| @change | 状态变化时触发                                  | function | -     |
| $slots.default | 文本内容                                  | component | -     |
