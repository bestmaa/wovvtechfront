import AddJobs from './AddJobs';
export const JobsConfig = {
	settings: {
        layout:{
            config:{
                footer : {
                    display : false,
                },
            }
        }
    },
	routes: [
		{
			path: '/jobs/add-job-posting',
			component: AddJobs
		}
		// {
		// 	path: '/customer/view-customers',
		// 	component: ViewCustomer
		// },
	]
};
