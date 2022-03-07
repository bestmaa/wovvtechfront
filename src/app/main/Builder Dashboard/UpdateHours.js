import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { getHoliday, getMember, hoursUpdate, setBuilderMember } from './Store/Builder';
import SlideToggle from 'react-slide-toggle';

function UpdateHours() {
	return (
		<div>
			<Tabs>
				<TabList>
					<Tab>Automatic </Tab>
					<Tab>Manual</Tab>
				</TabList>
				{/* Primary Info */}
				<TabPanel>
					<Automatic />
				</TabPanel>
				<TabPanel>
					<Manual />
				</TabPanel>
			</Tabs>
		</div>
	);
}

function Automatic() {
	let dispatch = useDispatch();
	const [selectData, setSelectData] = useState(null);
	let { GetMember, Holiday, Member } = useSelector(state => state.Builder);
	useEffect(() => {
		dispatch(getMember());
		dispatch(getHoliday());
	}, [dispatch]);
	function gayabHoja(props) {
		let filterData = selectData.filter(d => {
			if (d.id !== props.id) {
				return d;
			}
		});
		setSelectData(filterData);
	}
	function goAction(e) {
		let d1 = new Date(e.target.value);
		let x = new Date(d1.getTime());
		let p = Holiday.list.data.filter(d => d.attributes.HolidayDate == x.getTime());
		if (x.getDay() == 6 || x.getDay() == 0) {
			setSelectData(null);
			alert('Weekenday');
		} else if (p.length > 0) {
			setSelectData(null);
			alert('Today is Holiday');
			// HolidayCount += 1;
			// setHolidayList(HolidayList => [...HolidayList, ...p]);
		} else {
			let compareDate = new Date(e.target.value);
			let allData = GetMember?.list?.data?.filter((d, i) => {
				let date1 = new Date(d.attributes.AllocationFrom);
				let date2 = new Date(d.attributes.AllocationTo);
				if (compareDate.getTime() >= date1.getTime() && compareDate.getTime() <= date2.getTime()) {
					return d;
				}
			});
			let finalData = allData.filter((d, i) => {
				// console.log("asdasdasdas",d);
				if (d.attributes.WorkingHoursRecord) {
					// console.log("gaya");
					let matchdata = d.attributes.WorkingHoursRecord.data.filter(el => {
						// console.log(el.date==e.target.value ,d);
						if (el.date == e.target.value) {
							return d;
							// console.log("aaraha hai");
						}
					});
					if (matchdata.length > 0) {
					} else {
						return d;
					}
				} else {
					return d;
				}
			});
			console.log(finalData);
			setSelectData(finalData);
		}
	}
	function TargetHours(d) {
		let date1 = d.AllocationFrom;
		let date2 = document.querySelector('#date').value;
		if (date1 && date2) {
			let d1 = new Date(date1);
			let d2 = new Date(date2);
			if (d1 <= d2) {
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
					} else {
						WorkingDay += 1;
					}
				}
				return WorkingDay * 8;
			}
		}
	}
	function YourTotleHours(d) {
		if (d) {
			console.log('asdasdadas', d);
			let totlehours = 0;
			d.data.forEach(el => {
				totlehours += Number(el.hours);
			});
			return totlehours;
		} else {
			return 0;
		}
	}
	function submitHours(d) {
		let inputHours = document.querySelector('#hours').value;
		let inputdate = document.querySelector('#date').value;
		if (inputHours) {
			let sendData = {
				data: {
					MemberId: d.attributes.MemberID,
					Date: inputdate,
					Hours: inputHours,
					UID: d.attributes.UID
				}
			};
			let sendData2 = {
				data: {
					WorkingHoursRecord: {
						data: [...d.attributes.WorkingHoursRecord.data, { date: inputdate, hours: inputHours }]
					}
				}
			};
			console.log('send data 2', sendData2, d.id);
			dispatch(hoursUpdate(sendData));
			dispatch(setBuilderMember({ data: sendData2, method: 'PUT', id: d.id }));
		}
	}
	return (
		<div
			className="shadow-6 p-10 flex flex-col justify-center items-center ml-auto mr-auto"
			style={{ width: '95%' }}
		>
			<input
				type="date"
				className="p-10 m-10 "
				id="date"
				style={{ border: '2px solid black' }}
				onInput={goAction}
			/>
			{selectData ? (
				selectData.length > 0 ? (
					<table>
						<thead>
							<tr>
								<th>No</th>
								<th>Name</th>
								<th>MemberID</th>
								<th>ProjectName</th>
								<th>AllocationFrom</th>
								<th>AllocationTo</th>
								<th>TotleAllocationHours</th>
								<th>TargetHours</th>
								<th>YourTotleHours</th>
								<th>TodayWorkingHours</th>
							</tr>
						</thead>
						<tbody>
							{selectData?.map((d, i) => (
								<tr key={i}>
									<td>{i + 1}</td>
									<td>{d.attributes.AllocatedMembers}</td>
									<td>{d.attributes.MemberID}</td>
									<td>{d.attributes.ProjectName}</td>
									<td>{d.attributes.AllocationFrom}</td>
									<td>{d.attributes.AllocationTo}</td>
									<td>{Number(d.attributes.TotleAllocationDays) * 8}</td>
									<td>{TargetHours(d.attributes)}</td>
									<td>{YourTotleHours(d.attributes.WorkingHoursRecord)}</td>
									<td>
										<input
											type="number"
											id="hours"
											className="p-10 border-black border w-3/6 mr-10"
										/>
										<button
											className="px-20 py-10 rounded-6 bg-grey-500 ml-10"
											onClick={() => {
												submitHours(d);
												gayabHoja(d);
											}}
										>
											{d.id}
											submit
										</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				) : (
					<h1> No record</h1>
				)
			) : (
				<h1>Select Date</h1>
			)}
		</div>
	);
}
function Manual() {
	let dispatch = useDispatch();
	const [selectData, setSelectData] = useState(null);
	const [TH, setTH] = useState([]);
	const [hrdata, setHrdata] = useState(null);

	let { GetMember, Holiday, Member } = useSelector(state => state.Builder);
	useEffect(() => {
		dispatch(getMember());
		// dispatch(getHoliday());
	}, [dispatch]);
	useEffect(() => {
		if (GetMember.list) {
			setSelectData(GetMember.list.data);
		}
	}, [GetMember]);
	function convertDataKey(d) {
		let data = [];
		for (const [key, value] of Object.entries(d)) {
			data.push(key);
		}
		return data;
	}
	function ShowData(d) {
		setHrdata(d.data);
	}
	function convertDataValue(d, ShowData) {
		let data = [];
		for (const [key, value] of Object.entries(d)) {
			data.push(value);
		}
		return (
			<tr>
				{data.map(d => (
					<td>{typeof d == 'object' ? <button onClick={() => ShowData(d)}>Show Hours</button> : d}</td>
				))}
			</tr>
		);
	}
	return (
		<>
			<div
				className="shadow-6 p-10 flex flex-col justify-center items-center ml-auto mr-auto"
				style={{ width: '95%' }}
			>
				<div className="my-collapsible" style={{ overflow: 'auto', width: '100%' }}>
					<div className="flex">
						{/* {console.log("ye data ggai aok ",selectData)} */}
						<div className="ml-auto mr-0">
							<table>
								<thead>
									<tr>
										<th>Date</th>
										<th>Hour</th>
									</tr>
								</thead>
								<tbody>
									{hrdata &&
										hrdata.map(d => (
											<tr>
												<td>{d.date}</td>
												<td>{d.hours}</td>
											</tr>
										))}
								</tbody>
							</table>
						</div>
					</div>
					<table>
						<thead>
							<tr>
								{selectData &&
									convertDataKey(selectData[0].attributes).map((m, i) => <th key={i}>{m}</th>)}
							</tr>
						</thead>
						<tbody>{selectData && selectData.map(d => convertDataValue(d.attributes, ShowData))}</tbody>
					</table>
				</div>
			</div>
		</>
	);
}

export default UpdateHours;
