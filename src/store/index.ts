import { configureStore, createSlice } from '@reduxjs/toolkit'

const todoSlice = createSlice({
  name: 'todo',
  initialState: ['Jantar', 'Programar'],

  reducers: {}
})

export const store = configureStore({
  reducer: {
   todo: todoSlice.reducer 
  }
})

export type RootState = ReturnType<typeof store.getState>