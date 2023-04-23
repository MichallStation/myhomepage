const { createSlice } = require('@reduxjs/toolkit');

export const name = 'ui';
export const LOADING = 'load';
export const PROGRESSING = 'progressing';
export const DONE = 'done';
export const ERROR = 'error';

const initialState = {
  progressBar: {
    value: 0,
    status: DONE,
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
    progressBarLoading: (state, action) => {
      state.progressBar.status = LOADING;
    },
    progressBarDone: (state) => {
      state.progressBar.value = initialState.progressBar.value;
      state.progressBar.status = initialState.progressBar.status;
    },
  },
});

export const { progressBarProcess, progressBarLoading, progressBarDone } =
  uiSlice.actions;
export const selectProgress = (state) => state.ui.progressBar;
export const selectProgressValue = (state) => state.ui.progressBar.value;
export const selectProgressStatus = (state) => state.ui.progressBar.status;

export default uiSlice.reducer;
