<template>
	<ul>
		<li>
			<p>color</p>
			<c-menu class="menu-test">
				<c-menu-item icon="email">email</c-menu-item>
				<c-menu-item>2</c-menu-item>
				<c-menu-item>3</c-menu-item>
				<c-sub-menu title="submenu" mode="vertical">
					<c-menu-item selected>4</c-menu-item>
					<c-menu-item>5</c-menu-item>
					<c-sub-menu title="subsubmenu" mode="vertical">
						<c-menu-item selected>6</c-menu-item>
						<c-menu-item>7</c-menu-item>
					</c-sub-menu>
				</c-sub-menu>
			</c-menu>
		</li>
	</ul>
</template>

<style>
li {
	padding: 20px 50px;
}

.menu-test {
	box-shadow: 0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.2), 0 1px 5px 0 rgba(0,0,0,.12);
}
</style>
