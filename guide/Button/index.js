import React from 'react';
import immutableRenderMixin from 'react-immutable-render-mixin';
import styles from './button.css';

const Button = React.createClass({
	mixins: [immutableRenderMixin],
	getDefaultProps() {
		return {
			style: {},
			onClick: () => {}
		}
	},
	propTypes: {
		type: React.PropTypes.string,
		style: React.PropTypes.object,
		onClick: React.PropTypes.func,
		disabled: React.PropTypes.bool
	},
	render() {
		const { disabled, onClick, type, className, ...other } = this.props;

		return (
			<a
				{...other}
				href="javascript:void(0)"
				onClick={() => disabled ? false : onClick()}
				className={`${styles[disabled ? 'disabled' : type || 'button']}${className ? ' ' + className : ''}`}
				>
				{this.props.children || '按钮'}
			</a>
		)
	}
});
export default Button;
