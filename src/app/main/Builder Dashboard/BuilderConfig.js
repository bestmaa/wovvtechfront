import AddNew from './AddNew';
import Holiday from './Holiday';
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
	]
};
