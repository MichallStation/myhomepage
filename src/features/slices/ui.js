const { createSlice } = require('@reduxjs/toolkit');

export const name = 'ui';
export const LOADING = 'load';
export const PROGRESSING = 'progressing';
export const DONE = 'done';
export const HIDE = 'hide';
export const ERROR = 'error';
export const SHOW = 'show';
export const CLOSE = 'close';

const initialState = {
  progressBar: {
    value: 0,
    status: DONE,
  },
  toast: {
    value: undefined,
    status: CLOSE,
  },
  ball3d: {
    status: LOADING,
  },
  modal: {
    value: {
      title: '',
    },
    status: HIDE,
  },
};

export const uiSlice = createSlice({
  name,
  initialState,
  reducers: {
    progressBarProcess: (state, action) => {
      state.progressBar.value = action.payload;
      state.progressBar.status = PROGRESSING;
    },
    progressBarLoading: (state) => {
      state.progressBar.status = LOADING;
    },
    progressBarDone: (state) => {
      state.progressBar.value = initialState.progressBar.value;
      state.progressBar.status = initialState.progressBar.status;
    },
    toastShow: (state, action) => {
      /** @type {{payload: import('@chakra-ui/react').UseToastOptions}} */
      const { payload } = action;
      state.toast.value = payload;
      state.toast.status = SHOW;
    },
    toastClose: (state) => {
      state.toast.value = undefined;
      state.toast.status = CLOSE;
    },
    ball3dLoading: (state) => {
      // state.toast.value = undefined;
      state.ball3d.status = LOADING;
    },
    ball3dShows: (state) => {
      // state.toast.value = undefined;
      state.ball3d.status = SHOW;
    },
    ball3dDone: (state) => {
      // state.toast.value = undefined;
      state.ball3d.status = DONE;
    },
  },
});

export const {
  progressBarProcess,
  progressBarLoading,
  progressBarDone,
  toastClose,
  toastShow,
  ball3dLoading,
  ball3dDone,
  ball3dShows,
} = uiSlice.actions;
export const selectProgress = (state) => state.ui.progressBar;
export const selectProgressValue = (state) => state.ui.progressBar.value;
export const selectProgressStatus = (state) => state.ui.progressBar.status;
export const selectToast = (state) => state.ui.toast;
export const selectToastValue = (state) => state.ui.toast.value;
export const selectToastStatus = (state) => state.ui.toast.status;
export const selectball3d = (state) => state.ui.ball3d;
export const selectball3dValue = (state) => state.ui.ball3d.value;
export const selectball3dStatus = (state) => state.ui.ball3d.status;

export default uiSlice.reducer;
