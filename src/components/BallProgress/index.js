import React from 'react';
import { Progress } from '@chakra-ui/react';
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
    status !== DONE && (
      <Progress
        className="progress-bar"
        role="progressbar"
        size="xs"
        colorScheme="secondSolid"
        borderRadius="md"
        left="4px"
        right="4px"
        isIndeterminate={status === LOADING}
        // boxShadow="0 0 2x 4px rgba(0,0,0,0.2)"
        style={{ boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}
        // hidden={status === DONE}
        value={value}
        {...props}
      />
    )
  );
}

export default BallProgress;
