<template>
  <el-container class="layout-default">
    <el-header><my-header /></el-header>
    <el-main>
      <nuxt />
    </el-main>
    <el-footer height="100%">
      <Myfooter />
    </el-footer>
  </el-container>
</template>
<script>
import MyHeader from '@/components/public/header/index.vue'
import Myfooter from '@/components/public/footer/index.vue'
export default {
  components: {
    MyHeader,
    Myfooter
  }
}
</script>
<style lang="scss">
  @import "@/assets/css/public/layout.scss";
</style>
