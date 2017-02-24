export default {
	top: {
		left(cStyle, tEl, cEl) {
			cStyle.top = -cEl.offsetHeight + 'px'
			cStyle.left = 0
			cStyle.transformOrigin = 'left bottom 0px'
		},
		center(cStyle, tEl, cEl) {
			cStyle.top = -cEl.offsetHeight + 'px'
			cStyle.left = (tEl.offsetWidth - cEl.offsetWidth) / 2 + 'px'
			cStyle.transformOrigin = 'center bottom 0px'
		},
		right(cStyle, tEl, cEl) {
			cStyle.top = -cEl.offsetHeight + 'px'
			cStyle.right = 0
			cStyle.transformOrigin = 'right bottom 0px'
		}
	},
	bottom: {
		left(cStyle, tEl, cEl) {
			cStyle.left = 0
			cStyle.transformOrigin = 'left top 0px'
		},
		center(cStyle, tEl, cEl) {
			cStyle.left = (tEl.offsetWidth - cEl.offsetWidth) / 2 + 'px'
			cStyle.transformOrigin = 'center top 0px'
		},
		right(cStyle, tEl, cEl) {
			cStyle.right = 0
			cStyle.transformOrigin = 'right top 0px'
		}
	},
	left: {
		top(cStyle, tEl, cEl) {
			cStyle.top = 0
			cStyle.left = -cEl.offsetWidth + 'px'
			cStyle.transformOrigin = 'right top 0px'
		},
		center(cStyle, tEl, cEl) {
			cStyle.top = (tEl.offsetHeight - cEl.offsetHeight) / 2 + 'px'
			cStyle.left = -cEl.offsetWidth + 'px'
			cStyle.transformOrigin = 'right center 0px'
		},
		bottom(cStyle, tEl, cEl) {
			cStyle.bottom = 0
			cStyle.left = -cEl.offsetWidth + 'px'
			cStyle.transformOrigin = 'right bottom 0px'
		}
	},
	right: {
		top(cStyle, tEl, cEl) {
			cStyle.top = 0
			cStyle.left = tEl.offsetWidth + 'px'
			cStyle.transformOrigin = 'left top 0px'
		},
		center(cStyle, tEl, cEl) {
			cStyle.top = (tEl.offsetHeight - cEl.offsetHeight) / 2 + 'px'
			cStyle.left = tEl.offsetWidth + 'px'
			cStyle.transformOrigin = 'left center 0px'
		},
		bottom(cStyle, tEl, cEl) {
			cStyle.bottom = 0
			cStyle.left = tEl.offsetWidth + 'px'
			cStyle.transformOrigin = 'left bottom 0px'
		}
	}
}
