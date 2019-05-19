<template>
  <div class="slide">
    <el-carousel height="240px">
      <el-carousel-item v-for="(item,idx) in list" :key="idx">
        <img :src="item.img">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [{
        url: '#sdads',
        img: 'http://p1.meituan.net/codeman/826a5ed09dab49af658c34624d75491861404.jpg'
      }, {
        url: '#sda',
        img: 'http://p0.meituan.net/codeman/a97baf515235f4c5a2b1323a741e577185048.jpg'
      }, {
        url: '#gfd',
        img: 'http://p0.meituan.net/codeman/a97baf515235f4c5a2b1323a741e577185048.jpg'
      }, {
        url: '#gfd',
        img: 'https://p1.meituan.net/travelcube/01d2ab1efac6e2b7adcfcdf57b8cb5481085686.png'
      }]
    }
  }
}
</script>

<style>

</style>
