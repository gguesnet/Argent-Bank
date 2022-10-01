export default class ApiService {
  constructor(data) {
    this.baseURL = "http://localhost:3001/api/v1/";
    this.data = data;
  }

  async postUserLogin() {
    const response = await fetch(`${this.baseURL}user/login`, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(this.data),
    });
    return response.json();
  }

  async postUserProfile(token) {
    const response = await fetch(`${this.baseURL}user/profile`, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer" + token,
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(this.data),
    });
    return response.json();
  }

  async putUserProfile(token) {
    const response = await fetch(`${this.baseURL}user/profile`, {
      method: "PUT",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer" + token,
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(this.data),
    });
    return response.json();
  }
}
