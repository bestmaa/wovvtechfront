import React, { useEffect, useState } from 'react';
import { MyInput, MySelect, MyTextField } from '../MyFromElement/MyFormElement';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import PrimaryInfo from './Component/PrimaryInfo';
import SecondaryInfo from './Component/SecondaryInfo';
import CustomerInfo from './Component/CustomerInfo';
import Status from './Component/Status';

function AddJobs() {
	const [customer, setCustomer] = useState([]);
	useEffect(() => {
		fetch('http://localhost:4000/api/v1/view-customer')
			.then(res => res.json())
			.then(data => setCustomer(data.Customer)).catch(d=>console.log(d));
	}, []);
	return (
		<div
			className="shadow-4 p-10 rounded-6 flex flex-col"
			style={{ width: '95%', marginRight: 'auto', marginLeft: 'auto' }}
		>
			<h2 className="text-center border-b-1 m-10">Add Job Posting </h2>
			<div className="flex justify-between bg-black text-grey-50 p-10 rounded-6 bg-opacity-75 m-10">
				<h4>All Details:</h4>
				<i className="text-10">
					<b className="text-red">*</b>indicates required fields
				</i>
			</div>
			<div className="p-10">
				<MySelect name="Customer Name" data={[...customer]} width="300px" />
				<MyInput name="Referenc Code" width="300px" />
				<MyInput name="Job Title" width="300px" use={true} />
				<hr className="p-10" />
				<Tabs>
					<TabList>
						<Tab>Primary Info</Tab>
						<Tab>Secondary Info</Tab>
						<Tab>Customer Info</Tab>
						<Tab>Status</Tab>
						<Tab>Custom Fields</Tab>
					</TabList>
					{/* Primary Info */}
					<TabPanel>
						<PrimaryInfo />
					</TabPanel>
					<TabPanel>
						<SecondaryInfo />
					</TabPanel>
					<TabPanel>
						<CustomerInfo/>
					</TabPanel>
					<TabPanel>
						<Status />
					</TabPanel>
					<TabPanel>
						<h2>Custom Fields</h2>
					</TabPanel>
				</Tabs>
			</div>
		</div>
	);
}

export default AddJobs;
