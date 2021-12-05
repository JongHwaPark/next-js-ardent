import React from 'react';
import { useSelector } from 'react-redux'

import { Aside } from '../components/organisms';

const AsideContainer = () => {
  const { active } = useSelector((store) => ({
    active: store.common.ui.openSideBar
  }));

  return (
    <Aside
      active={active}
    />
  )
}


export default AsideContainer;