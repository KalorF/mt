<template>
  <div class="page-index">
    <el-row>
      <el-col :span="5">
        <emenu />
      </el-col>
      <el-col :span="19">
        <life />
      </el-col>
    </el-row>
    <el-row :span="24">
      <artistic />
    </el-row>
  </div>
</template>

<script>
import Emenu from '@/components/index/menu.vue'
import life from '@/components/index/life.vue'
import artistic from '@/components/index/artistic'
export default {
  components: {
    Emenu,
    life,
    artistic
  }
}
</script>

<style lang="scss">
  @import '@/assets/css/index/index.scss';
</style>
