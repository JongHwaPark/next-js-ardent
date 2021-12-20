import React from 'react'
import type { NextPage } from 'next'
import classNames from 'classnames/bind';
import styles from './RobotList.module.scss'
import { PageTitle, RobotStatus, RobotSchedule } from '../../atoms';
import queries from '../../../services/dataCollector/queries';
import { useSubscription } from '@apollo/react-hooks';

const cx = classNames.bind(styles);

const RobotList: NextPage = ({
  active,
}:any) => {
  const { loading, error, data } = useSubscription(queries['robots']);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  return (
    <div className={cx('schedule-list-wrapper')}>
      <div className={cx('schedule-list-content', {
        active:active
      })}>
        <div className={cx('robot-list')}>
          <PageTitle>온라인</PageTitle>
          <ul>
            {data.robots.map((robot, index) => {
              const { schedule, pose: { x,y,degree}  } = robot.status;
              return (<li key={index}>
                <div className={cx('point-wrapper')}>
                  <RobotStatus 
                    name={robot.name}
                    x={x}
                    y={y}
                    degree={degree}
                  />
                  <div className={cx('schedule-wrapper')}>
                  { schedule && schedule.map((data, idx) => (
                    <RobotSchedule
                      x={data.x}
                      y={data.y}
                      degree={data.degree}
                    />
                  )) }
                  </div>
                </div>
              </li>)
            })}
          </ul>
        </div>
        <div className={cx('robot-list')}>
          <PageTitle>오프라인</PageTitle>
          <ul>
            <li></li>
          </ul>

        </div>
      </div>
    </div>
  );
};

export default React.memo(RobotList);
