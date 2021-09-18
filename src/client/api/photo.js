import axios from "./index";
import { apiUrl } from './constants'

const uploadPhoto = (data) => {
  return axios.post(apiUrl('photo'), data)
}

const fetchPhotoList = () => {
  return axios.get('https://api.uploadcare.com/files/')
}

const fetchPhotoById = (photoId) => {
  return axios.get(apiUrl(`photo/${photoId}`))
}

const deletePhotoById = (data) => {
  return axios.delete(apiUrl(`photo/${data?.photoId}`, data))
}

export default {
  uploadPhoto,
  fetchPhotoList,
  fetchPhotoById,
  deletePhotoById,
};