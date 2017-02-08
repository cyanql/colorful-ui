<template>
	<ul class="component">
		<li>
			<p>click</p>
			<c-dropdown trigger="click" visible>
				<c-button>dropdown</c-button>
				<c-menu slot="menu">
					<c-menu-item>1</c-menu-item>
					<c-menu-item>2</c-menu-item>
					<c-menu-item>3</c-menu-item>
					<c-sub-menu title="submenu" expand>
						<c-menu-item>4</c-menu-item>
						<c-menu-item>5</c-menu-item>
					</c-sub-menu>
				</c-menu>
			</c-dropdown>
		</li>
	</ul>
</template>
<style scoped>
.component > li {
	padding: 20px 50px;
}
</style>
