<template>
  <div>
    <el-container>
      <el-header class="header" height="50px">Header</el-header>
      <el-container>
        <el-aside class="siderBar leftBar" width="200px">
          <el-menu
            class="el-menu-vertical-demo"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
          >
            <submenuItem :routes="routes"></submenuItem>
          </el-menu>
        </el-aside>
        <el-main class="main">
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import submenuItem from "./components/submenuItem";
import { childrenRoutes, mainRoute } from "@/router/routes";
export default {
  components: {
    submenuItem
  },
  created() {
    console.log("routes:", mainRoute);
  },
  data() {
    return {
      routes: childrenRoutes
    };
  }
};
</script>
<style lang="less" scoped>
.header{
  background: blue;
}
/deep/ .el-menu-item  {
  width: 200px;
}
/deep/ .el-submenu{
  width: 200px;
}
.leftBar{
  height: 100vh;
  background: #545c64;
}
.main {
  background: red;
}
</style>
