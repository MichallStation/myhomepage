import { useDispatch, useSelector } from 'react-redux';
import {
  DONE,
  LOADING,
  PROGRESSING,
  progressBarDone,
  progressBarLoading,
  progressBarProcess,
  selectProgressStatus,
  selectProgressValue,
} from '../slices/ui';

export default function useProgress() {
  const dispatch = useDispatch();
  const status = useSelector(selectProgressStatus);
  const value = useSelector(selectProgressValue);

  const setProgress = (percent) =>
    status !== PROGRESSING && dispatch(progressBarProcess(percent));
  const setLoading = () => status !== LOADING && dispatch(progressBarLoading());
  const setDone = () => status !== DONE && dispatch(progressBarDone());

  return { setProgress, setDone, setLoading };
}
