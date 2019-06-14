<template>
  <div>
    <AntCard>
      <el-form inline label-suffix=":" label-position="right">
        <el-form-item label="姓名">
          <el-input v-model="listQuery.driver"></el-input>
        </el-form-item>
        <el-form-item label="职位">
          <el-select v-model="listQuery.role">
            <el-option v-for="item in roles" :value="item.name" :label="item.name" :key="item.id"></el-option>
          </el-select>
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
        <el-button type="primary" @click="mulDeliverSalary">批量发工资</el-button>
      </div>
      <el-table :data="tableData" @selection-change="handleSelectionChange">
        <el-table-column type="selection" label="全选"></el-table-column>
        <el-table-column label="姓名" prop="name"></el-table-column>
        <el-table-column label="年龄" prop="age"></el-table-column>
        <el-table-column label="职位" prop="job"></el-table-column>
        <el-table-column label="实发工资" prop="salary"></el-table-column>
        <el-table-column label="出生日期" prop="birthDate"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button type="text">详情</el-button>
            <el-button type="text">修改工资</el-button>
            <el-button type="text" @click="deliverMoney(scope.row.id)">发工资</el-button>
          </template>
        </el-table-column>
      </el-table>
    </AntCard>
  </div>
</template>
<script>
import AntCard from "@/components/AntCard";
import { salaryList } from "@/api/authority/staff";
export default {
  components: {
    AntCard
  },
  data() {
    return {
      roles: [
        { id: 1, name: "人事" },
        { id: 2, name: "司机" },
        { id: 3, name: "经理" },
        { id: 4, name: "会计" }
      ],  // 可由后台查出来
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
    deliverMoney(id) {
      this.$confirm("是否确定发工资?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        this.$message({
          type: "success",
          message: "已成功发工资!"
        });
      });
    },
    mulDeliverSalary() {
      if (this.chooseStaffs.length == 0) {
        this.$message.warning("请先选择人员");
        return;
      }
      this.$confirm("是否确定批量发工资?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "已成功发工资!"
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
