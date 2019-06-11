<template>
  <div class="ant-card">
    <div class="ant-card-body">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "antCard",

  data() {
    return {};
  }
};
</script>



<style lang="less" scoped>
.ant-card {
  font-family: "Monospaced Number", "Chinese Quote", -apple-system,
    BlinkMacSystemFont, "Segoe UI", Roboto, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 14px;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.65);
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  list-style: none;
  background: #fff;
  border-radius: 2px;
  position: relative;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
}

.ant-card-body {
  padding: 24px;
  zoom: 1;
  overflow: auto;
}
</style>
