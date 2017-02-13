# Checkbox


## 示例


::: 颜色
===
在**Button**颜色的基础上，将默认颜色改为`primary`，并去除`default` `ghost`两种颜色类型
===
```html
<template>
	<div>
		<c-checkbox checked>default</c-checkbox>
		<c-checkbox checked color="primary">primary</c-checkbox>
		<c-checkbox checked color="success">success</c-checkbox>
		<c-checkbox checked color="warning">warning</c-checkbox>
		<c-checkbox checked color="error">error</c-checkbox>
		<c-checkbox checked color="#808">#808</c-checkbox>
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
		<c-checkbox checked disabled>disabled</c-checkbox>
		<c-checkbox disabled>disabled</c-checkbox>
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
