import http from './http-service';

class GetlistService {
	getAll() {
		return http.get('/list');
	}
	get(id) {
		return http.get(`/list/${id}`);
	}

	create(data) {
		return http.post('/list', data);
	}

	update(id, data) {
		return http.put(`/list/${id}`, data);
	}

	delete(id) {
		return http.delete(`/list/${id}`);
	}

	deleteAll() {
		return http.delete(`/list`);
	}

	findByTitle(strAtr) {
		return http.get(`/list?stringAtribute=${strAtr}`);
	}
}

export default new GetlistService();
