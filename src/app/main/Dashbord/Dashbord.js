import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import './dashbord.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { baseUrl } from '../ApiUri';
// import { getCustomer } from './Store/Customers';

function Dashbord() {
	const [tableData, setTableData] = useState(null);
	// const customerData = useSelector(state => state);
	const dispatch = useDispatch();
	useEffect(() => {
		// dispatch(getCustomer())
		// fetch(`${baseUrl}/view-customer`)
		// 	.then(res => res.json())
		// 	.then(data => setTableData(data.Customer));
		fetch(`http://localhost:1337/api/customers`)
			.then(res => res.json())
			.then(data => {
				console.log('sssss',data);
				setTableData(data.Customer);
			});
	}, []);
	// console.log('000', customerData);
	return (
		<div>
			{!tableData && <h1>Loading......</h1>}
			{/* <MyLoader /> */}
			<h1 className="text-center">My Customer</h1>
			<div style={{ width: '95%' }} className="m-auto shadow-5 p-10 rounded-6">
				<table className="table-auto dashbord">
					<thead>
						<tr>
							<th>SL.</th>
							<th>Customer Name</th>
							<th>Parent Customer </th>
							<th>Account Manager </th>
							<th>Customer Entity </th>
							<th>Workfolw </th>
							<th>Rate Slabs </th>
							<th>Jobs </th>
							<th>Contacts </th>
							<th>Project </th>
							<th>Status </th>
							<th>Manage </th>
						</tr>
					</thead>
					<tbody>
						{tableData?.map((d, i) => (
							<tr key={i}>
								<td>{i + 1}.</td>
								<td>
									<Link to="">{d.CustomerName}</Link>
								</td>
								<th>0 </th>
								<th>0</th>
								<th>0 </th>
								<th>0</th>
								<th>0</th>
								<th>{d.Jobs}</th>
								<th>0</th>
								<th>0</th>
								<th>Status </th>
								<th>Manage </th>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default Dashbord;
