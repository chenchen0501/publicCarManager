<template>
  <div>
    <el-menu class="el-menu-vertical-demo">
      <submenuItem :routes="routes"></submenuItem>
    </el-menu>
  </div>
</template>
<script>
import submenuItem from "./components/submenuItem";
import routes from "@/router/routes";
export default {
  components: {
    submenuItem
  },
  created() {
    console.log("routes:", routes);
  },
  data() {
    return {
      routes: routes
    };
  }
};
</script>
<style lang="less" scoped>
</style>
