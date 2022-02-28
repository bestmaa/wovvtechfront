import React from 'react';
export function MyInput({ name, use = false, wn = true, width = '150px', readOnly = false }) {
	return (
		<div className="flex">
			{wn && (
				<b style={{ width: width }} className="p-8 rounded-6 mt-10 mb-10 ">
					{use && (
						<b className="text-red" style={{ marginLeft: '-6px' }}>
							*
						</b>
					)}
					{name}:
				</b>
			)}
			<input
				type="text"
				className="w-full p-8 rounded-6 mt-10 mb-10 "
				placeholder={name}
				name={name}
				readOnly={readOnly}
				required={use}
			/>
		</div>
	);
}
export function MyInputDate({ name, use = false, wn = true, width = '150px', onInput }) {
	return (
		<div className="flex">
			{wn && (
				<b style={{ width: width }} className="p-8 rounded-6 mt-10 mb-10 ">
					{use && (
						<b className="text-red" style={{ marginLeft: '-6px' }}>
							*
						</b>
					)}
					{name}:
				</b>
			)}
			<input
				type="Date"
				className="w-full p-8 rounded-6 mt-10 mb-10 "
				placeholder={name}
				name={name}
				required={use}
				onInput={onInput}
			/>
		</div>
	);
}
export function MySelect({ name, use = false, data, wn = true, width = '150px' }) {
	return (
		<>
			<div className="flex">
				{wn && (
					<b style={{ width: width }} className="p-8 rounded-6 mt-10 mb-10 ">
						{use && (
							<b className="text-red" style={{ marginLeft: '-8px' }}>
								*
							</b>
						)}
						{name}:
					</b>
				)}
				<select className="w-full p-8 rounded-6 mt-10 mb-10" placeholder={name} name={name} required={use}>
					<option value="">{name}...</option>
					{data?.map((d, i) => (
						<option key={i}>{d.CustomerName ? d.CustomerName : d}</option>
					))}
				</select>
			</div>
		</>
	);
}
export function MyTextField({ name, use = false, wn = true, width = '150px' }) {
	return (
		<>
			<div className="flex">
				{wn && (
					<b style={{ width: width }} className="p-8 rounded-6 mt-10 mb-10 ">
						{use && (
							<b className="text-red" style={{ marginLeft: '-8px' }}>
								*
							</b>
						)}
						{name}:
					</b>
				)}
				<textarea placeholder={name} className="w-full p-8 rounded-6 mt-10 mb-10"></textarea>
			</div>
		</>
	);
}

export function MyCheck({ name }) {
	return (
		<>
			<input type="checkbox" id={name} name={name} value={name} className="p-10" />
			<label htmlFor={name} className="p-10">
				{name}
			</label>
		</>
	);
}
