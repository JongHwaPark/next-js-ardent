import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';
const cx = classNames.bind(styles);

//type : typescript로 type 값지정하기 
const Button = ({ type, className, children, active, ...args }) => {
  return (
    <button className={cx('button', type, className, { 'on': active })} {...args}>
      {children}
    </button>
  )
};

Button.propTypes = {
  type: PropTypes.string,
};

Button.defaultProps = {
  type: 'default',
};

export default React.memo(Button);
