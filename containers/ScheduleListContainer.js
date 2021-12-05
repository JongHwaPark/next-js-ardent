import React from 'react';
import { useSelector } from 'react-redux'

import { ScheduleList } from '../components/organisms';

const ScheduleListContainer = () => {
  const { active } = useSelector((store) => ({
    active: store.common.ui.openRobotList
  }));

  return (
    <ScheduleList
      active={active}
    />
  )
}


export default ScheduleListContainer;