import React from 'react'
import type { NextPage } from 'next'
import Image from 'next/image'
import classNames from 'classnames/bind';
import styles from './RobotList.module.scss'
import { PageTitle, Button } from '../../atoms';
import ICON from '../../../static/images/ico/icon_point.png';
const cx = classNames.bind(styles);

const Robot = ({
  name,
  x,
  y,
  degree,
  schedule,
}: any) => {
  console.log(schedule);
  const styles = { 
    transform: `rotate(${degree}deg)` 
  };
  return (
    <div className={cx('point-wrapper')}>
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
          <div className={cx('info')}>x: {x} y: {y} deg: {degree}</div>
        </div>
      </div>
      <div className={cx('schedule-wrapper')}>
      { schedule && schedule.map(({x, y, degree}, index) => (
        <ul key={index}>
          <li>X: {x}</li>
          <li>Y: {y}</li>
          <li>DEG: {degree}</li>
        </ul>
      )) }
      </div>
    </div>
  );
};

const RobotList: NextPage = ({
  active,
  robots,
}:any) => {
  return (
    <div className={cx('schedule-list-wrapper')}>
      <div className={cx('schedule-list-content', {
        active:active
      })}>
        <div className={cx('robot-list')}>
          <PageTitle>온라인</PageTitle>
          <ul>
            {robots.map((robot, index) => {
              const { schedule, pose: { x,y,degree}  } = robot.status;
              return (<li key={index}>
                <Robot 
                  name={robot.name} 
                  x={x}
                  y={y}
                  degree={degree}
                  schedule={schedule}
                />
              </li>)
            })}
          </ul>
        </div>
        <div className={cx('robot-list')}>
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
