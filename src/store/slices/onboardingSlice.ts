import {createSlice} from '@reduxjs/toolkit';
import {OnboardingType} from '@types';

const initialState: OnboardingType = {
  isOnboarding: true,
};

const onboardingSlice = createSlice({
  name: 'onboarding',
  initialState,
  reducers: {
    setOnboardingStatus: (state, action) => {
      state.isOnboarding = action.payload;
    },
  },
});

export const {setOnboardingStatus} = onboardingSlice.actions;

export default onboardingSlice.reducer;
