import React, { forwardRef } from 'react';
import PropTypes from 'prop-types'
import { PixiComponent, useApp } from '@inlet/react-pixi';
import { Viewport as PixiViewport } from "pixi-viewport";
import * as PIXI from "pixi.js";

const brush = new PIXI.Graphics();
brush.beginFill(0x000000);
brush.drawCircle(0, 0, 50);
brush.endFill();

const PixiComponentViewport = PixiComponent("ViewPort", {
  create: (props) => {
    const viewport = new PixiViewport({
      screenWidth: props.width,
      screenHeight: props.height,
      worldWidth: props.worldWidth,
      worldHeight: props.worldHeight,
      ticker: props.app.ticker,
      interaction: props.app.renderer.plugins.interaction,
      passiveWheel: false,
      stopPropagation: true,
    });

    viewport.on('moved', (event) => {
      props.app.onMoved(event);
    });
    viewport.on('clicked', (event) => {
      props.app.onClickCanvas(event);
    });
    viewport.on('zoomed-end', (event) => {
      props.app.onZoomEndCanvas(event);
    });
    viewport.on('wheel', (event) => {
      props.app.onWheel(event);
    });
    viewport.on('wheel-scroll', (event) => {
      props.app.onWheelScroll(event);
    });
    return viewport;
  },
  didMount: (instance, parent) => {
    console.log('did', instance, parent);
    // instance.drag().pinch().wheel().clamp({ direction: 'all' }).clampZoom({ minScale: 1, maxScale: 10 });
  },
  applyProps: (instance, oldProps, newProps) => {
    console.log('applyProps', instance, oldProps, newProps);
    if (oldProps.drawMode !== newProps.drawMode) {
      instance.drag({ pressDrag: !newProps.drawMode }).pinch().wheel().clamp({ direction: 'all' }).clampZoom({ minScale: 1, maxScale: 10 });
    }
  },
});


const PixiViewPortComponent = forwardRef(({
  drawMode,
  width,
  height,
  dataWidth,
  dataHeight,
  children,
  onZoomEndCanvas,
  onClickCanvas,
  onWheel,
  onWheelScroll,
  onMoved,
}, ref) => {
  const app = useApp();
  app.onClickCanvas = onClickCanvas;
  app.onZoomEndCanvas = onZoomEndCanvas;
  app.onWheel = onWheel;
  app.onWheelScroll = onWheelScroll;
  app.onMoved = onMoved;
  app.drawMode = drawMode;
  return <PixiComponentViewport
    ref={ref}
    app={app}
    width={width}
    height={height}
    worldWidth={width}
    worldHeight={height}
    drawMode={drawMode}
  >
    {children}
  </PixiComponentViewport>;
});

PixiViewPortComponent.propTypes = {
  drawMode: PropTypes.bool,
  width: PropTypes.number,
  height: PropTypes.number,
  dataWidth: PropTypes.number,
  dataHeight: PropTypes.number,
  onClickCanvas: PropTypes.func,
  onZoomEndCanvas: PropTypes.func,
  onWheel: PropTypes.func,
  onWheelScroll: PropTypes.func,
  onMovedEnd: PropTypes.func,
}

PixiViewPortComponent.defaultProps = {
  drawMode: false,
  width: 0,
  height: 0,
  poseData: {},
  laserData: [],
  points: [],
  onClickCanvas: () => { },
  onZoomEndCanvas: () => { },
  onWheel: () => { },
  onWheelScroll: () => { },
  onMoved: () => { },
  onMovedEnd: () => { },
}

export default PixiViewPortComponent;
