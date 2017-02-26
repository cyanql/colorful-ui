# Icon

## 来源
[Material Design Icons](https://material.io/icons)

## 使用
必须设置图标对应的`icon`属性，示例代码如下:
```html
<c-icon icon="check"></c-icon>
```
最终会渲染为：
```html
<i class="c-icon">check</i>
```
> 如果图标名称为单词组合，如 expand more, 则需要通过下划线 _ 连接，设置为`icon="expand_more"`

## 示例

::: 颜色
===
除默认`default`、主要`primary`、成功`success`、警告`warning`、错误`error`这5种基本类型以外，还可以设置`16进制`颜色
> 除`default`外，字体颜色都为白色

===
```html
<template>
	<div>
		<c-icon icon="check">Default</c-icon>
		<c-icon icon="close" color="primary">Primary</c-icon>
		<c-icon icon="chevron_left" color="success">Success</c-icon>
		<c-icon icon="chevron_right" color="warning">Warning</c-icon>
		<c-icon icon="expand_less" color="error">Error</c-icon>
		<c-icon icon="expand_more" color="#808">#808</c-icon>
	</div>
</template>
<style scoped>
.c-icon {
	font-size: 25px;
    line-height: 1;
}
</style>
```
:::



## API


| 属性             | 说明                                       | 类型       | 默认值   |
| -------------- | ---------------------------------------- | -------- | ----- |
| color          | 同[**Button**](#/button)一致 				| string   | `default`     |
| icon          | 设置按钮的图标类型，具体值参照[Material Design Icons](https://material.io/icons)官网                                | string   | -     |
| @click         | `click` 事件的 handler                      | function | -     |
