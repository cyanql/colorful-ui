# Modal

## 示例


::: 模式
===
共有`inline`、`vertical`、`horizontal`三种模式
===
```html
<template>
	<div>	
		<c-button>Toggle</c-button>
		<c-modal title="标题">
			内容
			<div slot="footer">
				<c-button color="ghost">Cancel</c-button>
				<c-button color="primary">Enter</c-button>
			</div>
		</c-modal>
		<c-button>Toggle</c-button>
		<c-modal>
			<h1 slot="header">h1</h1>
			内容
			<div slot="footer">
				<c-button color="ghost">Cancel</c-button>
				<c-button color="primary">Enter</c-button>
			</div>
		</c-modal>
	</div>
</template>
```
:::
