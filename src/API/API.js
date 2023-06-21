import axios from 'axios';
const URL = "http://localhost:5000"
const Axios = axios.create({
  baseURL: "http://localhost:5000",
  headers: {
    Authorization: 'Bearer ' + localStorage.token,
  },
});

export default {
  registeruser(user) {
    console.log(user);
    // const config = {
    //   headers: {
    //     authorization: `Bearer ${localStorage.token}`,
    //   },
    // };

    return Axios.post('/auth/signup', user);
  },
  loginuser(user) {
    // const config = {
    //   headers: {
    //     authorization: `Bearer ${localStorage.token}`,
    //   },
    // };
    // phoneNumber, password
    return Axios.post('api/users/login', user);
  },
  getuser() {
    const config = {
      headers: {
        authorization: `Bearer ${localStorage.token}`,
      },
    };

    return axios.get(URL, config);
  },
  getspecificuser(id) {
    const config = {
      headers: {
        authorization: `Bearer ${localStorage.token}`,
      },
    };

    return Axios.get(`api/users/user/${id}`, config);
  },
  deletespecificuser(id) {
    const config = {
      headers: {
        authorization: `Bearer ${localStorage.token}`,
      },
    };

    return Axios.delete(`api/users/user/${id}`, config);
  },
  getadds(page) {
    const config = {
      headers: {
        authorization: `Bearer ${localStorage.token}`,
      },
    };

    return Axios.get(`api/adds/oll?pageNumber=${page}`, config);
  },
  getspecificadd(id) {
    const config = {
      headers: {
        authorization: `Bearer ${localStorage.token}`,
      },
    };

    return Axios.get(`api/adds/${id}`, config);
  },
  deletespecificadd(id) {
    const config = {
      headers: {
        authorization: `Bearer ${localStorage.token}`,
      },
    };

    return Axios.delete(`api/adds/${id}`, config);
  },
  getusers(page) {
    const config = {
      headers: {
        authorization: `Bearer ${localStorage.token}`,
      },
    };

    return Axios.get(`api/users/oll?pageNumber=${page}`, config);
  },
  gettotalcount() {
    const config = {
      headers: {
        authorization: `Bearer ${localStorage.token}`,
      },
    };

    return Axios.get('/api/adds/all/dashboared', config);
  },
  getuserpro() {
    const config = {
      headers: {
        authorization: `Bearer ${localStorage.token}`,
      },
    };

    return axios.get(`${URL}/api/`, config);
  },
  // getusers() {
  //   const config = {
  //     headers: {
  //       authorization: `Bearer ${localStorage.token}`,
  //     },
  //   };
  //   return axios.get(`${URL}/auth/users`, config);
  // },
  sendmsg(msg) {
    // const config = {
    //   headers: {
    //     authorization: `Bearer ${localStorage.token}`,
    //   },
    // };
    return axios.post('chat/chat', msg);
  },
  getmessages(payload) {
    const config = {
      headers: {
        authorization: `Bearer ${localStorage.token}`,
      },
    };
    return axios.get(`${URL}/chat/${payload.id}/${payload.otheruser}`, config);
  },
  getpost() {
    const config = {
      headers: {
        authorization: `Bearer ${localStorage.token}`,
      },
    };

    return axios.get(`${URL}/post/posts`, config);
  },
  getnotification(id) {
    const config = {
      headers: {
        authorization: `Bearer ${localStorage.token}`,
      },
    };
    return axios.get(`${URL}/notification/${id}`, config);
  },
  sendnotification(noti) {
    // const config = {
    //   headers: {
    //     authorization: `Bearer ${localStorage.token}`,
    //   },
    // };
    return axios.post(`notification/${noti}`);
  },
};
