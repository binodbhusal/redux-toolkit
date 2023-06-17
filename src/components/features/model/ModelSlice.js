import { createSlice } from "@reduxjs/toolkit"
const initialState = {
    isOpen: false,
}
const ModelSlice = createSlice( {
 name: 'modal',
 initialState,
 reducers: {
openModal: (state) => {
    state.isOpen= true
},
closeModal: (state) => {
    state.isOpen = false
},

 }
})

export const {openModal, closeModal} = ModelSlice.actions;
export default ModelSlice.reducer;