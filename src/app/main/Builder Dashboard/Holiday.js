import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MyInput, MyInputDate } from '../MyFromElement/MyFormElement';
import { getHoliday, setHoliday } from './Store/Builder';
function Holiday() {
	const dispatch = useDispatch();
	const { Holiday } = useSelector(state => state.Holiday);
	useEffect(() => {
		dispatch(getHoliday());
	}, [dispatch]);
	useEffect(() => {
		if (Holiday.status === 'success') {
			document.querySelector('#add-holiday').reset();
		}
	}, [Holiday]);
	function AddHoliday(e) {
		e.preventDefault();
		let myForm = document.querySelector('#add-holiday');
		if (myForm.checkValidity()) {
			let formData = new FormData(myForm);
			let allFormData = {};
			for (const data of formData.entries()) {
				data[0] = data[0].replace(/ /g, '');
				// console.log(data[0], data[1]);
				if (data[0] == 'HolidayDate') {
					let d1 = new Date(data[1]);
					let datanumber = d1.getTime();
					let newdata = { [data[0]]: datanumber };
					allFormData = { ...allFormData, ...newdata };
				} else {
					let newdata = { [data[0]]: data[1] };
					allFormData = { ...allFormData, ...newdata };
				}
			}
			// console.log('form datas', allFormData);
			dispatch(setHoliday(allFormData));
		} else {
			alert('* indicates required fields');
		}
	}
	function convertDate(n) {
		let date = new Date(n);
		return date.getDate().toString() + '-' + date.getMonth().toString() + '-' + date.getFullYear().toString();
	}
	return (
		<>
			<form id="add-holiday">
				<div className="flex justify-evenly items-center">
					<MyInputDate name="Holiday Date" use={true} />
					<MyInput name="Holiday Name" use={true} />
					<span className="">
						<button
							onClick={AddHoliday}
							className="p-10 bg-grey-900 text-white hover:bg-white hover:text-grey-900 rounded-6"
						>
							Submit
						</button>
					</span>
				</div>
			</form>
			{Holiday?.status === 'success' ? (
				<>
					<table>
						<thead>
							<tr>
								<th>Holiday Date (dd-mm-yy)</th>
								<th>Name</th>
							</tr>
						</thead>
						<tbody>
							{Holiday !== null &&
								Holiday?.list?.Holiday?.map((d, i) => (
									<tr key={i}>
										<td>{convertDate(d.HolidayDate)}</td>
										<td>{d.HolidayName}</td>
									</tr>
								))}
						</tbody>
					</table>
				</>
			) : (
				'Loading....'
			)}
		</>
	);
}

export default Holiday;
