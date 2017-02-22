# Tabs

## 示例



::: 颜色
===
同 [**Button**](#/button)颜色配置一致
===
```html
<template>
	<div>
		<c-tabs value="a" color="primary" @change="onChange">
			<c-tab title="A" value="a">
				文字内容A
			</c-tab>
			<c-tab title="B" value="b">
				文字内容B
			</c-tab>
			<c-tab title="C" value="c">
				文字内容C
			</c-tab>
		</c-tabs>
	</div>
</template>
<script>
export default {
	methods: {
		onChange() {
			console.log(arguments)
		}
	}
}
</script>
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
