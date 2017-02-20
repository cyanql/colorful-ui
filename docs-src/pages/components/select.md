# Select

## 示例



::: 单选
===

===
```html
<template>
	<c-select label="label" v-model="value" floating-label>
		<c-option value="item 1">item 1</c-option>
		<c-option value="item 2">item 2</c-option>
		<c-option value="item 3">item 3</c-option>
		<c-option value="item 4">item 4</c-option>
		<c-option value="item 5">item 5</c-option>
	</c-select>
</template>
<script>
export default {
	data: () => ({
		value: ''
	})
}
</script>
```
:::


::: 多选
===

===
```html
<template>
	<c-select label="label" v-model="value" multiple floating-label>
		<c-option value="item 1">item 1</c-option>
		<c-option value="item 2">item 2</c-option>
		<c-option value="item 3">item 3</c-option>
		<c-option value="item 4">item 4</c-option>
		<c-option value="item 5">item 5</c-option>
	</c-select>
</template>
<script>
export default {
	data: () => ({
		value: []
	})
}
</script>
```
:::

## API

### Select

| 属性      | 说明                                       | 类型       | 默认值   |
| ------- | ---------------------------------------- | -------- | ----- |
| value | 设置选中的 **Option** 的值                         | any   | - |
| multiple | 设置多选，此时`value`需要为数组                   | boolean   | - |
| @select | 状态变化时触发                                  | function | -     |



### Select.Option

| 属性      | 说明                                       | 类型       | 默认值   |
| ------- | ---------------------------------------- | -------- | ----- |
| value | 对应 **Select** 的`value`                          | any   | - |
| $slots.default | 内容                                  | component | -     |
