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
  blue3d: {
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
    blue3dLoading: (state) => {
      // state.toast.value = undefined;
      state.blue3d.status = LOADING;
    },
    blue3dShows: (state) => {
      // state.toast.value = undefined;
      state.blue3d.status = SHOW;
    },
    blue3dDone: (state) => {
      // state.toast.value = undefined;
      state.blue3d.status = DONE;
    },
  },
});

export const {
  progressBarProcess,
  progressBarLoading,
  progressBarDone,
  toastClose,
  toastShow,
  blue3dLoading,
  blue3dDone,
  blue3dShows,
} = uiSlice.actions;
export const selectProgress = (state) => state.ui.progressBar;
export const selectProgressValue = (state) => state.ui.progressBar.value;
export const selectProgressStatus = (state) => state.ui.progressBar.status;
export const selectToast = (state) => state.ui.toast;
export const selectToastValue = (state) => state.ui.toast.value;
export const selectToastStatus = (state) => state.ui.toast.status;
export const selectblue3d = (state) => state.ui.blue3d;
export const selectblue3dValue = (state) => state.ui.blue3d.value;
export const selectblue3dStatus = (state) => state.ui.blue3d.status;

export default uiSlice.reducer;
