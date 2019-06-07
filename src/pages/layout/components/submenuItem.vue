<template>
  <div>
    <!-- 没有子路由 -->
    <template v-for="item in routes">
      <el-menu-item v-if="isSingleMenuShow(item)" :index="item.name"></el-menu-item>
      <el-submenu v-else>
        <submenuItem :routes="item"></submenuItem>
      </el-submenu>
    </template>
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
        item.isShow &&
        (!item.children || (item.children && !item.children.length))
      );
    }
  }
};
</script>
