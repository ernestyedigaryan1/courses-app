import { createStore } from 'redux';
import { coursesReducer } from './courses/reducer';
import { authorsReducer } from './authors/reducer';
import { userReducer } from './user/reducer';

const initialState = {
	user: {
		isAuth: false,
		name: '',
		email: '',
		token: '',
	},
	courses: [],
	authors: [],
};

function rootReducer(state = initialState, action) {
	return {
		courses: coursesReducer(state.courses, action),
		authors: authorsReducer(state.authors, action),
		user: userReducer(state.user, action),
	};
}

const store = createStore(rootReducer);

export default store;
