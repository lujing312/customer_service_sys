/**
 * 请求地址映射
 */
let base = '/customer'
module.exports = {
  getUserDataList: base + '/search',
  getUserGenderList: base + '/data_gender',
  updataSendUserMessage: base + '/resend',
  getWaybillTable: base + '/inquiry_logistics'
}
