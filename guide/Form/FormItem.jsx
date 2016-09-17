import React, { Component, PropTypes } from 'react'
import { immutableRenderDecorator }	from 'react-immutable-render-mixin'
import './form.less'
import Label from './FormLabel'
import Control from './FormControl'

@immutableRenderDecorator
export default
class FormItem extends Component {
	render() {
		const {
			label,
			children,
			className,
			...other
		} = this.props

		return (
			<div className={["form-item", className].join(' ')} {...other}>
				<Label>{label}</Label>
				<Control>
					{children}
				</Control>
			</div>
		)
	}
}
