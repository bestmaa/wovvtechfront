import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import './customer.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCustomer } from './Store/Customers';

function ViewCustomer() {
	const [tableData, setTableData] = useState(null);
	const customerData = useSelector(state => state);
	const dispatch = useDispatch();
	useEffect(() => {
		// dispatch(getCustomer())
		fetch('http://localhost:4000/api/v1/view-customer')
			.then(res => res.json())
			.then(data => setTableData(data.Customer));
		console.log('00000', customerData);
	}, [dispatch]);
	console.log('00000', customerData);
	return (
		<div>
			{!tableData && <h1>Loading......</h1>}
			{/* <MyLoader /> */}
			<div style={{ width: '95%' }} className="m-auto shadow-5 p-10 rounded-6">
				<table className="table-auto viewcustomer">
					<thead>
						<tr>
							<th>SL.</th>
							<th>Customer Name</th>
							<th>Parent Customer </th>
							<th>Account Manager </th>
							<th>Customer Entity </th>
							<th>Workflow </th>
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

export default ViewCustomer;
