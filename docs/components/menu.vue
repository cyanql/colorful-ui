<template>
	<ul>
		<li>
			<p>inline</p>
			<c-menu>
				<c-menu-item icon="email">email</c-menu-item>
				<c-menu-item>2</c-menu-item>
				<c-menu-item>3</c-menu-item>
				<c-sub-menu title="submenu" mode="inline">
					<c-menu-item selected>4</c-menu-item>
					<c-menu-item>5</c-menu-item>
					<c-sub-menu title="subsubmenu" mode="inline">
						<c-menu-item selected>6</c-menu-item>
						<c-menu-item>7</c-menu-item>
					</c-sub-menu>
				</c-sub-menu>
			</c-menu>
		</li>
		<li>
			<p>vertical</p>
			<c-menu>
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
</style>
