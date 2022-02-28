import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MyInput, MyInputDate } from '../MyFromElement/MyFormElement';
import './Addnew.css';
import { getHoliday } from './Store/Builder';
function $$(sel) {
	return document.querySelector(sel);
}
function AddNew() {
	const dispatch = useDispatch();
	const [Active, setActive] = useState(false);
	const [TotleDay, setTotleDay] = useState(null);
	const [Weekend, setweekend] = useState(null);
	const [Workingday, setWorkingday] = useState(null);
	const [Holidaycount, setHolidaycount] = useState(null);
	const [HolidayList, setHolidayList] = useState([]);
	const { Holiday } = useSelector(state => state.Holiday);
	useEffect(() => {
		dispatch(getHoliday());
	}, [dispatch]);
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
					let p = Holiday.list.Holiday.filter(d => d.HolidayDate == x.getTime());
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
	return (
		<div className="shadow-4 w-3/4 ml-auto mr-auto p-10">
			<MyInput name="Member ID" width="300px" use={true} />
			<MyInput name="Allocated Members" width="300px" use={true} />
			<MyInput name="Billing Cycle" width="300px" use={true} />
			<MyInput name="Skill" width="300px" use={true} />
			<MyInput name="Project Name	" width="300px" use={true} />
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
										<td>{convertDate(d.HolidayDate)}</td>
										<td>{d.HolidayName}</td>
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
				<div className='flex justify-center'>
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
			<MyInput name="Pending Allocation " readOnly={true} width="300px" />

		</div>
	);
}

export default AddNew;
