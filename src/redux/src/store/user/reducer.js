export const userReducer = (state, action) => {
	switch (action.type) {
		case 'putUser':
			const { user } = action;
			return user;
		default:
			return state;
	}
};
