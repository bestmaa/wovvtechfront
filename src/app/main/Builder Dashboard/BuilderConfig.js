import AddNew from './AddNew';
import Holiday from './Holiday';
import UpdateHours from './UpdateHours';
export const BuilderConfig = {
	settings: {},
	routes: [
		{
			path: '/Builder/add-new',
			component: AddNew
		},
		{
			path: '/Builder/holiday',
			component: Holiday
		},
		{
			path: '/Builder/update-hours',
			component: UpdateHours
		},
	]
};
