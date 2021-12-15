import React from 'react'
import type { NextPage } from 'next'
import classNames from 'classnames/bind';
import styles from './RobotList.module.scss'
import { PageTitle, Button } from '../../atoms';
const cx = classNames.bind(styles);

const Point = ({
  children
}: any) => {

  return (
    <div className={cx('point-wrapper')}>
      <span className={cx('title')}>거점 1</span>
      <span className={cx('status')}>상태</span>
      <span className={cx('position')}>위치</span>
    </div>
  );
};

const ScheduleList = () => {
  return (
    <div>
      스캐줄리스트
    </div>
  );
};

const RobotList: NextPage = ({
  active
}:any) => {
  return (
    <div className={cx('schedule-list-wrapper')}>
      <div className={cx('schedule-list-content', {
        active:active
      })}>
        <div className={cx('online-list')}>
          <PageTitle>온라인</PageTitle>
          <ul>
            <li>
              <Point type={'default'} />
              <ScheduleList />
            </li>
            <li>
              <Point type={'default'} />
            </li>
            <li>
              <Point type={'default'} />
            </li>
          </ul>
        </div>
        <div className={cx('offline-list')}>
          <PageTitle>오프라인</PageTitle>
          <ul>
            <li>zz</li>
          </ul>

        </div>
      </div>
    </div>
  );
};

export default RobotList;
