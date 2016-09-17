import React from 'react';
import immutableRenderMixin from 'react-immutable-render-mixin';
import styles from './switch.css';

const Switch = React.createClass({
	mixins: [immutableRenderMixin],
	getDefaultProps() {
		return {
			onChange: () => {},
			size: 1
		}
	},
	propTypes: {
		checked: React.PropTypes.bool,
		onChange: React.PropTypes.func,
		size: React.PropTypes.number,
		className: React.PropTypes.string
	},
	render() {
		const { checked, style, className, onChange, size, checkedChildren, unCheckedChildren, ...other } = this.props;
		return (
			<span
				{...other}
				className={`${styles[checked ?'switchChecked' : 'switch']}${className ? ' ' + className : ''}`}
				onClick={() => onChange(!checked)}
				style={Object.assign({transform: `scale(${size})`}, style)}
				>
				<span className={styles['inner']}>{checked ? checkedChildren : unCheckedChildren }</span>
			</span>
		)
	}
});
export default Switch;
