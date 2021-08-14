import axios from "axios";

const baseUrl = 'http://localhost:4000/api/'
const apiUrl = (endpoint) => baseUrl + endpoint

const getUserList = () => axios.get(apiUrl('users'))

export default {
  getUserList,
};