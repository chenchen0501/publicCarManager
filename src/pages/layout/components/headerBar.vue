<template>
  <div class="right">
    <div class="nav-button-default">
      <el-button @click="setDefaultRole">设为默认</el-button>
    </div>
    <el-select v-model="currentRole" @change="roleChange" class="nav-item nav-select">
      <el-option v-for="item in roles" :value="item.id" :label="item.name" :key="item.id"></el-option>
    </el-select>
    <el-badge :value="messageNum" :max="99" class="item">
      <svg-icon icon-class="bell" class="nav-head-icon nav-item" />
    </el-badge>
    <div class="user">
      <div @click="pullDownShow = !pullDownShow">
        <svg-icon icon-class="user" class="nav-head-icon nav-item" />
        <span style="margin-left:5px;cursor:pointer;">{{currentRole}}</span>
      </div>
      <div class="pull-down" v-if="pullDownShow">
        <div>修改密码</div>
        <div>退出</div>
      </div>
    </div>
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
      pullDownShow: false,
      messageNum: 100, // 根据后台返回计算
      roles: [
        { id: 1, name: "人事" },
        { id: 2, name: "司机" }
        // { id: 3, name: "经理" },
        // { id: 4, name: "会计" }
      ],
      currentRole: "人事"
    };
  },
  computed: {
    // ...mapGetters(['GET_ROLE'])
  },
  created() {
    // this.currentRole = this.GET_ROLE
    this.changeNewRoleAction();
    // this.$store.dispatch('changeNewRoleAction',  await this.getDefaultRole())
  },
  methods: {
    ...mapMutations(["changDefaultRole", "changeRoleId"]),
    ...mapActions(["changeNewRoleAction"]),
    // 切换角色
    roleChange(val) {
      this.changeRoleId(val)
      let newRole = this.roles.find(item => item.id === val).name
      this.changDefaultRole(newRole);
    },
    // 设置默认角色
    setDefaultRole() {
      this.changDefaultRole(this.currentRole);
      this.$message.success("已设置为默认角色");
    },
    // 模拟从后台获取默认角色 --异步
    getDefaultRole() {
      return new Promise((rs, rj) => {
        setTimeout(() => {
          rs("司机");
        }, 100);
      });
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
  .user {
    position: relative;
    .pull-down {
      position: absolute;
      top: 25px;
      left: 0;
      background: #fff;
      width: 69px;
      height: 36px;
      z-index: 1000;
      div {
        height: 18px;
        line-height: 18px;
        text-align: center;
      }
    }
  }
}
</style>
