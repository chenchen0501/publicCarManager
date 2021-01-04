<template>
  <div>
    <template v-for="child in menuRoutes">
      <router-link :to="basePath + '/' + child.path" :key="child.name">
        <el-menu-item :index="child.name">
          <span v-if="child.meta&&child.meta.icon" class="iconfont" :class="child.meta.icon"></span>
          <span v-if="child.meta&&child.meta.title" style="margin-left:10px;">{{child.meta.title}}</span>
        </el-menu-item>
      </router-link>
    </template>
  </div>
</template>
<script>
export default {
  props: ['routes'],
  data () {
    return {
      menuRoutes: this.routes[0].children,
      basePath: this.routes[0].path
    }
  },
  mounted () {
    console.log('传入menu的routes:', this.menuRoutes.children)
  },
  methods: {
    isSingleMenuShow (item) {
      return !item.children || (!item.children && !item.children.length)
    }
  }
}
</script>
