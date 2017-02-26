# Checkbox


## 示例


::: 颜色
===
在**Button**颜色的基础上，将默认颜色改为`primary`，并去除`default`颜色类型
===
```html
<template>
	<div>
		<c-checkbox value>Default</c-checkbox>
		<c-checkbox value color="primary">Primary</c-checkbox>
		<c-checkbox value color="success">Success</c-checkbox>
		<c-checkbox value color="warning">Warning</c-checkbox>
		<c-checkbox value color="error">Error</c-checkbox>
		<c-checkbox value color="#808">#808</c-checkbox>
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
		<c-checkbox value disabled>Disabled</c-checkbox>
		<c-checkbox disabled>Disabled</c-checkbox>
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
