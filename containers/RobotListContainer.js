import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'
import { RobotList } from '../components/organisms';

const RobotListContainer = () => {
  const { active } = useSelector((store) => ({
    active: store.common.ui.openRobotList
  }));

  return (    
    <RobotList
      active={active}
    />
  )
}


export default RobotListContainer;