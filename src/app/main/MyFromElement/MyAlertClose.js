import React, { useEffect, useState } from 'react';
import Alert from '@material-ui/lab/Alert';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
// import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
function MyAlertClose({ msg, action }) {
	const [open, setOpen] = useState(action);
	useEffect(() => {
		setOpen(action);
	}, [action]);
	return (
		<>
			<Collapse in={open}>
				<Alert
					severity="error"
					action={
						<IconButton
							aria-label="close"
							color="inherit"
							size="small"
							onClick={() => {
								setOpen(false);
							}}
						>
							<CloseIcon fontSize="inherit" />
						</IconButton>
					}
				>
					{msg}
				</Alert>
			</Collapse>
		</>
	);
}

export default MyAlertClose;
