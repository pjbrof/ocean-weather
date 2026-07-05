import { createSlice } from '@reduxjs/toolkit'

import buoyData from "../../../data/buoy.json";
import shipData from "../../../data/ship-obs.json";

const initialState = {
  active: [],
  buoys: buoyData,
  ships: shipData,
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    addActive: (state, action) => {
      const id = action.payload;
      const index = state.active.indexOf(id);

      if (index === -1) {
        state.active.push(id);
      } else {
        state.active.splice(index, 1);
      } 
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
});

export const { addActive, incrementByAmount } = filterSlice.actions

export default filterSlice.reducer