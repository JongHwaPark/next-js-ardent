import React, { useEffect, useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { CanvasMap } from '../components/organisms';


const convertImageData = (data) => {
  const base64String = 'data:image/png;base64,' + new Buffer.from(data).toString("base64");
  return base64String; 
}

const CanvasMapContainer = (props) => {
  const { 
    imageList,
    activeIndex,
  } = useSelector((store) => ({
    imageList: store.images.list,
    activeIndex: store.images.activeIndex
  }));
  // 'data:image/png;base64,'
  const imageData = imageList[activeIndex];
  console.log(imageData);
  if(!imageData) return 'Loading...';
  return (
    <CanvasMap
      canvasWidth={1189}
      canvasHeight={1017}
      dataWidth={imageData.width}
      dataHeight={imageData.height}
      imgData={convertImageData(imageData.data)}
      // points={points}
      scale={1}
    />
  )
}

CanvasMapContainer.defaultProps = {
};

export default React.memo(CanvasMapContainer);
