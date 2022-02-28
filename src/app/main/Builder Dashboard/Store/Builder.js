import { createEntityAdapter, createSlice, createAsyncThunk, createReducer } from '@reduxjs/toolkit';
import axios from 'axios';
export const setHoliday = createAsyncThunk('holiday/data', async (holidayData, { dispatch }) => {
	const response = await axios.post('http://localhost:4000/api/v1/create-holiday', holidayData);
	const data = await response.data;
	return data;
});
export const getHoliday = createAsyncThunk('holidays/get/data', async () => {
	const response = await axios.get('http://localhost:4000/api/v1/all-view-holiday');
	const data = await response.data;
	// debugger
	return data;
});
const HolidaySlice = createSlice({
	name: 'customer',
	initialState: {},
	extraReducers: {
		[setHoliday.pending]: (state, action) => {
			state.status = 'loading';
		},
		[setHoliday.fulfilled]: (state = {}, action) => {
			console.log('dddddddddddd',action);
			state.list = { ...state.list, Holiday: [...state.list.Holiday, action.payload.Holiday] };
			state.status = 'success';
		},
		[setHoliday.rejected]: (state, action) => {
			state.status = 'failed';
		},
		[getHoliday.pending]: (state, action) => {
			state.status = 'loading';
		},
		[getHoliday.fulfilled]: (state = {}, action) => {
			state.list = action.payload;
			state.status = 'success';
		},
		[getHoliday.rejected]: (state, action) => {
			state.status = 'failed';
		}
	}
});

export const Holiday = HolidaySlice.reducer;
