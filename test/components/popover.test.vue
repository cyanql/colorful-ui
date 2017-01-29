<template>
	<ul>
		<li>
			<p>position</p>
			<ul>
				<li>
					<p>top</p>
					<c-button ref="top1">left</c-button>
					<c-popover target="top1" trigger="hover" position="top-left">
						<p>top-left</p>
					</c-popover>
					<c-button ref="top2">center</c-button>
					<c-popover target="top2" trigger="hover" position="top">
						<p>top</p>
					</c-popover>
					<c-button ref="top3">right</c-button>
					<c-popover target="top3" trigger="hover" position="top-right">
						<p>top-right</p>
					</c-popover>
				</li>
				<li>
					<p>bottom</p>
					<c-button ref="bottom1">left</c-button>
					<c-popover target="bottom1" trigger="hover" position="bottom-left">
						<p>bottom-left</p>
					</c-popover>
					<c-button ref="bottom2">center</c-button>
					<c-popover target="bottom2" trigger="hover" position="bottom">
						<p>bottom</p>
					</c-popover>
					<c-button ref="bottom3">right</c-button>
					<c-popover target="bottom3" trigger="hover" position="bottom-right">
						<p>bottom-right</p>
					</c-popover>
				</li>
				<li>
					<p>left</p>
					<c-button ref="left1">top</c-button>
					<c-popover target="left1" trigger="hover" position="left-top">
						<p>left-top</p>
					</c-popover>
					<c-button ref="left2">center</c-button>
					<c-popover target="left2" trigger="hover" position="left">
						<p>left</p>
					</c-popover>
					<c-button ref="left3">bottom</c-button>
					<c-popover target="left3" trigger="hover" position="left-bottom">
						<p>left-bottom</p>
					</c-popover>
				</li>
				<li>
					<p>right</p>
					<c-button ref="right1">top</c-button>
					<c-popover target="right1" trigger="hover" position="right-top">
						<p>right-top</p>
					</c-popover>
					<c-button ref="right2">center</c-button>
					<c-popover target="right2" trigger="hover" position="right">
						<p>right</p>
					</c-popover>
					<c-button ref="right3">bottom</c-button>
					<c-popover target="right3" trigger="hover" position="right-bottom">
						<p>right-bottom</p>
					</c-popover>
				</li>
			</ul>
		</li>
	</ul>
</template>
<style>
li {
	padding: 20px 50px;
}

p {
	padding: 10px;
}
</style>
