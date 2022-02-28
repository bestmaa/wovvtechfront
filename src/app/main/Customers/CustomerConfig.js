import AddCustomer from './AddCustomer';
import ViewCustomer from './ViewCustomer';
export const CustomerConfig = {
	settings: {},
	routes: [
		{
			path: '/customer/add-customer',
			component: AddCustomer
		},
		{
			path: '/customer/view-customers',
			component: ViewCustomer
		},
	]
};
