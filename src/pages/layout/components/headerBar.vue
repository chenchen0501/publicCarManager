<template>
  <div class="right">
    <div class="nav-button-default">
      <el-button @click="setDefaultRole">设为默认</el-button>
    </div>
    <el-select v-model="currentRole" class="nav-item nav-select">
      <el-option v-for="item in roles" :value="item.name" :label="item.name" :key="item.id"></el-option>
    </el-select>
    <el-badge :value="200" :max="99" class="item">
      <svg-icon icon-class="bell" class="nav-head-icon nav-item"/>
    </el-badge>
    <svg-icon icon-class="user" class="nav-head-icon nav-item"/>
    <span style="margin-left:5px;">{{currentRole}}</span>
  </div>
</template>
<script>
import svgIcon from "@/components/SvgIcon";
import { mapMutations, mapGetters, mapActions } from "vuex";
export default {
  components: {
    svgIcon
  },
  data() {
    return {
      roles: [
        { id: 1, name: "人事" },
        { id: 2, name: "司机" },
        { id: 3, name: "经理" },
        { id: 4, name: "会计" }
      ],
      currentRole: "人事"
    };
  },
  computed:{
    // ...mapGetters(['GET_ROLE'])
  },
  created() {
    // this.currentRole = this.GET_ROLE
    this.changeNewRoleAction('司机')
    // this.$store.dispatch('changeNewRoleAction',  await this.getDefaultRole())
  },
  methods: {
    ...mapMutations(["changDefaultRole"]),
    ...mapActions(['changeNewRoleAction']),
    // 设置默认角色
    setDefaultRole() {
      this.changDefaultRole(this.currentRole);
      this.$message.success("已设置为默认角色");
    },
    // 模拟从后台获取默认角色 --异步
    getDefaultRole(){
      return new Promise((rs,rj)=>{
        setTimeout(() => {
          rs('司机')
        }, 100);
      })
    }
  }
};
</script>

<style lang="less" scoped>
.right {
  float: right;
  height: 100%;
  display: flex;
  align-items: center;
  .nav-head-icon {
    font-size: 20px;
  }
  .nav-item {
    margin-left: 16px;
  }
  .nav-select {
    width: 100px;
  }
  .nav-button-default {
    height: 28px;
    // vertical-align: top;
  }
}
</style>
