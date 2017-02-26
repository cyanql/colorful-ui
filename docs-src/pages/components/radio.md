# Radio

## 示例

::: 颜色
===
同[**Checkbox**](#/checkbox)一致
===
```html
<template>
	<div>
		<c-radio checkedValue="1" v-model="value">Default</c-radio>
		<c-radio color="primary" checkedValue="2" v-model="value">Primary</c-radio>
		<c-radio color="success" checkedValue="3" v-model="value">Success</c-radio>
		<c-radio color="warning" checkedValue="4" v-model="value">Warning</c-radio>
		<c-radio color="error" checkedValue="5" v-model="value">Error</c-radio>
		<c-radio color="#808" checkedValue="6" v-model="value">#808</c-radio>
		<c-radio color="error" checkedValue="7" v-model="value" disabled>Disabled Error</c-radio>
	</div>
</template>
<script>
export default {
	data: () => ({
		value: '1'
	})
}
</script>
<style scoped>
.c-radio {
	margin: 20px;
}
</style>
```
:::

::: 组
===
===
```html
<template>
	<c-radio-group v-model="value">
		<c-radio checkedValue="1">Default</c-radio>
		<c-radio color="primary" checkedValue="2">Primary</c-radio>
		<c-radio color="success" checkedValue="3">Success</c-radio>
		<c-radio color="warning" checkedValue="4">Warning</c-radio>
		<c-radio color="error" checkedValue="5">Error</c-radio>
		<c-radio color="#808" checkedValue="6">#808</c-radio>
		<c-radio color="error" checkedValue="7" disabled>Disabled Error</c-radio>
	</c-radio-group>
</template>
<script>
export default {
	data: () => ({
		value: '1'
	})
}
</script>
<style scoped>
.c-radio {
	margin: 20px;
}
</style>
```
:::

## API

### Radio

| 属性      | 说明                                       | 类型       | 默认值   |
| ------- | ---------------------------------------- | -------- | ----- |
| color   | 设置颜色，可选值为`primary` `success` `warning` `error` `16进制` | string   | -     |
| checked | 设置初始是否选中                                 | string   | false |
| checkedValue | 设置选中时的值                                 | string   | false |
| value | 当与`checkedValue`相等时，自动选中                    | string   | false |
| @input | 状态变化时触发，配合`v-model`                         | function | -     |
| @change | 状态变化时触发                                  | function | -     |
| $slots.default | 文本内容                                  | component | -     |


### Radio.Group

| 属性      | 说明                                       | 类型       | 默认值   |
| ------- | ---------------------------------------- | -------- | ----- |
| value | 当与 **Radio** 的`checkedValue`相等时，自动选中         | string   | false |
| @input | 状态变化时触发，配合`v-model`                         | function | -     |
| @change | 状态变化时触发                                  | function | -     |
