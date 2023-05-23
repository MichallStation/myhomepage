import { motion } from 'framer-motion';
import React, { useCallback } from 'react';

const envs = {
  eventedObserver: undefined,
  isEvented: false,
  latest: '',
};

/** @param {import("framer-motion").MotionProps} props */
function MotionDiv({
  onNavigateLeft = () => {},
  onNavigateRight = () => {},
  onNavigateUp = () => {},
  onNavigateDown = () => {},
  // onNavigateExit = () => {},
  ...props
}) {
  const {
    onDragEnd = () => {},
    onKeyUp = () => {},
    onWheel = () => {},
    onDragLeft = onNavigateLeft,
    onDragRight = onNavigateRight,
    onDragUp = onNavigateUp,
    onDragDown = onNavigateDown,
    // onArrowLeft = onNavigateLeft,
    // onArrowRight = onNavigateRight,
    // onArrowUp = onNavigateUp,
    // onArrowDown = onNavigateDown,
    onWheelLeft = onNavigateLeft,
    onWheelRight = onNavigateRight,
    onWheelUp = onNavigateUp,
    onWheelDown = onNavigateDown,
    // onExit = onNavigateExit,
    ...restProps
  } = props;
  // const ref = useRef();

  // useEffect(() => {
  //   /** @type {{current: HTMLElement}} */
  //   const { current } = ref;
  //   if (!current) return;

  //   const handleMouseDown = (e) => {
  //     console.log(e)
  //   };
  //   current.addEventListener('mousedown', handleMouseDown);
  //   // eslint-disable-next-line consistent-return
  //   return () => {
  //     current.removeEventListener('mousedown', handleMouseDown);
  //   };
  // }, []);

  const handleDetectKey = useCallback(
    /** @param {KeyboardEvent} e */
    (e) => {
      onKeyUp(e);
      console.log(e.key);
    },
    [onKeyUp],
  );

  const handleDetectTrackpad = useCallback(
    /** @param {WheelEvent} e */
    (e) => {
      if (envs.eventedObserver) {
        clearTimeout(envs.eventedObserver);
        envs.eventedObserver = undefined;
      }
      envs.eventedObserver = setTimeout(() => {
        envs.isEvented = false;
      }, 30);

      if (envs.isEvented) return;

      const { deltaX: x, deltaY: y } = e;
      const X = Math.abs(x);
      const Y = Math.abs(y);
      if (X > Y) {
        if (x >= 0) {
          // if (envs.latest === 'right' && envs.isEvented) return;
          onWheelRight(e);
          envs.latest = 'right';
        } else {
          // if (envs.latest === 'left' && envs.isEvented) return;
          onWheelLeft(e);
          envs.latest = 'left';
        }
      } else {
        // eslint-disable-next-line no-lonely-if
        if (y >= 0) {
          // if (envs.latest === 'down' && envs.isEvented) return;
          onWheelDown(e);
          envs.latest = 'down';
        } else {
          // if (envs.latest === 'down' && envs.isEvented) return;
          onWheelUp(e);
          envs.latest = 'up';
        }
      }
      envs.isEvented = true;
    },
    [onWheelDown, onWheelLeft, onWheelRight, onWheelUp],
  );

  const handleDetectWheel = useCallback(
    /** @param {WheelEvent} e */
    // eslint-disable-next-line consistent-return
    (e) => {
      onWheel(e);
      // console.log(
      //   `x: ${e.deltaX} ${Number.isInteger(e.deltaX)}; y: ${
      //     e.deltaY
      //   } ${Number.isInteger(e.deltaY)};`,
      // );
      const isTrackpad =
        Number.isInteger(e.deltaX) && Number.isInteger(e.deltaY);
      if (isTrackpad) return handleDetectTrackpad(e);

      const { deltaX: x, deltaY: y } = e;
      const X = Math.abs(x);
      const Y = Math.abs(y);
      if (X > Y) {
        if (x >= 0) onWheelRight(e);
        else onWheelLeft(e);
      } else {
        // eslint-disable-next-line no-lonely-if
        if (y >= 0) onWheelDown(e);
        else onWheelUp(e);
      }
    },
    [
      handleDetectTrackpad,
      onWheel,
      onWheelDown,
      onWheelLeft,
      onWheelRight,
      onWheelUp,
    ],
  );

  const handleDetectDrag = useCallback(
    /** @param {import('framer-motion').PanInfo} info */
    (e, info) => {
      onDragEnd(e, info);
      const { x, y } = info.offset;
      const X = Math.abs(x);
      const Y = Math.abs(y);

      if (X > Y) {
        if (x >= 0) onDragRight(e, info);
        else onDragLeft(e, info);
      } else {
        // eslint-disable-next-line no-lonely-if
        if (y >= 0) onDragDown(e, info);
        else onDragUp(e, info);
      }
    },
    [onDragDown, onDragEnd, onDragLeft, onDragRight, onDragUp],
  );
  return (
    <motion.div
      {...restProps}
      onDragEnd={handleDetectDrag}
      onKeyUp={handleDetectKey}
      onWheel={handleDetectWheel}
    />
  );
}

export default MotionDiv;
