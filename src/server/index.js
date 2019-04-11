import axios from './axios'
import config from './config'

export const getUserDataList = params => {
  return axios.get(config.getUserDataList, {params})
    .then(res => res.data, err => Promise.reject(err))
}
export const getUserGenderList = params => {
  return axios.get(config.getUserGenderList, {params})
    .then(res => res.data, err => Promise.reject(err))
}
export const updataSendUserMessage = params => {
  return axios.post(config.updataSendUserMessage, {params})
    .then(res => res.data, err => Promise.reject(err))
}
export const getWaybillTable = params => {
  return axios.get(config.getWaybillTable, {params})
    .then(res => res.data, err => Promise.reject(err))
}
