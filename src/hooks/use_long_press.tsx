import { useState, useCallback, useRef } from 'react';

type LongPressProps = {
  ms?: number;
  callback?: () => void;
};
const useLongPress = ({ ms = 500, callback }: LongPressProps) => {
  const [isLongPressed, setIsLongPressed] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout>();

  const handleMouseDown = useCallback(() => {
    timeoutRef.current = setTimeout(() => {
      setIsLongPressed(true);
      if (callback) {
        callback();
      }
    }, ms);
  }, [callback, ms]);

  const handleMouseUp = useCallback(() => {
    clearTimeout(timeoutRef.current);
    setIsLongPressed(false);
  }, []);

  return {
    isLongPressed,
    onMouseDown: handleMouseDown,
    onMouseUp: handleMouseUp,
  };
};

export default useLongPress;
