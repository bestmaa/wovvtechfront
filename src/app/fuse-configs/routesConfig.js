import React from 'react';
import { Redirect } from 'react-router-dom';
import FuseUtils from '@fuse/utils';
import ExampleConfig from 'app/main/example/ExampleConfig';
import { CondidateConfig } from 'app/main/Condidate/CondidateConfig';
import { CustomerConfig } from 'app/main/Customers/CustomerConfig';
import { JobsConfig } from 'app/main/Jobs/JobConfig';
import { DashbordConfig } from 'app/main/Dashbord/DashbordConfig';
import { BuilderConfig } from 'app/main/Builder Dashboard/BuilderConfig';

const routeConfigs = [ExampleConfig,CondidateConfig,CustomerConfig,JobsConfig,DashbordConfig,BuilderConfig];

const routes = [
	...FuseUtils.generateRoutesFromConfigs(routeConfigs),
	{
		path: '/',
		exact:true,
		component: () => <Redirect to="/dashbord" />
	}
];

export default routes;
