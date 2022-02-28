import React from 'react';
import { MyInput, MySelect, MyTextField } from '../MyFromElement/MyFormElement';

import { useState } from 'react';
import MyAlertClose from '../MyFromElement/MyAlertClose';
import { useDispatch, useSelector } from 'react-redux';
import { setCustomer } from './Store/Customers';
import { useEffect } from 'react';

function AddCustomer() {
	const [alertmsg, setAlertmsg] = useState(false);
	const dispatch = useDispatch();
	const customer = useSelector(state => state.getCustomer.customer);
	useEffect(() => {
		if (customer.status === 'success') {
			alert('Customer Created');
			document.querySelector('#addcustomer').reset();
		}
		console.log('ok done',customer);
	}, [customer]);
	function formSubmit(e) {
		e.preventDefault();
		let myForm = document.querySelector('#addcustomer');
		if (myForm.checkValidity()) {
			let formData = new FormData(myForm);
			let allFormData = {};
			for (const data of formData.entries()) {
				data[0] = data[0].replace(/ /g, '');
				// console.log(data[0], data[1]);
				let newdata = { [data[0]]: data[1] };
				allFormData = { ...allFormData, ...newdata };
			}
			dispatch(setCustomer(allFormData));
		} else {
			setAlertmsg(true);
			setTimeout(() => {
				setAlertmsg(false);
			}, 5000);
			alert('* indicates required fields');
		}
	}
	return (
		<>
			<MyAlertClose msg="* indicates required fields" action={alertmsg} />
			<div className="shadow-6 lg:w-1/2 sm:w-full ml-auto mr-auto p-20">
				<h2 className="text-center border-b-1 m-10">Add Customer </h2>
				<div className="flex justify-between bg-black text-grey-50 p-10 rounded-6 bg-opacity-75 m-10">
					<h4>Customer Details:</h4>
					<i className="text-10">
						<b className="text-red">*</b>indicates required fields
					</i>
				</div>
				<form id="addcustomer">
					<div className="flex flex-col">
						<MyInput name="Customer Name" use={true} />
						<MyInput name="aditya" use={true}/>
						<MySelect name="Parent Customer" data={[]} />
						<MyInput name="Account Manager" />
						<MyTextField name="Address" />
						<MyInput name="City" />
						<MyInput name="Email Id" />
						<MyInput name="Telephone 1" />
						<MyInput name="Telephone 2" />
						<MyInput name="Postal Code" />
						<MyInput name="Web URL" />
						<MySelect name="Job Sector" />
						<MyInput name="Segment" />
						<MyInput name="Skill" />
						<MyInput name="Internal Customer Code" />
						<MyTextField name="Internal Info" />
						<MyTextField name="Customer Profile" />
						<MyInput name="Guarantee Period" />
						<MyInput name="Payout Percentage" />
						<MyInput name="Payout Terms" />
						<MyInput name="Customer Contact" />
						<input
							type="submit"
							value="Create"
							onClick={formSubmit}
							className="p-10 cursor-pointer m-10 "
						/>
					</div>
				</form>
			</div>
		</>
	);
}

export default AddCustomer;
