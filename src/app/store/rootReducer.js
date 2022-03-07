import { combineReducers } from '@reduxjs/toolkit';
import auth from 'app/auth/store';
import fuse from './fuse';
import i18n from './i18nSlice';
import getCustomer from 'app/main/Customers/Store/Store'
import Builder from 'app/main/Builder Dashboard/Store/Store'

const createReducer = asyncReducers =>
	combineReducers({
		auth,
		fuse,
		i18n,
		getCustomer,
		Builder,
		...asyncReducers
	});

export default createReducer;
