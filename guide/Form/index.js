import React, { Component, PropTypes } from 'react'
import { immutableRenderDecorator }	from 'react-immutable-render-mixin'
import FormItem from './FormItem'
import FormLabel from './FormLabel'
import FormControl from './FormControl'
import './form.less'

@immutableRenderDecorator
export default
class Form extends Component {
	render() {
		const {
			children,
			className,
			...other
		} = this.props

		return (
			<div className={["form", className].join(' ')} {...other}>
				{children}
			</div>
		)
	}
}

Form.Item = FormItem
Form.Label = FormLabel
Form.Control = FormControl
