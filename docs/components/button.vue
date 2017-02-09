<template>
	<div>
		<h1>
			<span>Button</span>
			<span class="chinese">按钮</span>
		</h1>
		<h2>示例</h2>
		<div class="sample">
			<div class="demo">
				<div class="case">
					<!-- <c-button>default</c-button>
					<c-button color="primary">primary</c-button>
					<c-button color="success">success</c-button>
					<c-button color="warning">warning</c-button>
					<c-button color="error">error</c-button>
					<c-button color="ghost">ghost</c-button>
					<c-button color="#808">#808</c-button> -->

				</div>
				<div class="info">
					颜色类型：除默认、主要、成功、警告、错误、幽灵这6种基本类型以外，还可以通过设置16进制颜色来设置字体颜色，幽灵和16进制类型默认背景色为透明
				</div>
			</div>
			<div class="code">
			</div>
			<li>
			<p>color</p>
			</li>
			<li>
				<p>icon</p>
				<c-button icon="email">icon</c-button>
				<c-button icon="email" color="primary">icon</c-button>
			</li>
			<li>
				<p>style</p>
				<c-button :style="{backgroundColor: '#336699', color: 'white'}">style</c-button>
			</li>
			<li>
				<p>loading</p>
				<c-button loading>loading</c-button>
			</li>
			<li>
				<p>disabled</p>
				<c-button disabled>disabled</c-button>
			</li>
			<li>
				<p>shape</p>
				<c-button shape="circle">circle</c-button>
				<c-button shape="circle" icon="email"></c-button>
			</li>
		</div>
	</div>
</template>

<style scoped>
.sample > li {
	padding: 20px 50px;
}
</style>
