# Dropdown


## 示例


::: 颜色
===
颜色类型：除默认、主要、成功、警告、错误、幽灵这6种基本类型以外，还可以通过设置16进制颜色来设置字体颜色
幽灵和16进制类型默认背景色为透明
===
```html
<template>
	<div>
		<c-input></c-input>
	</div>
</template>
```
:::


::: 预留
===
===
```html
<template>
	<div>
		<c-input placeholder="placeholder"></c-input>
	</div>
</template>
```
:::


::: 标签
===
通过设置`label`的值来展示标签，还可以通过`floating-label`来打开过渡效果
===
```html
<template>
	<div>
		<c-input label="label" placeholder="placeholder"></c-input>
		<c-input label="label" placeholder="placeholder" floating-label></c-input>
	</div>
</template>
```
:::


::: 受限
===
效果等同于`react`的受限组件
===
```html
<template>
	<div>
		<c-input placeholder="placeholder" controlled value="value"></c-input>
	</div>
</template>
```
:::


::: 提示
===
通过设置`hint`来显示提示信息，`hint-visible`来控制显示，`hint-color`来控制颜色
===
```html
<template>
	<div>
		<c-input hint="hint" hint-visible></c-input>
		<c-input hint="hint" label="primary" hint-color="primary" hint-visible></c-input>
		<c-input hint="hint" label="success" placeholder="placeholder" hint-color="success" hint-visible></c-input>
		<c-input hint="hint" label="warning" placeholder="placeholder" hint-color="warning" hint-visible floating-label></c-input>
	</div>
</template>
```
:::


::: multiline
===
通过设置`multiline`来设置多行输入，`autosize`仅支持此模式
===
```html
<template>
	<div>
		<c-input label="label" placeholder="placeholder" autosize floating-label multiline></c-input>
	</div>
</template>
```
:::
