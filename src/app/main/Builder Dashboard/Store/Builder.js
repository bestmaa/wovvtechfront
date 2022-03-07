import { createEntityAdapter, createSlice, createAsyncThunk, createReducer } from '@reduxjs/toolkit';
import { baseUrl, baseUrl1 } from 'app/main/ApiUri';
import axios from 'axios';
export const setHoliday = createAsyncThunk('holiday/data', async (holidayData, { dispatch }) => {
	const response = await axios.post(`${baseUrl}/holidays`, holidayData);
	const data = await response.data;
	return data;
});
export const hoursUpdate = createAsyncThunk('hours/data', async (hoursData, { dispatch }) => {
	const response = await axios.post(`${baseUrl}/working-hours`, hoursData);
	const data = await response.data;
	return data;
});
export const getHoliday = createAsyncThunk('holidays/get/data', async () => {
	const response = await axios.get(`${baseUrl}/holidays`);
	const data = await response.data;
	return data;
});
export const setBuilderMember = createAsyncThunk('member/data', async (memberData) => {
	try {
		if (memberData.method == 'POST') {
			const response = await axios.post(`${baseUrl}/members`, memberData.data);
			const { data } = await response.data;
			return data;
		}
		if (memberData.method == 'PUT') {
			const response = await axios.put(`${baseUrl}/members/${memberData.id}`, memberData.data);
			const { data } = await response.data;
			return data;
		}
	} catch (error) {
		alert(
			error.response.data.error.details.errors[0].path + ' ' + error.response.data.error.details.errors[0].message
		);
		throw new Error(error.response.data.error.details.errors[0].message);
	}
});
export const getMember = createAsyncThunk('member/get/data', async () => {
	const response = await axios.get(`${baseUrl}/members`);
	const data = await response.data;
	return data;
});
const HolidaySlice = createSlice({
	name: 'Holiday',
	initialState: {},
	extraReducers: {
		[setHoliday.pending]: (state, action) => {
			state.status = 'loading';
		},
		[setHoliday.fulfilled]: (state = {}, action) => {
			state.list = { ...state.list, data: [...state.list.data, action.payload.data] };
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

const AddMemberSlice = createSlice({
	name: 'member',
	initialState: {},
	extraReducers: {
		[setBuilderMember.pending]: (state, action) => {
			state.status = 'loading';
		},
		[setBuilderMember.fulfilled]: (state, action) => {
			state.list = action.payload;
			state.status = 'success';
		},
		[setBuilderMember.rejected]: (state, action) => {
			state.status = 'failed';
			state.error = action.payload;
		}
	}
});
const GetMemberSlice = createSlice({
	name: 'getmember',
	initialState: {},
	extraReducers: {
		[getMember.pending]: (state, action) => {
			state.status = 'loading';
		},
		[getMember.fulfilled]: (state, action) => {
			state.list = action.payload;
			state.status = 'success';
		},
		[getMember.rejected]: (state, action) => {
			state.status = 'failed';
		}
	}
});
const hoursSlice = createSlice({
	name: 'hours',
	initialState: {},
	extraReducers: {
		[hoursUpdate.pending]: (state, action) => {
			state.status = 'loading';
		},
		[hoursUpdate.fulfilled]: (state, action) => {
			state.list = action.payload;
			state.status = 'success';
		},
		[hoursUpdate.rejected]: (state, action) => {
			state.status = 'failed';
		}
	}
});

export const Holiday = HolidaySlice.reducer;
export const Member = AddMemberSlice.reducer;
export const GetMember = GetMemberSlice.reducer;
export const Hours = hoursSlice.reducer;
