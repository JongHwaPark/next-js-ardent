import React from 'react'
import classNames from 'classnames/bind';
import styles from './RobotSchedule.module.scss'
const cx = classNames.bind(styles);

const RobotSchedule = ({x, y, degree}) => {
  return (
    <ul className={cx('wrapper')}>
      <li>X: {x.toFixed(3)}</li>
      <li>Y: {y.toFixed(3)}</li>
      <li>DEG: {degree.toFixed(3)}</li>
    </ul>
  )
};

export default React.memo(RobotSchedule);
