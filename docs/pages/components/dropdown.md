# Dropdown


## 示例


::: 颜色
===
颜色类型：除默认、主要、成功、警告、错误、幽灵这6种基本类型以外，还可以通过设置16进制颜色来设置字体颜色
幽灵和16进制类型默认背景色为透明
===
```html
<c-dropdown trigger="click" visible>
	<c-button>hover</c-button>
	<c-menu slot="menu">
		<c-menu-item>item 1</c-menu-item>
		<c-menu-item>item 2</c-menu-item>
		<c-menu-item>item 3</c-menu-item>
		<c-sub-menu title="submenu" expand>
			<c-menu-item>item 4</c-menu-item>
			<c-menu-item>item 5</c-menu-item>
		</c-sub-menu>
	</c-menu>
</c-dropdown>
```
:::
