# Dropdown


## 示例


::: 基本
===
===
```html
<template>
	<div>
		<c-input v-model="value"></c-input>
	</div>
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


::: 预留
===
===
```html
<template>
	<div>
		<c-input placeholder="placeholder" v-model="value"></c-input>
	</div>
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


::: 标签
===
通过设置`label`的值来展示标签，还可以通过`floating-label`来打开过渡效果
===
```html
<template>
	<div>
		<c-input label="label" placeholder="placeholder" v-model="value1"></c-input>
		<c-input label="label" placeholder="placeholder" floating-label v-model="value2"></c-input>
	</div>
</template>
<script>
export default {
	data: () => ({
		value1: '',
		value2: ''
	})
}
</script>
```
:::


::: 受限
===
效果等同于`react`的受限组件
===
```html
<template>
	<div>
		<c-input placeholder="placeholder" controlled :value="value" @input="onInput"></c-input>
	</div>
</template>
<script>
export default {
	data: () => ({
		value: ''
	}),
	methods: {
		onInput(value) {
			if (/^\d*$/.test(value)) {
				this.value = value
			}
		}
	}
}
</script>
```
:::


::: 提示
===
通过设置`hint`来显示提示信息，`hint-visible`来控制显示，`hint-color`来控制颜色
===
```html
<template>
	<div>
		<c-input hint="hint" hint-visible v-model="value1"></c-input>
		<c-input hint="hint" label="primary" hint-color="primary" hint-visible v-model="value2"></c-input>
		<c-input hint="hint" label="success" placeholder="placeholder" hint-color="success" hint-visible v-model="value3"></c-input>
		<c-input hint="hint" label="warning" placeholder="placeholder" hint-color="warning" hint-visible floating-label v-model="value4"></c-input>
	</div>
</template>
<script>
export default {
	data: () => ({
		value1: '',
		value2: '',
		value3: '',
		value4: ''
	})
}
</script>
```
:::


::: multiline
===
通过设置`multiline`来设置多行输入，`autosize`仅支持此模式
===
```html
<template>
	<div>
		<c-input label="label" placeholder="placeholder" autosize floating-label multiline v-model="value"></c-input>
	</div>
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


## API

| 属性             | 说明                                       | 类型             | 默认值       |
| -------------- | ---------------------------------------- | -------------- | --------- |
| name           | 原生属性                                     | string         | —         |
| type           | 原生属性                                     | string         | text      |
| required       | 原生属性                                     | boolean        | —         |
| readonly       | 原生属性                                     | boolean        | —         |
| disabled       | 原生属性                                     | boolean        | —         |
| auto-complete  | 原生属性，自动补全，可选值`on`, `off`                 | string         | `off`     |
| autofocus      | 原生属性，自动获取焦点                              | boolean        | false     |
| maxlength      | 原生属性，最大输入长度                              | number         | —         |
| minlength      | 原生属性，最小输入长度                              | number         | —         |
| max            | 原生属性，设置最大值                               | *              | —         |
| min            | 原生属性，设置最小值                               | *              | —         |
| floating-label | 标签是否浮动                                   | boolean        | false     |
| label          | 标签文本                                     | string         | -         |
| placeholder    | 占位文本                                     | string         | —         |
| value          | 绑定值                                      | string, number | —         |
| controlled     | 受限，同 **react**中受限组件类似                    | boolean        | false     |
| hint           | 提示                                       | string         | -         |
| hint-visible   | 提示信息是否可见                                 | boolean        | false     |
| hint-color     | 提示信息颜色，可选值`primary`  `success` `warning` `error` | string         | `primary` |
| multiline      | 多行模式                                     | boolean        | false     |
| rows           | 输入框行数，只在设置`multiline`时有效                 | number         | 2         |
| autosize       | 自适应内容高度，只在设置`multiline`时有效               | boolean        | false     |
| @input         | 值输入时触发                                   | function       | —         |
| @change        | 值更改时触发                                   | function       | —         |
| @focus         | 输入框聚焦时触发                                 | function       | —         |
| @blur          | 输入框失焦时触发                                 | function       | —         |
