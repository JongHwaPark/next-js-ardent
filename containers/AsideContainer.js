import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { setActiveIndex } from '../store/modules/images';
import { Aside } from '../components/organisms';

const AsideContainer = () => {
  const dispatch = useDispatch();
  const { 
    active,
    imageList,
    activeIndex,
  } = useSelector((store) => ({
    active: store.common.ui.openSideBar,
    imageList: store.images.list,
    activeIndex: store.images.activeIndex
  }));

  const handleClickImageList = useCallback((image, index) => {
    console.log(image);
    dispatch(setActiveIndex(index));
  }, []);

  return (
    <Aside
      active={active}
      imageList={imageList}
      onClickImageList={handleClickImageList}
      activeIndex={activeIndex}
    />
  )
}


export default AsideContainer;