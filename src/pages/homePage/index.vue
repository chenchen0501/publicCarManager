<template>
  <div>
    <AntCard>
      <div class="bg"></div>
    </AntCard>
  </div>
</template>
<script>
import AntCard from "@/components/AntCard";
export default {
  components: {
    AntCard
  },
  data() {
    return {};
  }
};
</script>
<style lang="less" scoped>
.bg {
  background: url("/static/public-car-main.png") no-repeat center #fff;
  height: calc(100vh - 150px);
  text-align: center;
  background-size: contain;
}
</style>
