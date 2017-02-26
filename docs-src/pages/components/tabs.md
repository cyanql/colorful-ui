# Tabs

## 示例



::: 颜色
===
同 [**Button**](#/button)颜色配置一致
===
```html
<template>
	<div>
		<c-tabs value="a" color="primary">
			<c-tab title="A" value="a">
				<pre>text content A</pre>
			</c-tab>
			<c-tab title="B" value="b">
				<pre>text content B</pre>
			</c-tab>
			<c-tab title="C" value="c">
				<pre>text content C</pre>
			</c-tab>
		</c-tabs>
	</div>
</template>
```
:::

## API

### Tabs

| 属性      | 说明                                       | 类型       | 默认值   |
| ------- | ---------------------------------------- | -------- | ----- |
| color   | 设置颜色，可选值为`default` `primary` `success` `warning` `error` `16进制` | string   | `default`     |
| value | 设置选中的`tab`的值                                 | any   | - |
| @change | 状态变化时触发                                  | function | -     |



### Tabs.Tab

| 属性      | 说明                                       | 类型       | 默认值   |
| ------- | ---------------------------------------- | -------- | ----- |
| value | 对应 **Tabs** 的`value`                          | any   | - |
| $slots.default | 内容                                  | component | -     |
