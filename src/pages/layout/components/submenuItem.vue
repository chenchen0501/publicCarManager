<template>
  <div>
    <!-- 没有子路由 -->
    <template v-for="item in routes">
      <router-link :to="item.path" :key="item.name" v-if="isSingleMenuShow(item)">
        <el-menu-item :index="item.name">
          <span v-if="item.meta&&item.meta.icon" class="iconfont" :class="item.meta.icon"></span>
          <span v-if="item.meta&&item.meta.title" style="margin-left:10px;">{{item.meta.title}}</span>
        </el-menu-item>
      </router-link>
      <!-- 存在子路由 -->
      <template v-else-if="isMoreMenuShow(item)">
        <el-submenu :index="item.name">
          <template slot="title">
            <span v-if="item.meta&&item.meta.icon" class="iconfont" :class="item.meta.icon"></span>
            <span v-if="item.meta&&item.meta.title" style="margin-left:10px;">{{item.meta.title}}</span>
          </template>
          <template v-for="(child,index) in item.children">
            <router-link :key="child.path" :to="item.path +'/'+ child.path">
              <el-menu-item :index="child.meta.title">
                <span v-if="child.meta&&child.meta.icon" class="iconfont" :class="child.meta.icon"></span>
                <span v-if="child.meta&&child.meta.title" style="margin-left:10px;">{{child.meta.title}}</span>
              </el-menu-item>
            </router-link>
          </template>
        </el-submenu>
      </template>
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
    // 没有子路由
    isSingleMenuShow(item) {
      let showFlag = true;
      if (item.isHidden) {
        return false;
      } else {
        return !item.children || (!item.children && !item.children.length);
      }
    },
    isMoreMenuShow(item) {
      return item.children && item.children.length > 0;
    }
  }
};
</script>
