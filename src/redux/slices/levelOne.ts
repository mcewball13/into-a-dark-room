import { createSlice } from '@reduxjs/toolkit';
import { LevelOneState } from 'src/@types/levelOne';
// ! import axios from custom axios instance need to be created
// ! import dispatch from store.ts

const initialState: LevelOneState = {
    isLoading: false,
    error: null,
    firstSwitch: false,
    secondSwitch: false,
    thirdSwitch: false,
};

const slice = createSlice({
    name: 'levelOne',
    initialState,
    reducers: {
        // ! add reducers here
        startLoading: (state) => {
            state.isLoading = true;
        },
        hasError: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        firstSwitchOn: (state) => {
            state.firstSwitch = true;
        },
        firstSwitchOff: (state) => {
            state.firstSwitch = false;
        },
        secondSwitchOn: (state) => {
            state.secondSwitch = true;
        },  
        secondSwitchOff: (state) => {
            state.secondSwitch = false;
        },
        thirdSwitchOn: (state) => {
            state.thirdSwitch = true;
        },
        thirdSwitchOff: (state) => {
            state.thirdSwitch = false;
        },
    },
});

export default slice.reducer;

export const {
    startLoading,
    hasError,
    firstSwitchOn,
    firstSwitchOff,
    secondSwitchOn,
    secondSwitchOff,
    thirdSwitchOn,
    thirdSwitchOff,
} = slice.actions;

// ! add async thunks here

