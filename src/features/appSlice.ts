import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface AppState {
  channelId: string | null
  channelName: string | null
}

const initialState: AppState = {
  channelId: null,
  channelName: null,
}

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setChannelInfo: (
      state,
      action: PayloadAction<{ id: string; name: string }>,
    ) => {
      state.channelId = action.payload.id
      state.channelName = action.payload.name
    },
  },
})

export const { setChannelInfo } = appSlice.actions

export const selectChannelId = (state: { app: AppState }) => state.app.channelId
export const selectChannelName = (state: { app: AppState }) =>
  state.app.channelName

export default appSlice.reducer
