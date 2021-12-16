import React from 'react'
import type { NextPage } from 'next'
import Image from 'next/image'
import classNames from 'classnames/bind';
import styles from './RobotList.module.scss'
import { PageTitle, Button } from '../../atoms';
import ICON from '../../../static/images/ico/icon_point.png';
const cx = classNames.bind(styles);

const Point = ({
  children
}: any) => {

  return (
    <div className={cx('point-wrapper')}>
      <div className={cx('point-info-wrap')}>
        <div className={cx('icon')}>
          <div><Image alt="Icon" src={ICON} width={44} height={53} /></div>
        </div>
        <div className={cx('point-info')}>
          <div className={cx('title')}>
            Title
          </div>
          <div className={cx('info')}>x: 128 y: 536 deg: 320</div>
        </div>
      </div>
      <div className={cx('schedule-wrapper')}>
        <ul>
          <li>X: 8.91</li>
          <li>Y: 9.83</li>
          <li>DEG: -2.78</li>
        </ul>
        <ul>
          <li>X: 8.91</li>
          <li>Y: 9.83</li>
          <li>DEG: -2.78</li>
        </ul>
        <ul>
          <li>X: 8.91</li>
          <li>Y: 9.83</li>
          <li>DEG: -2.78</li>
        </ul>
      </div>
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
