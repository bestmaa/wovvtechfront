import React from 'react';
import { MyInput, MySelect, MyTextField } from 'app/main/MyFromElement/MyFormElement';
function Status() {
	return (
		<>
			<MyInput name="Assigned Suppliers" width="300px" />
			<MySelect name="Referral Bounty" width="300px" />
			<MyInput name="Scheduled Close On" width="300px" />
			<div className="flex justify-center">
				<button className="p-10 m-10 bg-cyan-600 rounded-4 hover:bg-cyan-900 hover:text-white">Create</button>
				<button className="p-10 m-10 bg-red-400 rounded-4 hover:bg-red-900 hover:text-white">Cancel</button>
			</div>
		</>
	);
}

export default Status;
