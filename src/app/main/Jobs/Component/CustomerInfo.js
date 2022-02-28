import React from 'react';
import { MyInput, MySelect, MyTextField } from 'app/main/MyFromElement/MyFormElement';
function CustomerInfo() {
	return (
		<>
			<MyTextField name="Customer Contacts" width="300px" />
			<MyInput name="Customer Website Url" width="300px" />
			<MyTextField name="Internal Customer Info" width="300px" />
			<MyTextField name="Customer Profile" width="300px" />
			<div>
				<b className="p-8 mt-10 mb-10">Candidate Billing</b>
				<select className="p-8 mt-10 mb-10 ml-128 ">
					<option>Single</option>
				</select>
				<input type="number" className="p-8 mt-10 mb-10 ml-10" defaultValue={1} />
				<b className="p-8 mt-10 mb-10">Times</b>
			</div>
			<MySelect name="Rate Slabs"width="300px" />
			<MyTextField name="Payout Terms" width="300px"/>
			<MyInput name="Guarantee Period" width="300px" />
			<div className="flex justify-center">
				<button className="p-10 m-10 bg-cyan-600 rounded-4 hover:bg-cyan-900 hover:text-white">Create</button>
				<button className="p-10 m-10 bg-red-400 rounded-4 hover:bg-red-900 hover:text-white">Cancel</button>
			</div>
		</>
	);
}

export default CustomerInfo;
