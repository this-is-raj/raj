import Vue from 'vue';

import Http from 'vue-resource';
import Router from 'vue-router';
import Vuex from 'vuex';

[Http, Router, Vuex].forEach((plugin) => Vue.use(plugin));

export {Vue, Router};
