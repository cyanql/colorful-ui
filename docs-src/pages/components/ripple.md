# Ripple

## 示例

::: 目标（宿主）
===
`target`默认值为`parentNode`，其它可选值`parentComponent` `[ref]`
- `parentComponent`父级组件为宿主
- `parentNode`父级节点为宿主
- `[ref]`查找匹配的`ref`
> 1. 由于 **Ripple** 使用`absolute`定位，宿主需要为祖先元素，且`position`属性为非`static`的值
> 1. Ripple 颜色对应宿主元素的`color`属性

===
```html
<template>
	<div>
		<c-button :ripple-visible="false">
			<div class="ripple-target">
				<img class="image" src="http://ww1.sinaimg.cn/mw690/ecab28b3jw8fa81ficnocj20dw0dw3z4.jpg" alt="avator">
				<c-ripple></c-ripple>
			</div>
		</c-button>

		<c-button :ripple-visible="false" class="ripple-target">
			<div>
				<img class="image" src="http://ww1.sinaimg.cn/mw690/ecab28b3jw8fa81ficnocj20dw0dw3z4.jpg" alt="avator">
				<c-ripple target="parentComponent"></c-ripple>
			</div>
		</c-button>

		<span class="ripple-target" ref="xxx">
			<img class="image" src="http://ww1.sinaimg.cn/mw690/ecab28b3jw8fa81ficnocj20dw0dw3z4.jpg" alt="avator">
			<c-ripple target="xxx"></c-ripple>
		</span>
	</div>
</template>
<style scoped>
.ripple-target {
	display: inline-block;
	color: blue;
	text-align: center;
	vertical-align: middle;
}
.image {
	width: 50px;
	line-height: 50px;
}
</style>
```
:::

## 注意

若宿主元素的`position`属性的值为`static`，将自动修改为`relative`辅助定位

## API

| 属性       | 说明                                       | 类型       | 默认值           |
| -------- | ---------------------------------------- | -------- | ------------- |
| target   | 设置`parentNode` `parentComponent` 或宿主元素的`ref`值  | string   | `parentNode` |
