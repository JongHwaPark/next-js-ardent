import React, { useState } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux'

import { Header } from '../components/organisms';
import { toggleImageSide, toggleRobotList } from '../store/modules/common';

const HeaderContainer = () => {
  const dispatch = useDispatch();

  const handleToggleImageSide = () => {
    dispatch(toggleImageSide());
  };

  const handleToggleRobotList = () => {
    dispatch(toggleRobotList());
  };

  return (
    <Header
      onToggleImageSide={handleToggleImageSide}
      onToggleRobotList={handleToggleRobotList}
    />
  )
}


export default HeaderContainer;