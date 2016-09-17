import React, { Component, PropTypes } from 'react'
import { immutableRenderDecorator }	from 'react-immutable-render-mixin'

@immutableRenderDecorator
export default
class Row extends Component {
	static propTypes = {
		source: PropTypes.oneOfType([PropTypes.array]),
		onOk: PropTypes.func,
		onCancel: PropTypes.func
	}
	render() {
		const {
			children,
			className,
			flex,
			width,
			height,
			overflow,
			style,
			...other
		} = this.props

		return (
			<div
				{...other}
				className={["row", className].join(' ')}
				style={Object.assign({
					WebkitBoxFlex: flex,
					flex,
					width,
					height,
					overflow
				}, style)}
				>
				{children}
			</div>
		)
	}
}
