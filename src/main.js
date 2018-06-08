// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import {Vue, router } from './../app/core/boot/core';
import store from './../app/store/';
import functions from './../app/scripts/functions';
import App from './App';
// import Vue2Filters from 'vue2-filters';

// Vue.use(Vue2Filters);
/* eslint-disable no-new */
new Vue({
	el: '#app',
	store,
	router,
	components: { App },
	template: '<App/>',
	watch: {
		'$route' (to, from) {
			functions.ready();
		}
	}
});
