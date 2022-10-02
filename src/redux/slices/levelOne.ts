import { createSlice } from '@reduxjs/toolkit';
import { LevelOneState } from 'src/@types/levelOne';
// ! import axios from custom axios instance need to be created
// ! import dispatch from store.ts

const initialState: LevelOneState = {
    isLoading: false,
    error: null,
    firstSwitch:{
        on: false,
        x: null,
        y: null
    },
    secondSwitch:{
        on: false,
        x: null,
        y: null
    },
    thirdSwitch:{
        on: false,
        x: null,
        y: null
    },
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
            state.firstSwitch.on = true;
        },
        firstSwitchOff: (state) => {
            state.firstSwitch.on = false;
        },
        setFirstSwitchXY: (state, action) => {
            state.firstSwitch.x = action.payload.x;
            state.firstSwitch.y = action.payload.y;
        },
        secondSwitchOn: (state) => {
            state.secondSwitch.on = true;
        },  
        secondSwitchOff: (state) => {
            state.secondSwitch.on = false;
        },
        setSecondSwitchXY: (state, action) => {
            state.secondSwitch.x = action.payload.x;
            state.secondSwitch.y = action.payload.y;
        },
        thirdSwitchOn: (state) => {
            state.thirdSwitch.on = true;
        },
        thirdSwitchOff: (state) => {
            state.thirdSwitch.on = false;
        },
        setThirdSwitchXY: (state, action) => {
            state.thirdSwitch.x = action.payload.x;
            state.thirdSwitch.y = action.payload.y;
        },
    },
});

export default slice.reducer;

export const {
    startLoading,
    hasError,
    firstSwitchOn,
    firstSwitchOff,
    setFirstSwitchXY,
    secondSwitchOn,
    secondSwitchOff,
    setSecondSwitchXY,
    thirdSwitchOn,
    thirdSwitchOff,
    setThirdSwitchXY,
} = slice.actions;

// ! add async thunks here

