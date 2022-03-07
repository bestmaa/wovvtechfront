import { createEntityAdapter, createSlice, createAsyncThunk, createReducer } from '@reduxjs/toolkit';
import { baseUrl } from 'app/main/ApiUri';
import axios from 'axios';

export const setCustomer = createAsyncThunk('customers/data', async (customerData, { dispatch }) => {
	console.log("samjhe",customerData);
	const response = await axios.post(`${baseUrl}create-customer`, customerData);
	const data = await response.data;
	return data;
});
export const getCustomer = createAsyncThunk('customers/get/data', async () => {
	console.log('ho raha h');
	const response = await axios.get(`${baseUrl}view-customer`);
	const data = await response.data;
	// debugger
	return data;
});
const CustomerSlice = createSlice({
	name: 'customer',
	initialState: {},
	extraReducers: {
		[setCustomer.pending]: (state, action) => {
			state.status = 'loading';
		},
		[setCustomer.fulfilled]: (state = {}, action) => {
			state.list = action.payload;
			state.status = 'success';
		},
		[setCustomer.rejected]: (state, action) => {
			state.status = 'failed';
		},
		[getCustomer.pending]: (state, action) => {
			state.status = 'loading';
		},
		[getCustomer.fulfilled]: (state = {}, action) => {
			state.list = action.payload;
			state.status = 'success';
		},
		[getCustomer.rejected]: (state, action) => {
			state.status = 'failed';
		}
	}
});

export const customer = CustomerSlice.reducer;
// export default customerRs
