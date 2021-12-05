import React from 'react';
import PropTypes from 'prop-types'
import { Sprite } from '@inlet/react-pixi';

const Draggable = ({
  id,
  image,
  x,
  y,
  angle,
  scale,
  onClickPoint,
  onMovePointStart,
  onMovePointEnd,
  disabled = true,
}) => {
  const onDragStart = (event) => {
    if (disabled) return false;
    const sprite = event.currentTarget;
    const viewport = sprite.parent.parent;

    onMovePointStart(id);
    sprite.alpha = 0.5;
    sprite.data = event.data;
    sprite.dragging = true;
    viewport.drag({ pressDrag: false });
  };

  const onDragEnd = (event) => {
    if (disabled) return false;
    const sprite = event.currentTarget;
    const viewport = sprite.parent.parent;

    // if (sprite.dragging) onMovePointEnd(sprite.data.getLocalPosition(viewport));

    sprite.alpha = 1;
    sprite.dragging = false;
    sprite.data = null;
    viewport.drag();
  };

  const onDragMove = (event) => {
    if (disabled) return false;
    const sprite = event.currentTarget;
    if (sprite.dragging) {
      const newPosition = sprite.data.getLocalPosition(sprite.parent);
      sprite.x = newPosition.x;
      sprite.y = newPosition.y;
      onMovePointEnd(newPosition);
    }
  };

  return (
    <Sprite
      image={image}
      x={x}
      y={y}
      anchor={0.5}
      angle={angle}
      interactive
      buttonMode
      scale={scale}
      // click={() => {
      //   onClickPoint(id);
      // }}
      pointerdown={onDragStart}
      pointerup={(e) => {
        onClickPoint(id);
        onDragEnd(e)
      }}
      pointerupoutside={onDragEnd}
      pointermove={onDragMove}
    />
  );
};

Draggable.propTypes = {
  scale: PropTypes.number,
  onMovePointStart: PropTypes.func,
  onMovePointEnd: PropTypes.func,
  disabled: PropTypes.bool,
}

export default Draggable;
