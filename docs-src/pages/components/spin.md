# Spin


## 示例


::: 单独
===
单独使用时
===
```html
<template>
	<div>
		<div class="test">
			<c-spin :loading="loading"></c-spin>
		</div>

		<c-switch v-model="loading"></c-switch>
		<span>Loading State</span>
	</div>
</template>
<script>
export default {
	data: () => ({
		loading: true
	})
}
</script>
<style>
.test {
	display: inline-block;
	background-color: #108ee9;
	padding: 20px;
}
</style>
```
:::



::: 配合
===
当存在`slot`时，将改变`loading`方式，并对内容进行虚化
===
```html
<template>
	<div>
		<div class="test">
			<c-spin :radius="20" text="loading..." :loading="loading">
				文本内容 文本内容 文本内容 文本内容
				文本内容 文本内容 文本内容 文本内容
				文本内容 文本内容 文本内容 文本内容
			</c-spin>
		</div>

		<c-switch v-model="loading"></c-switch>
		<span>Loading State</span>
	</div>
</template>
<script>
export default {
	data: () => ({
		loading: true
	})
}
</script>
<style>
.test {
	display: inline-block;
	background-color: #108ee9;
	padding: 20px;
}
</style>
```
:::


## API

| 属性      | 说明                                       | 类型       | 默认值   |
| ------- | ---------------------------------------- | -------- | ----- |
| loading | 是否开启loading动画						 | string   | -     |
| radius | loading动画半径                                 | number   | 25 |
| text | loading动画提示信息                                  | function | -     |
| $slots.default | 需要被遮挡的内容                                  | component | -     |
