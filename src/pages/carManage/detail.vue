<template>
  <el-dialog :visible.sync="dialogVisible" width="500" @close="handleClose" title="详情">
    <el-form :model="form" ref="form" label-position="right" label-width="100px" label-suffix=":">
      <el-row>
        <el-col :span="12">
          <el-form-item label="司机姓名" prop="driver">{{carData.driver}}</el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="驾龄" prop="age">{{carData.age}}</el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="车辆颜色" prop="colorCode">{{carData.carColor}}</el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="购买时间" prop="buyDate">{{carData.buyDataTime}}</el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <div slot="footer">
      <el-button @click="handleClose">关闭</el-button>
    </div>
  </el-dialog>
</template>
<script>
import dialogHandle from "@/mixins/dialogHandle";
export default {
  mixins: [dialogHandle],
  props: ["carData"],
  data() {
    return {
      form: {},
      colors: [
        { id: 1, name: "红" },
        { id: 2, name: "黄" },
        { id: 3, name: "蓝" }
      ]
    };
  },
  methods: {}
};
</script>
<style lang="less" scoped>
.itemWidth {
  width: 150px;
}
</style>
