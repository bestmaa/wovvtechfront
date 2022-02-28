import i18next from 'i18next';
import ar from './navigation-i18n/ar';
import en from './navigation-i18n/en';
import tr from './navigation-i18n/tr';
import { FaBeer } from 'react-icons/fa';

i18next.addResourceBundle('en', 'navigation', en);
i18next.addResourceBundle('tr', 'navigation', tr);
i18next.addResourceBundle('ar', 'navigation', ar);
const navigationCandidate = [
	{
		id: 'add-candidate ',
		title: 'Add Candidate ',
		type: 'item',
		url: '/candidate/add-candidate'
	},
	{
		id: 'view-candidates',
		title: 'View Candidates',
		type: 'item',
		url: '/candidate/view-candidates'
	},
	{
		id: 'add-candidate-in-bulk',
		title: 'Add Candidate in Bulk',
		type: 'item',
		url: '/candidate/add-candidate-in-bulk'
	},
	{
		id: 'import-candidates',
		title: 'Import Candidates',
		type: 'item',
		url: '/candidate/import-candidates'
	},
	{
		id: 'view-joined-candidates',
		title: 'View Joined Candidates',
		type: 'item',
		url: '/candidate/view-joined-candidates'
	},
	{
		id: 'view-locked-candidates',
		title: 'View Locked Candidates',
		type: 'item',
		url: '/candidate/view-locked-candidates'
	},
	{
		id: 'manage-candidate-folders ',
		title: 'Manage Candidate Folders',
		type: 'item',
		url: '/candidate/manage-candidate-folders '
	},
	{
		id: 'locate-candidates',
		title: 'Locate Candidates',
		type: 'item',
		url: '/candidate/locate-candidates'
	},
	{
		id: 'quick-candidate-search',
		title: 'Quick Candidate Search',
		type: 'item',
		url: '/candidate/quick-candidate-search'
	},
	{
		id: 'advanced-candidate-search',
		title: 'Advanced Candidate Search',
		type: 'item',
		url: '/candidate/advanced-candidate-search'
	},
	{
		id: 'manage-saved-searches',
		title: 'Manage Saved Searches',
		type: 'item',
		url: '/candidate/manage-saved-searches'
	}
];
const navigationCustomer = [
	{
		id: 'add-customer',
		title: 'Add Customer',
		type: 'item',
		url: '/customer/add-customer'
	},
	{
		id: 'view-customers',
		title: 'View Customers',
		type: 'item',
		url: '/customer/view-customers'
	},
	{
		id: 'vew-contacts',
		title: 'Vew Contacts',
		type: 'item',
		url: '/customer/vew-contacts'
	},
	{
		id: 'manage-customer-projects',
		title: 'Manage Customer Projects',
		type: 'item',
		url: '/customer/manage-customer-projects'
	},
	{
		id: 'locate-customers-or-ontacts',
		title: 'Locate Customers or Contacts',
		type: 'item',
		url: '/customer/locate-customers-or-ontacts'
	}
];
const navigationJobs = [
	{
		id: 'add-job-posting',
		title: 'Add Job Posting',
		type: 'item',
		url: '/jobs/add-job-posting'
	},
	{
		id: 'view-job-posting',
		title: 'View Job Posting',
		type: 'item',
		url: '/jobs/view-job-posting'
	},
	{
		id: 'view-job-pipelines',
		title: 'View Job Pipelines',
		type: 'item',
		url: '/jobs/view-job-pipelines'
	},
	{
		id: 'add-work-allocation',
		title: 'Add Work Allocation',
		type: 'item',
		url: '/jobs/add-work-allocation'
	},
	{
		id: 'change-workflow',
		title: 'Change Workflow',
		type: 'item',
		url: '/jobs/change-workflow'
	},
	{
		id: 'locate-job-postings',
		title: 'Locate Job Postings',
		type: 'item',
		url: '/jobs/locate-job-postings'
	},
];
const navigationBuilderDashboard=[
	{
		id: 'add-New',
		title: 'Add New',
		type: 'item',
		url: '/Builder/add-new'
	},
	{
		id: 'holiday',
		title: 'Holiday',
		type: 'item',
		url: '/Builder/holiday'
	},
]
const navigationConfig = [
	{
		id: 'applications',
		title: 'Applications',
		translate: 'APPLICATIONS',
		type: 'group',
		icon: 'apps',
		children: [
			{
				id: 'dashboards',
				title: 'Dashboards',
				type: 'collapse',
				icon: 'dashboard'
			},
			{
				id: 'Candidate',
				title: 'Candidate',
				type: 'collapse',
				icon: 'accessibility_new',
				children: [...navigationCandidate]
			},
			{
				id: 'Jobs',
				title: 'Jobs',
				type: 'collapse',
				icon: 'access_time',
				children:[...navigationJobs]
			},
			{
				id: 'Customers',
				title: 'Customers',
				type: 'collapse',
				icon: 'directions_walk',
				children: [...navigationCustomer]
			},
			{
				id: 'Suppliers',
				title: 'Suppliers',
				type: 'collapse',
				icon: 'child_friendly'
			},
			{
				id: 'Staffing',
				title: 'Staffing',
				type: 'collapse',
				icon: 'nature_people'
			},
			{
				id: 'Finance',
				title: 'Finance',
				type: 'collapse',
				icon: 'monetization_on'
			},
			{
				id: 'Users',
				title: 'Users',
				type: 'collapse',
				icon: 'people'
			},
			{
				id: 'Reports',
				title: 'Reports',
				type: 'collapse',
				icon: 'report'
			},
			{
				id: 'Builder_Dashboard',
				title: 'Builder Dashboard',
				type: 'collapse',
				icon: 'report',
				children:[...navigationBuilderDashboard]
			},
		]
	}
];

export default navigationConfig;
