import React, { Component, PropTypes } from 'react'
import { immutableRenderDecorator }	from 'react-immutable-render-mixin'
import './form.less'

@immutableRenderDecorator
export default
class FormControl extends Component {
	render() {
		const {
			children,
			className,
			...other
		} = this.props

		return (
			<div className={["form-control", className].join(' ')} {...other}>
				{children}
			</div>
		)
	}
}
