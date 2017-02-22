# Select

## 示例



::: 单选
===
只能选择一个选项
===
```html
<template>
	<div>
		<div v-text="value"></div>
		<c-select label="label" v-model="value" floating-label>
			<c-option value="apple">apple</c-option>
			<c-option value="pear">pear</c-option>
			<c-option value="orange">orange</c-option>
			<c-option value="banana">banana</c-option>
		</c-select>
	</div>
</template>
<script>
export default {
	data: () => ({
		value: 'none'
	})
}
</script>
```
:::


::: 多选
===
可以选择多个选项，`value`需要为数组
===
```html
<template>
	<div>
		<div v-text="value"></div>
		<c-select label="label" v-model="value" multiple floating-label>
			<c-option value="apple">apple</c-option>
			<c-option value="pear">pear</c-option>
			<c-option value="orange">orange</c-option>
			<c-option value="banana">banana</c-option>
		</c-select>
	</div>
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


::: 过滤
===
通过输入内容过滤选项
===
```html
<template>
	<div>
		<div v-text="value"></div>
		<c-select label="label" v-model="value" filterable multiple floating-label>
			<c-option value="apple">apple</c-option>
			<c-option value="pear">pear</c-option>
			<c-option value="orange">orange</c-option>
			<c-option value="banana">banana</c-option>
		</c-select>
	</div>
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

::: 新建
===
可将输入内容做为自定义选项进行添加
===
```html
<template>
	<div>
		<div v-text="value"></div>
		<c-select label="label" v-model="value" filterable addible multiple floating-label>
			<c-option value="apple">apple</c-option>
			<c-option value="pear">pear</c-option>
			<c-option value="orange">orange</c-option>
			<c-option value="banana">banana</c-option>
		</c-select>
	</div>
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
| floating-label | 同[**Input**](#/input)一致          	      | boolean   | false |
| label | 同[**Input**](#/input)一致                				| string   | - |
| placeholder | 同[**Input**](#/input)一致          		      | string   | - |
| hint           | 同[**Input**](#/input)一致			| string | - |
| hint-visible   | 同[**Input**](#/input)一致			| boolean | false     |
| hint-color     | 同[**Input**](#/input)一致			| string  | `primary` |
| multiple | 设置多选，此时`value`需要为数组                   | boolean   | - |
| filterable | 设置可否过滤					                   | boolean   | - |
| addible | 设置可否新增					                   | boolean   | - |
| @select | 状态变化时触发                                  | function | -     |



### Select.Option

| 属性      | 说明                                       | 类型       | 默认值   |
| ------- | ---------------------------------------- | -------- | ----- |
| selected | 是否选中，优先级高（建议不要和`v-model`同时使用） | boolean | false |
| value | 对应 **Select** 的`value`                          | string, array   | - |
| $slots.default | 内容                                  | component | -     |
