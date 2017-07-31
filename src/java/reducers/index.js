import initialState from '../../../initialState.js';

export default function reducer(state = initialState , action){
	switch (action.type) {
		case 'CHANGE_PAGE':
			var clone = Object.assign({}, state);
			if (action.num !== clone.currentPage) {
				clone.currentPage = action.num;
			}
			return clone;
		case 'SELECT_FILTER': 
			var clone = Object.assign({}, state);
			const page = clone.Body.content[action.v2].filter;
			for (let i = 0; i < page.length; i++){
				if (action.v1 === page[i]){
					page.splice(i,1);
					return clone;
				}
			}
			page.push(action.v1);
			return clone;
		case 'REFRESH':
			var clone = Object.assign({}, state);
			clone.Body.content[action.v1].filter.length = 0;
			return clone;
		default:
			return state;
			break;

	}
};