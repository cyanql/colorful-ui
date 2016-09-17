import React from 'react';
import immutableRenderMixin from 'react-immutable-render-mixin';
import styles from './input.css';

const Input = React.createClass({
	mixins: [immutableRenderMixin],
	propTypes: {
		type: React.PropTypes.string,
		className: React.PropTypes.string,
		placeholder: React.PropTypes.string,
		value: React.PropTypes.string,
		style: React.PropTypes.object
	},
	render() {
		const { type, className } = this.props;
		if (type === 'textarea') {
			return (
				<textarea
					{...this.props}
					className={[styles['textarea'], className].join(' ')}
					>
				</textarea>
			)
		}
		return (
			<input
				{...this.props}
				className={[styles['text'], 'form-input', className].join(' ')}
			/>
		)
	}
});
export default Input;
