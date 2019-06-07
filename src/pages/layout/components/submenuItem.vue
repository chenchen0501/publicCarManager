<template>
  <div>
    <!-- 没有子路由 -->
    <el-menu-item v-for="item in routes" :key="item.name" v-if="isSingleMenuShow(item)" :index="item.name"></el-menu-item>
    <el-submenu v-else>
      <submenuItem :routes="item"></submenuItem>
    </el-submenu>
  </div>
</template>
<script>
export default {
  name: "submenuItem",
  props: ["routes"],
  data() {
    return {};
  },
  methods: {
    isSingleMenuShow(item) {
      return (
        !item.isHidden &&
        (!item.children || (item.children && !item.children.length))
      );
    }
  }
};
</script>
