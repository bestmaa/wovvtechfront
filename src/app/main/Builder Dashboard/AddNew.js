import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MyInput, MyInputDate } from '../MyFromElement/MyFormElement';
import './Addnew.css';
import { getHoliday, setBuilderMember } from './Store/Builder';
import { uuid } from 'uuidv4';
function $$(sel) {
	return document.querySelector(sel);
}
function AddNew() {
	const dispatch = useDispatch();
	const [ActiveBtn, setActiveBtn] = useState(false);
	const [Active, setActive] = useState(false);
	const [TotleDay, setTotleDay] = useState(null);
	const [Weekend, setweekend] = useState(null);
	const [Workingday, setWorkingday] = useState(null);
	const [Holidaycount, setHolidaycount] = useState(null);
	const [HolidayList, setHolidayList] = useState([]);
	const { Holiday, Member } = useSelector(state => state.Builder);
	useEffect(() => {
		dispatch(getHoliday());
	}, [dispatch]);
	useEffect(() => {
		if (Member.status === 'success') {
			document.querySelector('#Addnew').reset();
			setActiveBtn(false);
			setActive(false);
		}
		if (Member.status === 'failed') {
			setActiveBtn(false);
		}
	}, [Member]);
	function godate(e) {
		let date1 = document.getElementsByName('Allocation From')[0].value;
		let date2 = document.getElementsByName('Allocation To')[0].value;
		if (date1 && date2) {
			setActive(true);
			let d1 = new Date(date1);
			let d2 = new Date(date2);
			if (d1 < d2) {
				var difference = Math.abs(d2 - d1);
				let totleDay = difference / (1000 * 3600 * 24) + 1;
				let Weekenday = 0;
				let WorkingDay = 0;
				let HolidayCount = 0;
				for (var i = 0; i < totleDay; i++) {
					let x = new Date(d1.getTime() + 86400000 * i);
					let p = Holiday.list.data.filter(d => d.attributes.HolidayDate == x.getTime());
					if (x.getDay() == 6 || x.getDay() == 0) {
						Weekenday += 1;
					} else if (p.length > 0) {
						HolidayCount += 1;
						setHolidayList(HolidayList => [...HolidayList, ...p]);
					} else {
						WorkingDay += 1;
					}
				}
				setTotleDay(totleDay);
				setWorkingday(WorkingDay);
				setweekend(Weekenday);
				setHolidaycount(HolidayCount);
				console.log(totleDay, WorkingDay, Weekenday);
			}
		}
	}
	function convertDate(n) {
		let date = new Date(n);
		return date.getDate().toString() + '-' + date.getMonth().toString() + '-' + date.getFullYear().toString();
	}
	function showAndhide() {
		if ($$('#showAndHide').style.display === 'block') {
			$$('#showAndHide').style.display = 'none';
		} else {
			$$('#showAndHide').style.display = 'block';
		}
	}
	function formSubmit(e) {
		e.preventDefault();
		let myForm = document.querySelector('#Addnew');
		if (myForm.checkValidity()) {
			setActiveBtn(true);
			let formData = new FormData(myForm);
			formData.set('TotleAllocationDays', Workingday);
			formData.set('TotleDay', TotleDay);
			formData.set('UID', uuid());
			let jsonfile = { data: [] };
			let allFormData = { WorkingHoursRecord: jsonfile };
			for (const data of formData.entries()) {
				data[0] = data[0].replace(/ /g, '');
				// console.log(data[0], data[1]);
				let newdata = { [data[0]]: data[1] };
				allFormData = { ...allFormData, ...newdata };
			}
			let senddata = { data: allFormData };
			dispatch(setBuilderMember({ data: senddata, method: 'POST' }));
			// console.log(allFormData);
		} else {
			alert('* indicates required fields');
		}
	}
	return (
		<div className="shadow-4 w-3/4 ml-auto mr-auto p-10">
			<form id="Addnew">
				<MyInput name="Member ID" width="300px" use={true} />
				<MyInput name="Allocated Members" width="300px" use={true} />
				<MyInput name="Billing Cycle" width="300px" use={true} />
				<MyInput name="Skill" width="300px" use={true} />
				<MyInput name="Project Name" width="300px" use={true} />
				<MyInput name="CPE" width="300px" use={true} />
				<MyInput name="CPE Email id" width="300px" use={true} />
				<MyInputDate name="Allocation From" width="300px" use={true} onInput={godate} />
				<MyInputDate name="Allocation To" width="300px" use={true} onInput={godate} />
				{/* how and hide holiday data */}
				<div id="showAndHide" className="showAndHide">
					{HolidayList.length > 0 ? (
						<>
							<table>
								<tbody>
									{HolidayList?.map((d, i) => (
										<tr key={i}>
											<td>{convertDate(Number(d.attributes.HolidayDate))}</td>
											<td>{d.attributes.HolidayName}</td>
										</tr>
									))}
								</tbody>
							</table>
							<span className="x" onClick={showAndhide}>
								X
							</span>
						</>
					) : (
						'No Data'
					)}
				</div>
				{/* totle working day */}
				{Active && (
					<div className="flex justify-center">
						<table>
							<thead>
								<tr>
									<th>Totle Day</th>
									<th>Totle Weekend</th>
									<th>Holiday</th>
									<th>Totle Working Day</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>{TotleDay ? TotleDay : '0'}</td>
									<td>{Weekend ? Weekend : '0'}</td>
									<td>
										{Holidaycount ? (
											<b className="b" onClick={showAndhide}>
												{Holidaycount}
											</b>
										) : (
											'0'
										)}
									</td>
									<td>{Workingday ? Workingday : '0'}</td>
								</tr>
							</tbody>
						</table>
					</div>
				)}
				{/* end working data */}
				<div className="flex justify-center">
					<button
						disabled={ActiveBtn}
						className="p-10 m-10 bg-cyan-600 rounded-4 hover:bg-cyan-900 hover:text-white"
						onClick={formSubmit}
					>
						{!ActiveBtn ? 'Create' : 'Waiting...'}
					</button>
					<button className="p-10 m-10 bg-red-400 rounded-4 hover:bg-red-900 hover:text-white">Cancel</button>
				</div>
			</form>
		</div>
	);
}

export default AddNew;
