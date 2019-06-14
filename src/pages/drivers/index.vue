<template>
  <div>
    <AntCard>
      <el-form inline label-suffix=":" label-position="right">
        <el-form-item label="姓名">
          <el-input v-model="listQuery.driver"></el-input>
        </el-form-item>
        <el-form-item label="驾龄">
          <el-input v-model="listQuery.age"></el-input>
        </el-form-item>
        <el-form-item label="出生时间">
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
        <el-button type="primary" @click="addDriver">添加司机</el-button>
      </div>
      <el-table :data="tableData" @selection-change="handleSelectionChange">
        <el-table-column type="index" label="序号"></el-table-column>
        <el-table-column label="姓名" prop="name"></el-table-column>
        <el-table-column label="驾龄" prop="age"></el-table-column>
        <el-table-column label="工资" prop="salary"></el-table-column>
        <el-table-column label="出生日期" prop="birthDate"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button type="text">详情</el-button>
            <el-button type="text">修改</el-button>
            <el-button type="text" @click="dropDriver(scope.row.id)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </AntCard>
    <add :visible="addShow" @close="addClose"></add>
  </div>
</template>
<script>
import add from "./add";
import AntCard from "@/components/AntCard";
import { salaryList } from "@/api/authority/staff";
export default {
  components: {
    AntCard,
    add
  },
  data() {
    return {
      addShow: false,
      roles: [
        { id: 1, name: "人事" },
        { id: 2, name: "司机" },
        { id: 3, name: "经理" },
        { id: 4, name: "会计" }
      ], // 可由后台查出来
      chooseStaffs: [],
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
    this.salaryList();
  },
  methods: {
    handleSelectionChange(val) {
      this.chooseStaffs = val;
    },
    dropDriver(id) {
      this.$confirm("是否删除司机?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        this.$message({
          type: "success",
          message: "已成功删除!"
        });
      });
    },
    addDriver() {
      this.addShow = true;
    },
    addClose() {
      this.addShow = false;
      this.salaryList();
    },
    // 获取车辆列表
    salaryList() {
      salaryList().then(res => {
        this.tableData = res.data;
      });
    },
    // 根据条件搜索
    search() {
      salaryList(this.listQuery).then(res => {
        this.tableData = res.data;
      });
    },
    clear() {
      this.listQuery = {};
      this.salaryList();
    }
  }
};
</script>
<style lang="less" scoped>
</style>
