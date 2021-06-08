import { createSlice } from '@reduxjs/toolkit'

export const allArtist = createSlice({
  name: 'artist',
  initialState: {
    list: [],
  },
  reducers: {
addArtists:(state,action)=>{
    console.log(action)  

},
    deleteRow: (state, action) => {
console.log(action)  
    },
  },
})

// Action creators are generated for each case reducer function
export const { deleteRow } = allArtist.actions

export default allArtist.reducer