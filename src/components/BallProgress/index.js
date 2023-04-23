import { Progress } from '@chakra-ui/react';
import React from 'react';
import { useSelector } from 'react-redux';
import {
  DONE,
  LOADING,
  selectProgressStatus,
  selectProgressValue,
} from '@/features/slices/ui';

function BallProgress(props) {
  const value = useSelector(selectProgressValue);
  const status = useSelector(selectProgressStatus);
  return (
    <Progress
      className="progress-bar"
      role="progressbar"
      size="xs"
      colorScheme="seconds"
      borderRadius="md"
      isIndeterminate={status === LOADING}
      // boxShadow="0 0 2x 4px rgba(0,0,0,0.2)"
      style={{ boxShadow: '0 0px 2px rgba(0,0,0,0.1)' }}
      hidden={status === DONE}
      value={value}
      {...props}
    />
  );
}

export default BallProgress;
