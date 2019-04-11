
export const success = {
  status: 0,
  msg: '请求成功',
  data: null
}

export const getUserDataList = {
  status: 0,
  msg: '请求成功',
  data: [{
    recipient: '李静',
    phone: '13245673987',
    address: '北京市朝阳区 建外街道 建外大街 26号',
    couponPrice: '398',
    orderNum: '18764423421',
    boxNums: [{
      boxNum: '10456876564',
      gender: '2',
      bindStatus: 'true',
      backWaybill: '3464646443',
      backExpressData: '2018-09-03',
      sexMatch: '0',
      callrateMatch: '0',
      reportShow: '2'
    }],
    platform: '有赞',
    discountInfos: {
      discountIds: ['b0a307f0e33b11e88e3900163e0efa87'],
      totalPrice: '468',
      detail: [{
        coupon: '30',
        code: '02aDox',
        name: '优惠码'
      }, {
        coupon: '20',
        name: '优惠码'
      }],
      remainPrice: '329'
    },
    paymentTime: '2018-1-2',
    waybill: '2343534634'
  }, {
    recipient: '王安迪',
    phone: '13245673987',
    address: '北京',
    couponPrice: '398',
    orderNum: '18764423421',
    boxNums: [{
      boxNum: '10456876564',
      gender: '1',
      bindStatus: 'true',
      backWaybill: '3464646443',
      backExpressData: '2018-09-03',
      sexMatch: '1',
      callrateMatch: '1',
      reportShow: '2'
    }],
    platform: '有赞',
    discountInfo: {
      discountIds: ['b0a307f0e33b11e88e3900163e0efa87'],
      totalPrice: '468',
      detail: [{
        coupon: '30',
        code: '02aDox',
        name: '优惠码'
      }, {
        coupon: '20',
        name: '优惠码'
      }],
      remainPrice: '329'
    },
    paymentTime: '2018-1-2',
    waybill: '2343534634'
  }, {
    recipient: '丽丽',
    phone: '13245673987',
    address: '北京',
    couponPrice: '398',
    orderNum: '18764423421',
    boxNums: [{
      boxNum: '10456876564',
      gender: '2',
      bindStatus: 'false',
      backWaybill: '3464646443',
      backExpressData: '2018-09-03',
      sexMatch: '1',
      callrateMatch: '0',
      reportShow: '1'
    }],
    platform: '有赞',
    discountInfo: {
      discountIds: ['b0a307f0e33b11e88e3900163e0efa87'],
      totalPrice: '468',
      detail: [{
        coupon: '30',
        code: '02aDox',
        name: '优惠码'
      }, {
        coupon: '20',
        name: '优惠码'
      }],
      remainPrice: '329'
    },
    paymentTime: '2018-1-2',
    waybill: '2343534634'
  }]
}
export const getUserGenderList = {
  status: 0,
  msg: '请求成功',
  data: [{
    id: '0',
    boxNumber: '3424242',
    userName: '李四',
    gender: '女',
    phone: '13244567895',
    address: '北京',
    remark: '备注'
  }, {
    id: '1',
    boxNumber: '3424242',
    userName: '张强',
    gender: '女',
    phone: '13244567895',
    address: '上海',
    remark: '备注'
  }, {
    id: '2',
    boxNumber: '388888',
    userName: '王二小',
    gender: '男',
    phone: '13244567895',
    address: '深圳',
    remark: '备注'
  }]
}
export const getWaybillTable = {
  status: 0,
  msg: '',
  data: [{
    date: '2018-11-17',
    time: '11:48:56',
    context: '顺丰速运 已收取快件'
  }, {
    date: '2018-11-17',
    time: '12:55:57',
    context: '快件在【北京朝阳建外SOHO营业点】已装车,准备发往 【北京首都机场集散中心2】'
  }, {
    date: '2018-11-17',
    time: '11:48:56',
    context: '快件已发车'
  }, {
    date: '2018-11-17',
    time: '14:12:28',
    context: '快件到达 【北京首都机场集散中心2】'
  }, {
    date: '2018-11-17',
    time: '15:55:10',
    context: '快件在【北京首都机场集散中心2】已装车,准备发往 【北京通州集散中心】'
  }]
}
