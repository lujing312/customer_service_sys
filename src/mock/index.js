import axios from '../server/axios'
import MockAdapter from 'axios-mock-adapter'
import config from '../server/config'

import {
  success,
  getUserDataList,
  getUserGenderList,
  getWaybillTable
} from './data'

export default {
  init () {
    let mock = new MockAdapter(axios)
    mock.onPost(config.login).reply(200, JSON.stringify(success))
    mock.onGet(config.getUserDataList).reply(200, JSON.stringify(getUserDataList))
    mock.onGet(config.getUserGenderList).reply(200, JSON.stringify(getUserGenderList))
    mock.onGet(config.getExcelList).reply(200, JSON.stringify(success))
    mock.onPost(config.updataSendUserMessage).reply(200, JSON.stringify(success))
    mock.onGet(config.getWaybillTable).reply(200, JSON.stringify(getWaybillTable))
  }
}
