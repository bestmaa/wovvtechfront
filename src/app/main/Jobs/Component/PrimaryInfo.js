import { MyInput, MySelect, MyTextField } from 'app/main/MyFromElement/MyFormElement';
import React from 'react';

function PrimaryInfo() {
	return (
		<>
			<MyTextField name="Job Description" use={true} width="300px" />
			<MyTextField name="Key Skills" use={true} width="300px" />
			<input type="file" id="myfile" name="myfile" style={{ marginLeft: '250px' }} />
			<MyTextField name="Desired Candidate Profile" width="300px" />
			<MyInput name="Locations" use={true} width="300px" />
			<MyInput name="Number Of Openings" use={true} width="300px" />
			<div className="flex flex-row">
				<b className="p-10" style={{ width: '300px' }}>
					Required Experience
				</b>
				<MySelect name="Min" data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} />
				<MySelect name="Max" data={[1, 2, 3, 4, 5, 6]} />
			</div>
			<div className="flex flex-row">
				<b className="p-10" style={{ width: '300px' }}>
					Salary Range
				</b>
				<select className="p-10" name="salaryType">
					<option>INR</option>
					<option>USD</option>
				</select>
				<input type="text" placeholder="Min" className="p-10 ml-20" name="salaryMin" />
				<input type="text" placeholder="Max" className="p-10 ml-20" name="salaryMax" />
				<select className="p-10  ml-20" name="salaryMonthOrAnnum">
					<option>per annum</option>
					<option>per month</option>
				</select>
			</div>
			<MySelect name="Job Owners" data={['demo1', 'demo2']} width="300px" />
			<MySelect name="Assigned Users" data={['Any', 'demo2']} width="300px" />
			<MySelect name="Workflow" data={['demo1', 'demo2']} width="300px" />
			<MySelect name="Assessment Template" data={['demo1', 'demo2']} width="300px" />
			<div className='flex justify-center'>
				<button className='p-10 m-10 bg-cyan-600 rounded-4 hover:bg-cyan-900 hover:text-white'>Create</button>
				<button className='p-10 m-10 bg-red-400 rounded-4 hover:bg-red-900 hover:text-white'>Cancel</button>
			</div>
		</>
	);
}

export default PrimaryInfo;
