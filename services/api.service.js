import axios from "axios";

const apiUrl = 'http://163.172.177.98:8081'

const ApiService = {
  token : null,

  async login(email, password) {
    const response = await axios
      .post(`${apiUrl}/auth/login`, {email, password})

    this.token = response.data.accessToken;
    return response.data;
  },

  async register(email, password) {
    await axios.post(`${apiUrl}/auth/register`, {email, password})

    const loginResponse = await this.login(email, password)

    this.token = loginResponse.accessToken;
    return loginResponse;
  },

  async me() {
    const response = await axios
      .get(`${apiUrl}/user/details/me`, {
        headers: {
          Authorization: `Bearer ${this.token}`
        }
      })
    
    if (!response) return null;
    return response.data;
  },

  async getAllGames() {
    const response = await axios
    .get(`${apiUrl}/game`, {
      headers: {
        Authorization: `Bearer ${this.token}`
      }
    })
  
    return response.data.games
  },
}

export default ApiService