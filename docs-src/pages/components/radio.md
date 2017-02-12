# Radio

## 示例

::: 颜色
===
===
```html
<template>
	<div>
		<c-radio checkedValue="1" :value="value">primary</c-radio>
		<c-radio color="success" checkedValue="2" value="1">success</c-radio>
		<c-radio color="warning" checkedValue="3" value="1">warning</c-radio>
		<c-radio color="error" checkedValue="4" value="1">error</c-radio>
		<c-radio color="error" checkedValue="5" value="1" disabled>error</c-radio>
	</div>
</template>
<script>
export default {
	data() {
		return {
			value: '1'
		}
	}
}
</script>
```
:::

::: 组
===
===
```html
<template>
	<c-radio-group value="2">
		<c-radio checkedValue="1">primary</c-radio>
		<c-radio color="success" checkedValue="2">success</c-radio>
		<c-radio color="warning" checkedValue="3">warning</c-radio>
		<c-radio color="error" checkedValue="4">error</c-radio>
		<c-radio color="error" checkedValue="5" disabled>error</c-radio>
	</c-radio-group>
</template>
```
:::
