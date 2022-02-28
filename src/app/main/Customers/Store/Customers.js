import { createEntityAdapter, createSlice, createAsyncThunk, createReducer } from '@reduxjs/toolkit';
import axios from 'axios';

export const setCustomer = createAsyncThunk('customers/data', async (customerData, { dispatch }) => {
	console.log("samjhe",customerData);
	const response = await axios.post('http://localhost:4000/api/v1/create-customer', customerData);
	const data = await response.data;
	return data;
});
export const getCustomer = createAsyncThunk('customers/get/data', async () => {
	console.log('ho raha h');
	const response = await axios.get('http://localhost:4000/api/v1/view-customer');
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
