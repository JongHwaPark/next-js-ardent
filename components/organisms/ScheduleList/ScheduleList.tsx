import React from 'react'
import type { NextPage } from 'next'
import classNames from 'classnames/bind';
import styles from './ScheduleList.module.scss'
const cx = classNames.bind(styles);

const ScheduleList: NextPage = ({
  active
}:any) => {
  return (
    <div className={cx('schedule-list-wrapper')}>
      <div className={cx('schedule-list-content', {
        active:active
      })}>
        <div className={cx('online-list')}>
          <h3>온라인</h3>
          <ul>
            <li>zz</li>
          </ul>
        </div>
        <div className={cx('offline-list')}>
          <h3>온라인</h3>
          <ul>
            <li>zz</li>
          </ul>

        </div>
      </div>
    </div>
  );
};

export default ScheduleList;
