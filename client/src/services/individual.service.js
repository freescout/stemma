// this service uses axios object(http-common) to send HTTP requests

import http from '../http-common';

class IndividualDataService {
  getAll() {
    return http.get("/individuals");
  }
  get(id) {
    return http.get(`/individuals/${id}`);
  }

  create(data) {
    console.log("reached create", data );
    return http.post("/individuals", data);
  }

  update(id, data) {
    return http.put(`/individuals/${id}`, data);
  }

  delete(id) {
    return http.delete(`/individuals/${id}`);
  }

  deleteAll() {
    return http.delete(`/individuals`);
  }

  findByFirstName(firstName) {
    // console.log("reached findByFirstName")
    return http.get(`/individuals?firstName=${firstName}`);
  }


  findByName(firstName, lastName) {
    console.log("reached findByName memberService", firstName, lastName);
    return http.get(`/individuals?firstName=${firstName}&lastName=${lastName}`);
  }
}

export default new IndividualDataService();