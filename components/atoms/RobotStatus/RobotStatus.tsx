import React from 'react'
import type { NextPage } from 'next'
import Image from 'next/image'
import classNames from 'classnames/bind';
import styles from './RobotStatus.module.scss'
import ICON from '../../../static/images/ico/icon_point.png';
const cx = classNames.bind(styles);

const RobotStatus = ({
  name,
  x,
  y,
  degree
}) => {
  const styles = { 
    transform: `rotate(${degree}deg)` 
  };

  return (
    <div className={cx('point-info-wrap')}>
    <div className={cx('icon')}>
      <div style={styles}>
        <Image alt="Icon" src={ICON} width={44} height={53} />
      </div>
    </div>
    <div className={cx('point-info')}>
      <div className={cx('title')}>
        {name}
      </div>
      <div className={cx('info')}>
        <span>X: {x.toFixed(3)} </span>
        <span>Y: {y.toFixed(3)} </span>
        <span>DEG: {degree.toFixed(3)}</span>
      </div>
    </div>
  </div>
  )
};

export default React.memo(RobotStatus);
