import React, { useEffect, useState, useCallback } from 'react';
import CanvasMap from '../components/organisms/CanvasMap';
import {
  useQuery,
  gql
} from "@apollo/client";



const drawMap = ( data, width, height ) => {
  const canvas = document.createElement('canvas');
  const canvas_padding = { top: 0, bottom: 0, left: 0, right: 0 };
  const ctx = canvas.getContext('2d');
  ctx.canvas.width = width + canvas_padding.left + canvas_padding.right;
  ctx.canvas.height = height + canvas_padding.top + canvas_padding.bottom;

  // const cache = {};
  const imageData = ctx.getImageData(0, 0, width, height);
  for (let cell = 0; cell < width * height; cell += 1) {
    // cache[data[cell]] = cache[data[cell]] || [];
    // cache[data[cell]].push(cell);
    let color = [255, 255, 255]; // Unknown Area
    color = (data[cell] >= 0) ? [240, 240, 236] : color; // Movable Area
    color = (data[cell] > 40) ? [255, 255, 255] : color; // Unknown Area
    color = (data[cell] > 70) ? [30, 30, 30] : color; // Unmovable Area
    // color = (data[cell] > 127) ? [30, 30, 30] : color; // Unmovable Area
    imageData.data[cell * 4 + 0] = color[0]
    imageData.data[cell * 4 + 1] = color[1]
    imageData.data[cell * 4 + 2] = color[2]
    imageData.data[cell * 4 + 3] = 255;
  }
  // console.log(cache);
  ctx.putImageData(imageData, canvas_padding.left, canvas_padding.top);
  return canvas.toDataURL();
}


const CanvasMapContainer = () => {

  const points = [{
    name:'asd'
  }];


  const query = gql`
  query ExampleQuery {
    images
  }
  `;

  const { loading, error, data } = useQuery(query);
  if (loading) return <p>Loading...</p>;
  if (error){
    console.log(error);
    return <p>Error :(</p>;
  }
  
  const base64String = new Buffer.from(data.images[8]).toString("ascii");
  const base64String2 = drawMap(data.images[8], 1189,1017);
  console.log(base64String2);
  return (
    <CanvasMap
      canvasWidth={1189}
      canvasHeight={1017}
      dataWidth={1189}
      dataHeight={1017}
      imgData={base64String2}
      points={points}
      scale={1}
    />
  )
}

CanvasMapContainer.defaultProps = {
};

export default React.memo(CanvasMapContainer);
