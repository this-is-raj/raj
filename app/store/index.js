import Vuex from 'vuex';

import {
	PROFILE_IMAGE, BACKGROUND_IMAGE, DEFAULT_IMAGE
} from './../core/config';

const state = {
	profile_image: PROFILE_IMAGE,
	background_image: BACKGROUND_IMAGE,
	default_image: DEFAULT_IMAGE,
	title: 'This is Raj',
	siteName: 'This is Raj',
};

const mutations = {
	updateTitle (state, title) {
		state.title = title;
		document.tilte = `${ title } - ${ state.siteName }`;
	}
};

const actions = {};

const getters = {};

export default new Vuex.Store({
	state,
	getters,
	actions,
	mutations
});