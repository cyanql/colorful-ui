import React, { Component, PropTypes } from 'react'
import { immutableRenderDecorator }	from 'react-immutable-render-mixin'

@immutableRenderDecorator
export default
class Column extends Component {
	static propTypes = {
		className: PropTypes.string,
		flex: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
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
			<div className={["column", className].join(' ')} {...other} style={Object.assign(style, {flex, width, height, overflow})}>
				{children}
			</div>
		)
	}
}
