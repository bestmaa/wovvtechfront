import React from 'react';
import { MyCheck, MyInput, MySelect, MyTextField } from 'app/main/MyFromElement/MyFormElement';

function SecondaryInfo() {
	return (
		<>
			<MySelect name="UG Qualifications" width="300px" />
			<div className="lg:ml-256 md:ml-256">
				<MyCheck name={'And'} />
				<MyCheck name={'or'} />
			</div>
			<MySelect name="PG Qualifications" width="300px" />
			<div>
				<b className="p-8 mt-10 mb-10 inline-block">Posting Type:</b>
				<div className="lg:ml-136 md:ml-136 inline-block">
					<MyCheck name="Permanent" />
					<MyCheck name="Contract" />
					<MyCheck name="Contract-to-Hire" />
					<MyCheck name="Consultant" />
				</div>
			</div>
			<div>
				<b className="p-8 mt-10 mb-10 inline-block">Job Type:</b>
				<div className="lg:ml-160 md:ml-160 inline-block">
					<MyCheck name="Full-Time" />
					<MyCheck name="Part-Time" />
				</div>
			</div>
            <MySelect name="Functional Area" width="300px" />
            <MySelect name="industry" width="300px" />
            <MySelect name="Job Sector" width="300px" />
            <MySelect name="Job Priority" width="300px" />
            <div>
				<b className="p-8 mt-10 mb-10 inline-block">Target Date Time</b>
                <input type="date" className="p-8 mt-10 mb-10 lg:ml-128 md:ml-128 inline-block" />
                <input type="time" className="p-8 mt-10 mb-10 inline-block"/>
			</div>
            <MyInput name="Target Submissions" width="300px" />
            <MyTextField name="Internal Notes" width="300px" />
            <div className='flex justify-center'>
				<button className='p-10 m-10 bg-cyan-600 rounded-4 hover:bg-cyan-900 hover:text-white'>Create</button>
				<button className='p-10 m-10 bg-red-400 rounded-4 hover:bg-red-900 hover:text-white'>Cancel</button>
			</div>
		</>
	);
}

export default SecondaryInfo;
