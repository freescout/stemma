// this service uses axios object(http-common) to send HTTP requests

import http from '../http-common';

class MemberDataService {
  getAll() {
    return http.get("/members");
  }
  get(id) {
    return http.get(`/members/${id}`);
  }

  create(data) {
    return http.post("/members", data);
  }

  update(id, data) {
    return http.put(`/members/${id}`, data);
  }

  delete(id) {
    return http.delete(`/members/${id}`);
  }

  deleteAll() {
    return http.delete(`/members`);
  }

  findByFirstName(firstName) {
    // console.log("reached findByFirstName")
    return http.get(`/members?firstName=${firstName}`);
  }


  findByName(firstName, lastName) {
    console.log("reached findByName memberService", firstName, lastName);
    return http.get(`/members?firstName=${firstName}&lastName=${lastName}`);
  }
}

export default new MemberDataService();