<template>
  <div>
    <el-header>
      <div class="title">客服管理系统</div>
      <div>
        <el-badge>{{username}}</el-badge>
        <el-button size="mini" round @click="handleLogout">退出登录</el-button>
      </div>
      </el-header>
    <el-container>
      <el-aside width="160px">
        <el-menu
          @select="handleSelectMenu"
          :default-active="defaultActive"
          router>
          <el-menu-item index="/user">
            <i class="el-icon-document"></i>
            <span slot="title">用户资料查询</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      username: ''
    }
  },
  mounted () {
  },
  methods: {
    handleSelectMenu (path) {
      this.$router.push(path)
    },
    handleLogout () {
      window.location.href = '/customer/logout'
    }
  },
  computed: {
    defaultActive () {
      return this.$route.path
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-container {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin-top: 60px;
}
.el-header {
  background-color: #409eff;
  color: #fff;
  font-size: 24px;
  font-weight: 700;
  line-height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.el-aside {
  color: #333;
}
.el-menu {
  height: 100%;
}
.el-main {
  color: #333;
}
.el-badge {
  font-size: 16px;
}
</style>
