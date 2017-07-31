
export function changePage(num) {
	return {
		type: "CHANGE_PAGE",
		num: num
	}
}

export function refresh(val){
	return {
		type: 'REFRESH',
		v1: val,
	}
}

export function selectFilter(value, val2){
	return {
		type: 'SELECT_FILTER',
		v1: value,
		v2: val2
	}
}