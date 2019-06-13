<template>
  <div>
    <keep-alive>
      <router-view/>
    </keep-alive>
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
</style>
