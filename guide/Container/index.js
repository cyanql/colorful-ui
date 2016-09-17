import React, { Component, PropTypes } from 'react'
import { immutableRenderDecorator }	from 'react-immutable-render-mixin'
import './container.less'

@immutableRenderDecorator
export default
class Container extends Component {
	static propTypes = {
		source: PropTypes.oneOfType([PropTypes.array]),
		onOk: PropTypes.func,
		onCancel: PropTypes.func
	}
	render() {
		const {
			children,
			className,
			overflow,
			...other
		} = this.props

		return (
			<div className={["container", className].join(' ')} {...other} style={{overflow}}>
				{children}
			</div>
		)
	}
}
