import axios from "axios";
import { apiUrl } from './constants'

const uploadPhoto = (data) => {
  return axios.post(apiUrl('photo'), data, {
    onUploadProgress: data => {
      console.log(data)
      console.log(Math.round((100 * data.loaded) / data.total))
    },
  })
}

const fetchPhotoList = () => {
  return axios.get(apiUrl('photo'))
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