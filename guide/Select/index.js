
import React from 'react';
import RcSelect, { Option, OptGroup } from 'rc-select';
import './select.css';
import '../All/css/slide.css';

export default class Select extends React.Component {
  render() {
    let { combobox, notFoundContent } = this.props;

    if (combobox) {
      notFoundContent = null;
    }

    return (
      <RcSelect {...this.props}
        notFoundContent={notFoundContent} />
    );
  }
}

Select.defaultProps = {
  prefixCls: 'select',
  transitionName: 'slide-up',
  optionLabelProp: 'children',
  choiceTransitionName: 'zoom',
  showSearch: false,
  notFoundContent: '无可选项'
};

Select.Option = Option;
Select.OptGroup = OptGroup;
