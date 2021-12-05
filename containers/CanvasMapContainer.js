import React, { useEffect, useState, useCallback } from 'react';
import CanvasMap from '../components/organisms/CanvasMap';

const CanvasMapContainer = () => {
  const points = [{
    name:'asd'
  }];
  return (
    <CanvasMap
      points={points}
    />
  )
}

CanvasMapContainer.defaultProps = {
};

export default React.memo(CanvasMapContainer);
