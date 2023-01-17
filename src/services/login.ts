import api from "./axios";

export class LoginService {
  async login({ email, password }) {
    return await api
      .post("admin/login", { email, password })
      .then((resp) => resp.data)
      .catch((error) => error.response.data);
  }
}
