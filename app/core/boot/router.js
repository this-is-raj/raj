import { Router } from './vue';
import routes from './../routes';
import store from '../../store';
const router = new Router({
	mode: 'history',
	hashbang: false,
	routes
});
router.beforeEach ( (to, from, next) => {
	if ((to.name === null || to.name === undefined)) {
		next('/raj/');
	}
	else {
		next();
	}
});

router.afterEach(() => {
	$(document).scrollTop(0);
	store.state.error = null;
});

export default router;
