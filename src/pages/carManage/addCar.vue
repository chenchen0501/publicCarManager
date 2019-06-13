<template>
  <el-dialog
    :visible.sync="dialogVisible"
    width="500"
    @close="handleClose"
    title="新增车辆"
    @open="handleOpen"
  >
    <el-form :model="form" ref="form" label-position="right" label-width="100px" :rules="rules">
      <el-row>
        <el-col :span="12">
          <el-form-item label="司机姓名" prop="driver">
            <el-input v-model="form.driver" class="itemWidth"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="驾龄" prop="age">
            <el-input-number
              v-model="form.age"
              :controls="false"
              :min="0"
              :precision="0"
              class="itemWidth"
            ></el-input-number>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="车辆颜色" prop="colorCode">
            <el-select v-model="form.colorCode" class="itemWidth">
              <el-option v-for="item in colors" :value="item.id" :key="item.id" :label="item.name"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="购买时间" prop="buyDate">
            <el-date-picker
              v-model="form.buyDataTime"
              type="date"
              placeholder="选择日期"
              class="itemWidth"
            ></el-date-picker>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <div slot="footer">
      <el-button type="primary" @click="submit">确定</el-button>
      <el-button @click="handleClose">取消</el-button>
    </div>
  </el-dialog>
</template>
<script>
import dialogHandle from "@/mixins/dialogHandle";
import { addCar } from "@/api/authority/staff";
export default {
  mixins: [dialogHandle],
  props: ["carData"],
  data() {
    return {
      isEdit: false,
      form: {},
      colors: [
        { id: 1, name: "红" },
        { id: 2, name: "黄" },
        { id: 3, name: "蓝" }
      ],
      rules: {
        driver: [
          { required: true, message: "请输入司机姓名", trigger: "blur" }
        ],
        age: [{ required: true, message: "请输入驾龄", trigger: "blur" }]
      }
    };
  },
  created() {
    this.isEdit = !!this.carData;
  },
  methods: {
    submit() {
      this.$refs.form.validate(valid => {
        if (valid) {
          addCar().then(res => {
            this.$message.success("新增成功!");
            this.handleClose();
          });
        }
      });
    },
    // 初始化数据
    initData() {
      this.form = {};
    },
    handleOpen() {
      if (this.isEdit) {
        this.form = this.carData;
      } else {
        this.form = {};
      }
    },
    handleClose() {
      this.$refs.form.resetFields();
      this.$emit("close");
    }
  }
};
</script>
<style lang="less" scoped>
.itemWidth {
  width: 150px;
}
</style>
