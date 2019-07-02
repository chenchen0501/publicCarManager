<template>
  <div>
    <el-container>
      <el-header class="header" height="50px">
        <headerBar></headerBar>
      </el-header>
      <el-container class="main-container">
        <el-aside class="siderBar leftBar" width="200px">
          <div class="mainPageItem" @click="$router.push('/layout/home')">无锡公交管理方案</div>
          <el-menu
            class="el-menu-vertical-demo"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
          >
            <submenuItem :routes="showRoutes"></submenuItem>
          </el-menu>
        </el-aside>

        <el-main class="main">
          <keep-alive>
            <router-view />
          </keep-alive>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import headerBar from "./components/headerBar";
import submenuItem from "./components/submenuItem";
import { syncRoutes, role1, role2, toRoute, baseRoutes } from "@/router/routes";
import store from "@/store";
import router from '@/router'

export default {
  components: {
    submenuItem,
    headerBar
  },
  created() {},
  mounted() {
    console.log("roleId:", this.$store.state.userInfo.roleId);
  },
  data() {
    return {
      routes: store.state.userInfo.roleId == 1 ? role1 : role2,
      showRoutes: toRoute,
      baseRoute: baseRoutes
    };
  },
  watch: {
    "$store.state.userInfo.roleId": {
      handler(newVal, oldVal) {
        this.routes = newVal == 1 ? role1 : role2;
        this.showRoutes[0].children.push(this.routes)
        this.baseRoute.push(...this.showRoutes)
        router.addRoutes(this.showRoutes)
        console.log("newId:", newVal);
        console.log("oldId:", oldVal);
      },
      deep: true
    },
    routes: {
      handler(newVal, oldVal) {
        console.log("new:", newVal);
        console.log("old:", oldVal);
      },
      deep: true
    }
  }
};
</script>
<style lang="less" scoped>
.mainPageItem {
  text-align: center;
  width: 200px;
  height: 56px;
  line-height: 56px;
  color: #fff;
  font-size: 14px;
  cursor: pointer;
  background: #545c7c;
}
.header {
  background: #fff;
  margin-left: 200px;
}
/deep/ .el-menu-item {
  width: 200px;
}
/deep/ .el-submenu {
  width: 200px;
}
.leftBar {
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  background: #545c64;
}
.main {
  margin-left: 200px;
}
/deep/ .el-submenu .el-menu-item {
  padding: 0;
}
.main-container {
  height: calc(100vh - 50px);
}
</style>
