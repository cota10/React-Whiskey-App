import { createSlice } from '@reduxjs/toolkit';

const rootSlice = createSlice({
    name: "root",
    initialState: {
        name: 'Name',
        price: 'Price',
        type_of_whiskey: 'Type of Whiskey',
    },
    reducers: {
        chooseName: (state, action) => { state.name = action.payload},
        choosePrice: (state, action) => { state.price = action.payload},
        chooseType: (state, action) => { state.type_of_whiskey = action.payload},
        
    }
})

// Export Reducer
export const reducer = rootSlice.reducer;
export const { chooseName, choosePrice, chooseType } = rootSlice.actions;