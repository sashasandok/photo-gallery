import axios from "axios";
import { apiUrl } from './constants'

const getUserList = () => axios.get(apiUrl('user'))

export default {
  getUserList,
};