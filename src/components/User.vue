<template>
  <div class="container">
    <el-form
      class="nav-title"
      :inline="true"
      label-width="100px"
      :model="searchValue">
      <el-form-item>
        <el-select
          v-model="searchValue.type"
          class="search-select-list">
          <el-option label="手机号" value="1"/>
          <el-option label="唾液盒编号" value="2" />
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-input
          v-model="searchValue.param"
          placeholder="请输入搜索内容">
        </el-input>
      </el-form-item>
      <el-form-item class="search-button">
        <el-button
          type="primary"
          @click="handleSearchList">搜索</el-button>
      </el-form-item>
    </el-form>
    <el-table
      :data="dataList"
      style="width: 100%">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-table
            :data="props.row.boxNums"
            border
            style="width: 100%">
            <el-table-column
              width="110px"
              prop="boxNum"
              label="样本编号">
            </el-table-column>
            <el-table-column
              width="50px"
              prop="gender"
              label="性别"
              :formatter="formatterGender">
            </el-table-column>
            <el-table-column
              width="110px"
              prop="bindStatus"
              label="用户是否绑定"
              :formatter="formatterBind">
            </el-table-column>
            <el-table-column
              width="110px"
              prop="backExpressData"
              label="回寄签收日期" />
            <el-table-column
              width="110px"
              prop="sexMatch"
              label="性别是否匹配"
              :formatter="formatterMatch">
            </el-table-column>
            <el-table-column
              width="130px"
              prop="callrateMatch"
              label="callrate是否达标"
              :formatter="formatterCallrate">
            </el-table-column>
            <el-table-column
              width="110px"
              prop="reportShow"
              label="是否生成报告"
              :formatter="formatterReport">
            </el-table-column>
            <el-table-column
              fixed="right"
              label="操作">
              <template slot-scope="backItem" fixed="right">
                <el-button
                  type="primary"
                  v-if="backItem.row.backWaybill"
                  class="get-back-sample"
                  @click="handleBackSearch(backItem.row.backWaybill)">回寄单号</el-button>
                <el-button
                  type="danger"
                  @click="handleAgainSend(props.row,backItem.row.boxNum)"
                  class="send-again-button">样本重寄</el-button>
              </template>
            </el-table-column>
          </el-table>
        </template>
      </el-table-column>
      <el-table-column
        width="140px"
        label="订单号"
        prop="orderNum">
      </el-table-column>
      <el-table-column
        width="110px"
        label="手机号"
        prop="phone">
      </el-table-column>
      <el-table-column
        width="80px"
        label="姓名"
        prop="recipient">
      </el-table-column>
      <el-table-column
        label="地址"
        prop="address">
      </el-table-column>
      <el-table-column
        width="90px"
        label="购买平台"
        prop="platform">
      </el-table-column>
      <el-table-column
        width="90px"
        label="购买价格"
        prop="couponPrice">
      </el-table-column>
      <el-table-column
        width="95px"
        label="购买时间"
        prop="paymentTime">
      </el-table-column>
      <el-table-column
        fixed="right"
        width="180px"
        label="操作">
        <template slot-scope="sendItem">
          <el-button
            type="primary"
            v-if="sendItem.row.waybill"
            class="get-buy-sample"
            @click="handleSampleFrom(sendItem.row.waybill)">寄出单号</el-button>
          <el-button
            type="success"
            class="get-coupon-button"
            @click="handleCouponList(sendItem.row.discountInfos.detail)">优惠详情</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 重寄信息 -->
    <el-dialog
      title="重寄信息填写"
      :visible.sync="dialogAgainSendShow"
      width="34%">
      <el-form
        :model="sendEditForm"
        :rules="sendEditFormRules"
        ref="sendEditForm">
        <el-form-item
          label="姓名"
          :label-width="formLabelWidth" prop="recipient">
          <el-input
            v-model.trim="sendEditForm.recipient"
            autocomplete="off" class="input-width"></el-input>
        </el-form-item>
        <el-form-item
          label="手机号"
          :label-width="formLabelWidth"
          prop="phone">
          <el-input
            v-model.trim="sendEditForm.phone"
            autocomplete="off"
            class="input-width">
          </el-input>
        </el-form-item>
        <el-form-item
          label="地址"
          :label-width="formLabelWidth"
          prop="address">
          <el-input
            type="textarea"
            v-model.trim="sendEditForm.address"
            autocomplete="off"
            class="input-width">
          </el-input>
        </el-form-item>
      </el-form>
      <div
        slot="footer"
        class="dialog-footer">
        <el-button @click="dialogAgainSendShow = false">取 消</el-button>
        <el-button type="primary" @click="handleSendAgainList">确 定</el-button>
      </div>
    </el-dialog>
    <!-- 寄出单号查询 -->
    <el-dialog
      title="运单详情"
      :visible.sync="dialogGetTrackingShow"
      width="40%">
      <el-table
        :data="trackingList"
        style="width: 100%">
        <el-table-column
          fixed
          width="100px"
          prop="date"
          label="日期">
        </el-table-column>
        <el-table-column
          width="100px"
          prop="time"
          label="时间">
        </el-table-column>
        <el-table-column
          prop="context"
          label="详细信息">
        </el-table-column>
      </el-table>
    </el-dialog>
    <!-- 回寄单号查询 -->
    <el-dialog
      title="运单详情"
      :visible.sync="dialogGetBackShow"
      width="40%">
      <el-table
        :data="backList"
        style="width: 100%">
        <el-table-column
          fixed
          width="100px"
          prop="date"
          label="日期">
        </el-table-column>
        <el-table-column
          prop="time"
          width="100px"
          label="时间">
        </el-table-column>
        <el-table-column
          prop="context"
          label="详细信息">
        </el-table-column>
      </el-table>
    </el-dialog>
    <!-- 优惠券 -->
    <el-dialog
      title="优惠详情"
      :visible.sync="dialogGetCouponShow"
      width="30%">
      <el-table
        :data="coponList"
        style="width: 100%">
        <el-table-column
          prop="coupon"
          label="优惠金额"
          width="110">
        </el-table-column>
        <el-table-column
          prop="name"
          label="优惠券名称"
          width="110">
        </el-table-column>
        <el-table-column
          prop="code"
          label="优惠码">
        </el-table-column>
      </el-table>
    </el-dialog>
  </div>
</template>

<script>
import {
  getUserDataList,
  updataSendUserMessage,
  getWaybillTable
} from '../server'
export default {
  data () {
    return {
      dataList: [],
      trackingList: [],
      backList: [],
      coponList: [],
      dialogAgainSendShow: false,
      dialogGetTrackingShow: false,
      dialogGetBackShow: false,
      dialogGetCouponShow: false,
      sendEditForm: {
        recipient: '',
        address: '',
        phone: ''
      },
      boxNum: '',
      sendEditFormRules: {
        recipient: [{
          required: true,
          message: '请输入用户名',
          trigger: 'blur'
        }],
        address: [{
          required: true,
          message: '请输入详细地址',
          trigger: 'blur'
        }],
        phone: [{
          required: true,
          message: '请输入电话号码',
          trigger: 'blur'
        }]
      },
      searchValue: {
        param: '',
        type: ''
      },
      formLabelWidth: '19%'
    }
  },
  mounted () {
    this.getUserDataList()
  },
  methods: {
    getUserDataList () {
      getUserDataList({
        param: this.searchValue.param,
        type: this.searchValue.type
      }).then(res => {
        if (!res.status) {
          this.dataList = res.data || []
        } else {
          this.dataList = []
        }
      })
    },
    handleSearchList () {
      // 搜索列表
      this.getUserDataList()
      // 搜索框清空
      this.searchValue.param = ''
      // 下拉菜单复原
      this.searchValue.type = ''
    },
    handleAgainSend (row, boxNum) {
      // 重新发送弹框
      this.dialogAgainSendShow = true
      this.sendEditForm = row
      this.boxNum = boxNum
    },
    handleCouponList (coupon) {
      this.dialogGetCouponShow = true
      this.coponList = coupon
    },
    handleSendAgainList () {
      // 重新发送修改信息
      this.$refs['sendEditForm'].validate(valid => {
        if (valid) {
          updataSendUserMessage({
            recipient: this.sendEditForm.recipient,
            address: this.sendEditForm.address,
            phone: this.sendEditForm.phone,
            boxNum: this.boxNum
          }).then(res => {
            if (!res.status) {
              this.$confirm('是否确认重寄？', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
              }).then(() => {
                this.$message({
                  type: 'success',
                  message: '重寄成功!'
                })
              })
              // 弹窗关闭
              this.dialogAgainSendShow = false
              // 重置表单
              this.getUserDataList()
            } else {
              this.$message({
                message: res.msg,
                type: 'error'
              })
            }
          })
        }
      })
    },
    handleSampleFrom (waybill) {
      console.log(waybill)
      // 查询快递单号
      this.dialogGetTrackingShow = true
      getWaybillTable({
        waybill: waybill
      }).then(res => {
        if (!res.status) {
          this.trackingList = res.data || []
        } else {
          this.trackingList = []
        }
      })
    },
    handleBackSearch (backWaybill, gender) {
      this.dialogGetBackShow = true
      getWaybillTable({
        waybill: backWaybill
      }).then(res => {
        if (!res.status) {
          this.backList = res.data || []
        } else {
          this.backList = []
        }
      })
    },
    formatterGender (row, column, cellValue) {
      var mapGender = {
        '1': '男',
        '2': '女'
      }
      return mapGender[row.gender]
    },
    formatterBind (row, column, cellValue) {
      var mapBind = {
        '1': '已绑定',
        '0': '未绑定'
      }
      return mapBind[row.bindStatus]
    },
    formatterMatch (row, column, cellValue) {
      var mapMatch = {
        '0': '匹配',
        '1': '不匹配'
      }
      return mapMatch[row.sexMatch]
    },
    formatterCallrate (row, column, cellValue) {
      var mapCallrate = {
        '0': '达标',
        '1': '不达标'
      }
      return mapCallrate[row.callrateMatch]
    },
    formatterReport (row, column, cellValue) {
      return row.reportShow === 2 ? '已生成报告' : '未生成报告'
    }
  }
}
</script>

<style scoped>
.el-table {
  margin-top: 20px;
}
.el-table .cell {
  text-align: center;
}
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
.demo-table-expand label {
  width: 155px;
}
.search-button >>> .el-button {
  padding: 12px 20px;
  font-size: 12px;
}
.send-again-button {
  padding: 5px 3px;
  font-size: 12px;
}
.get-coupon-button {
  padding: 5px 3px;
  font-size: 12px;
}
.get-back-sample {
  padding: 5px 3px;
  font-size: 12px;
}
.get-buy-sample {
  padding: 5px 3px;
  font-size: 12px;
}
.el-table th {
  padding: 5px 0 ;
}
.excel-button >>> .el-button {
  padding: 12px 10px;
  font-size: 12px;
}
.el-dropdown-link {
  cursor: pointer;
  color: #409EFF;
}
.search-select-list {
  width: 160px;
}
.container >>> .el-dialog__body {
  padding: 0px 20px 20px 20px;
}
.input-width {
  width: 300px;
}
</style>
