import React, { Component, PropTypes } from 'react'
import { immutableRenderDecorator }	from 'react-immutable-render-mixin'
import './form.less'

@immutableRenderDecorator
export default
class FormLabel extends Component {
	render() {
		const {
			className,
			children,
			...other
		} = this.props

		return (
			<label className={["form-label", className].join(' ')} {...other}>
				{children}
			</label>
		)
	}
}
