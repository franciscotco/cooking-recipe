import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

import { DEFAULT_LANGUAGE } from "@src/constants/default-language";
import { type LanguageCode } from "@src/intl";

export interface LanguagesState {
  code: LanguageCode;
}

const initialState: LanguagesState = {
  code: DEFAULT_LANGUAGE
};

const slice = createSlice({
  name: "languages",
  initialState,
  reducers: {
    setLanguageCode(state, action: PayloadAction<LanguageCode>) {
      state.code = action.payload;
    }
  }
});

export const { setLanguageCode } = slice.actions;
export default slice.reducer;
