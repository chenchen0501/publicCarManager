<template>
  <div>
    <el-container>
      <el-header class="header" height="50px">
        <headerBar></headerBar>
      </el-header>
      <el-container class="main-container">
        <el-aside class="siderBar leftBar" width="200px">
          <div class="mainPageItem" @click="$router.push('/home')">
            无锡公交管理方案
          </div>
          <el-menu
            class="el-menu-vertical-demo"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
          >
            <submenuItemOne :routes="routes"></submenuItemOne>
          </el-menu>
        </el-aside>

        <el-main class="main">
          123
          <Msg :data="{ name: 'cc' }" />
          <!-- <keep-alive>
            <router-view />
          </keep-alive> -->
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import headerBar from "./components/headerBar";
import submenuItem from "./components/submenuItem";
import submenuItemOne from "./components/submenuItemOne";
import { syncRoutes, role1, role2, toRoute, baseRoutes } from "@/router/routes";
import store from "@/store";
import router from "@/router";
import Msg from "cc_test_npm_hello";

export default {
  components: {
    submenuItem,
    headerBar,
    submenuItemOne,
    Msg,
  },
  computed: {},
  data() {
    return {
      routes: store.state.userInfo.routes,
    };
  },
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
