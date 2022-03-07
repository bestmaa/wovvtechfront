import { combineReducers } from '@reduxjs/toolkit';
import { Holiday, Member, GetMember, Hours } from './Builder';
const reducer = combineReducers({
	Holiday,
	Member,
	GetMember,
	Hours
});

export default reducer;
