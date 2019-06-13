<template>
  <div>
    <AntCard>
      <el-form inline label-suffix=":" label-position="right">
        <el-form-item label="车辆颜色">
          <el-select v-model="listQuery.colorCode">
            <el-option v-for="item in colors" :value="item.id" :key="item.id" :label="item.name"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="驾龄">
          <el-input-number v-model="listQuery.age" :precision="0" :controls="false" :min="0"></el-input-number>
        </el-form-item>
        <el-form-item label="司机姓名">
          <el-input v-model="listQuery.driver"></el-input>
        </el-form-item>
        <el-form-item label="购买时间">
          <el-date-picker
            v-model="listQuery.buyDate"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          ></el-date-picker>
        </el-form-item>
        <el-button type="primary" @click="search">查询</el-button>
        <el-button @click="clear">清空</el-button>
      </el-form>
      <div>
        <el-button type="primary" @click="addCar">新增车辆</el-button>
      </div>
      <el-table :data="tableData">
        <el-table-column type="index" label="序号"></el-table-column>
        <el-table-column label="驾驶员姓名" prop="driver"></el-table-column>
        <el-table-column label="驾龄" prop="age"></el-table-column>
        <el-table-column label="购买时间" prop="buyDataTime"></el-table-column>
        <el-table-column label="车辆颜色" prop="carColor"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button type="text" @click="detail(scope.row)">详情</el-button>
            <el-button type="text" @click="edit(scope.row)">修改</el-button>
            <el-button type="text" @click="deleteCar(scope.row.id)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </AntCard>
    <addCar :visible="addVisible" @close="addVisible = false" :carData="carData"></addCar>
    <detail :carData="carData" :visible="detailVisible" @close="detailVisible = false"></detail>
  </div>
</template>
<script>
import detail from "./detail";
import AntCard from "@/components/AntCard";
import { getCarList } from "@/api/authority/staff";
import addCar from "./addCar";
export default {
  components: {
    AntCard,
    addCar,
    detail
  },
  data() {
    return {
      tableData: [],
      colors: [
        { id: 1, name: "红" },
        { id: 2, name: "黄" },
        { id: 3, name: "蓝" }
      ],
      listQuery: {},
      addVisible: false,
      detailVisible: false,
      carData: {}
    };
  },
  mounted() {
    this.getCarList();
  },
  methods: {
    // 修改
    edit(val) {
      this.carData = val;
      this.addVisible = true;
    },
    // 车辆详情
    detail(val) {
      this.carData = val;
      this.detailVisible = true;
    },
    // 新增车辆
    addCar() {
      this.carData = {}
      this.addVisible = true;
    },
    deleteCar(id) {
      this.$confirm("是否删除该车辆?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "删除成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    // 获取车辆列表
    getCarList() {
      getCarList().then(res => {
        this.tableData = res.data;
      });
    },
    // 根据条件搜索
    search() {
      getCarList(this.listQuery).then(res => {
        this.tableData = res.data;
      });
    },
    clear() {
      this.listQuery = {};
      this.getCarList();
    }
  }
};
</script>
<style lang="less" scoped>
</style>
